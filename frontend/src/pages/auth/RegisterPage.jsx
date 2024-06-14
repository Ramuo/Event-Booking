import { useState, useEffect } from "react"; 
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Form, Input, Button} from "antd"
import WelcomeContent from "./common/WelcomeContent";
import Loader from "../../components/Loader"
import {toast} from "react-toastify"

import {useRegisterMutation} from "../../slices/userApiSlice"
import {setCredentials} from "../../slices/authSlice";

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

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
        const res = await register({ name, email, password }).unwrap();
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
            S'inscrire
          </h1>
          <input 
          type="text" 
          placeholder="Nom" 
          className="input input-bordered w-full max-w-md mb-2" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
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
          <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>Vous avez déjà un compte? Se connecter</Link>
          {isLoading  && <Loader/>}
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;