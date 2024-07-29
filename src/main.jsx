import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import {Login,Register} from './pages/Auth';
import { UserClinic, UserPetDating, UserPetFinder } from './pages/User';
import { AdminClinicList, AdminDashboard, AdminOwnerRequest, AdminPetDating, AdminPetList } from './pages/Admin';
import Profile from './pages/Profile/Profile.jsx';
import { VetClinic, VetDashboard, VetDetails } from './pages/Vet';
import { ShelterAdoption, ShelterDashboard, ShelterDetails, ShelterPet } from './pages/Shelter/index.jsx';
import { ForumDashboard, ForumMessage } from './pages/Forum/index.jsx';

// Retrieve user object from localStorage
const userType = localStorage.getItem("userType");
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/user/petfinder",
    element: <UserPetFinder/>,
  },
  {
    path: "/user/petdating",
    element: <UserPetDating/>,
  },
  {
    path: "/user/clinic",
    element: <UserClinic/>,
  },
  {
    path: '/admin',
    element: userType === 'admin' ? <AdminDashboard /> : <Login/>,
  },
  {
    path: '/admin/pet',
    element: userType === 'admin' ? <AdminPetList /> : <Login/>,
  },
  {
    path: '/admin/dating',
    element: userType === 'admin' ? <AdminPetDating /> : <Login/>,
  },
  {
    path: '/admin/request',
    element: userType === 'admin' ? <AdminOwnerRequest /> : <Login/>,
  },
  {
    path: '/admin/clinic',
    element: userType === 'admin' ? <AdminClinicList /> : <Login/>,
  },
  {
    path: '/vet',
    element: userType === 'vet' ? <VetDashboard /> : <Login/>,
  },
  {
    path: '/vet/details',
    element: userType === 'vet' ? <VetDetails /> : <Login/>,
  },
  {
    path: '/vet/clinic',
    element: userType === 'vet' ? <VetClinic /> : <Login/>,
  },
  {
    path: '/shelter',
    element: userType === 'shelter' ? <ShelterDashboard /> : <Login/>,
  },
  {
    path: '/shelter/details',
    element: userType === 'shelter' ? <ShelterDetails /> : <Login/>,
  },
  {
    path: '/shelter/adoption',
    element: userType === 'shelter' ? <ShelterAdoption /> : <Login/>,
  },
  {
    path: '/shelter/pet',
    element: userType === 'shelter' ? <ShelterPet /> : <Login/>,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/user/forum',
    element: userType != "null" ? <ForumDashboard /> : <Login/>, 
  },
  {
    path: '/admin/forum',
    element: userType != "null" ? <ForumDashboard /> : <Login/>, 
  },
  {
    path: '/shelter/forum',
    element: userType != "null" ? <ForumDashboard /> : <Login/>, 
  },
  {
    path: '/vet/forum',
    element: userType != "null" ? <ForumDashboard /> : <Login/>, 
  },
  {
    path: '/user/forum/message',
    element: userType != "null" ? <ForumMessage /> : <Login/>, 
  },
  {
    path: '/admin/forum/message',
    element: userType != "null" ? <ForumMessage /> : <Login/>, 
  },
  {
    path: '/vet/forum/message',
    element: userType != "null" ? <ForumMessage /> : <Login/>, 
  },
  {
    path: '/shelter/forum/message',
    element: userType != "null" ? <ForumMessage /> : <Login/>, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
