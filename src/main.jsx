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
  RouterProvider,
} from "react-router-dom";
import {Login,Register} from './pages/Auth';
import { UserClinic, UserPetDating, UserPetFinder } from './pages/User';
import { AdminClinicList, AdminDashboard, AdminOwnerRequest, AdminPetDating, AdminPetList } from './pages/Admin';
import Profile from './pages/Profile/Profile.jsx';
import { VetDashboard, VetDetails } from './pages/Vet';

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
    path: "/admin",
    element: <AdminDashboard/>,
  },
  {
    path: "/admin/pet",
    element: <AdminPetList/>,
  },
  {
    path: "/admin/dating",
    element: <AdminPetDating/>,
  },
  {
    path: "/admin/request",
    element: <AdminOwnerRequest/>,
  },
  {
    path: "/admin/clinic",
    element: <AdminClinicList/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/vet",
    element: <VetDashboard/>,
  },
  {
    path: "/vet/details",
    element: <VetDetails/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
