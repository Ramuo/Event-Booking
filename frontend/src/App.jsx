import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import HomePage from './pages/HomePage';
import LogingPage from "./pages/auth/LogingPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from './pages/ProfilePage';


import EventsListPage from './pages/admin/EventsListPage';
import CreateEventPage from './pages/admin/CreateEventPage';
import EditEventPage from './pages/admin/EditEventPage'

import PrivateRoute from "./components/privateRoute"
import AdminRoute from "./components/privateRoute"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LogingPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>

        <Route path="/" element={<PrivateRoute/>}>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Route>

        <Route path="/" element={<AdminRoute/>}>
          <Route path="/admin/createEvent" element={<CreateEventPage/>}/>
          <Route path="/admin/eventsList" element={<EventsListPage/>}/>
          <Route path="/admin/event/:id/edit" element={<EditEventPage/>}/>
        </Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
