import { useState, useEffect } from "react"; 
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import WelcomeContent from "./common/WelcomeContent";
import Loader from "../../components/Loader"
import {toast} from "react-toastify"

import {useLoginMutation} from "../../slices/userApiSlice"
import {setCredentials} from "../../slices/authSlice";

const LogingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
      try {
        const res = await login({email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 lg:flex hidden">
        <WelcomeContent />
      </div>
      <div className="h-screen flex items-center justify-center">
        <form
        className="flex flex-col gap-2 w-96"
        onSubmit={submitHandler}
        >
          <h1 className="text-2xl font-bold text-gray-600">
            Se Connecter
          </h1>
          <input 
          type="email" 
          placeholder="E-mail" 
          className="input input-bordered w-full max-w-md mb-2" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input 
          type="password" 
          placeholder="Mot de passe" 
          className="input input-bordered w-full max-w-md mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button 
          type="submit"
          className="btn bg-black text-white text-md w-full"
          >
            Envoyer
          </button>
          <Link to={redirect ? `/register?redirect=${redirect}`: '/register'}>Vous n'avez pas de compte? S'inscrire</Link>
          {isLoading  && <Loader/>}
        </form>
      </div>
    </div>
  );
}

export default LogingPage;
