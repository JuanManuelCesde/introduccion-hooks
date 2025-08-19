import Login from "../pages/Login";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home"; // Assuming Home is imported or defined elsewhere
export let routerApp = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/servicios",
        element: <Servicios />,
    },
    {
        path: "/contacto",
        element: <Contacto />,
    },
    {
        path: "/home",
        element: <Home />, // Assuming Home is imported or defined elsewhere
    },
    {
        path: "*",
        element: <h1>Error 404</h1>,
    },
];