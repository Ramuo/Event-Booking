import {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Sidebar from '../components/header/Sidebar';

const ProfilePage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');

    
  const {userInfo} = useSelector((state) => state.auth);

    // useEffect(() => {
    //     if(userInfo){
      
    //     }
    //   }, [])
    return (
        <div className="flex lg:flex-row flex-col gap-5 h-screen">
            <Sidebar/>
            <div className="flex-1">
                <div className="hello">ProfilePage</div>
            </div>
        </div>
    )
}

export default ProfilePage