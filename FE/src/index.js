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
import CreatePost from "./pages/createPost";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                path: "/detail",
            },
            {
                element: <ProtectedRoute component={<CreatePost />} />,
                path: "/createPost",
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ToastContainer theme="dark" />
                <RouterProvider router={router} />
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
