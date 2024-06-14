import {useEffect} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {FaHome, FaListAlt, FaRegFileAlt, FaSignOutAlt, FaBookmark, FaUser} from "react-icons/fa";
import {HiUsers} from "react-icons/hi";
import {FaListUl} from "react-icons/fa6";


import {useLogoutMutation} from "../../slices/userApiSlice";
import {logout} from "../../slices/authSlice";

const Nav = () => {

  const {userInfo} = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const userMenu=[
    {
      name: "Accueil",
      path: "/",
      icon: <FaHome/>,
      isActive: currentPath === "/",
    },
    {
      name: "Profil",
      path: "/profile",
      icon: <FaUser/>,
      isActive: currentPath === "/profile",
    },
    {
      name: "Réservation",
      path: "/bookings",
      icon: <FaBookmark/>,
       isActive: currentPath === "/bookings"
    },
    {
      name: "Rapport",
      path: "/report",
      icon: <FaRegFileAlt/>,
       isActive: currentPath === "/report"
    },
    {
      name: "Déconnexion",
      path: "/logout",
      icon: <FaSignOutAlt/>,
      isActive: false,
    },
  ];
  
  const adminMenu=[
    {
      name: "Accueil",
      path: "/",
      icon: <FaHome/>,
      isActive: currentPath === "/",
    },
    {
      name: "Évènements",
      path: "/admin/eventsList",
      icon: <FaListUl/>,
      isActive: currentPath.includes("/admin/events")
    },
    {
      name: "Réservation",
      path: "/admin/bookings",
      icon: <FaBookmark/>,
      isActive: currentPath.includes("/admin/bookings")
    },
    {
      name: "Utilisateurs",
      path: "/admin/users",
      icon: <HiUsers/>,
      isActive: currentPath.includes("/admin/users")
    },
    {
      name: "Déconnexion",
      path: "/logout",
      icon: <FaSignOutAlt/>,
      isActive: false,
    },
  ];

  const manuToRender = userInfo && userInfo.isAdmin ? adminMenu : userMenu;



  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='lg:bg-rose-50 h-full w-full p-5'>
      <div className="flex flex-col gap-1 mt-5">
        <h1 className='text-2xl font-bold text-black'>BARRY
          <b className='text-red-500 font-bold pl-1'>EVENTS</b>
        </h1>
        <span className='text-sm text-black font-semibold'>{userInfo && userInfo.name }</span>
      </div>

      <div className="flex flex-col gap-2 mt-10">
        {manuToRender.map((menu, index) => (
          <div 
          key={index} 
          className={`flex gap-5 text-md items-center cursor-pointer px-5 py-3 rounded ${
            menu.isActive ? "bg-red-200 text-white" : ""
          }`}
          onClick={() => {
            if(menu.name === "Déconnexion"){
              logoutHandler();
            }else{
              navigate(menu.path)
            }
          }}
          >
            <span className='text-2xl text-black'>{menu.icon}</span>
            <span className='text-xl text-black'>{menu.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Nav