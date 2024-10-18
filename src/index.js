import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./storage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Skeleton from "./components/skeleton";
import Login from "./pages/login";
import ProtectedRoute from "./components/middleware/protectedRoute";
import Home from "./pages/home";
import DetailProject from "./pages/detail";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <Skeleton />,
        children: [
            {
                element: <ProtectedRoute component={<Home />} />,
                index: true,
            },
            {
                element: <ProtectedRoute component={<DetailProject />} />,
                path:"/detail"
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
