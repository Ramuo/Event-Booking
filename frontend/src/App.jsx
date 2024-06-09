import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import HomePage from './pages/HomePage';
import LogingPage from "./pages/auth/LogingPage";
import RegisterPage from "./pages/auth/RegisterPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LogingPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
