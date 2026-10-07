import { createBrowserRouter } from "react-router-dom";
import PublicWrapper from "../layouts/publicLayouts/publicWrapper";
import NotFound from "../pages/public/NotFound";
import Home from "../pages/public/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DoctorSearch from "../pages/public/DoctorSearch";
import DoctorDetails from "../pages/public/DoctorDetails";
import HospitalSearch from "../pages/public/HospitalSearch";
import HospitalDetails from "../pages/public/HospitalDetails";
import BloodSearch from "../pages/public/BloodSearch";




const Routes = createBrowserRouter([
  {
    element: <PublicWrapper />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Login", element: <Login /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/doctors", element: <DoctorSearch /> },
      { path: "/doctors/:id", element: <DoctorDetails /> },
      { path: "/hospitals", element: <HospitalSearch /> },
      { path: "/hospitals/:id", element: <HospitalDetails /> },
      { path: "/blood", element: <BloodSearch /> },
      
    ],
  },
  { path: "*", element: <NotFound /> },
])

export default Routes