import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import PetWorld from "../Pages/PetWorld/PetWorld";
import ShelterRescue from "../Pages/Shelter&Rescue/ShelterRescue";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";


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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/petworld",
        element: (
          <PrivateRoute>
            <PetWorld />
          </PrivateRoute>
        ),
      },
      {
        path: "/shelters&rescues",
        element: <ShelterRescue />,
      },
    ],
  },
]);
