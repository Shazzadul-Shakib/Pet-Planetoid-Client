import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import PetWorld from "../Pages/PetWorld/PetWorld";
import ShelterRescue from "../Pages/Shelter&Rescue/ShelterRescue";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, //Main route of client side //TODO: Dashboard route will be added
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/petworld",
        element: <PetWorld />,
      },
      {
        path: "/shelters&rescues",
        element: <ShelterRescue />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
