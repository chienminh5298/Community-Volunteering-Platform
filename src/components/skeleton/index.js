import React from "react";
import "./skeleton.scss";
import Header from "./header";
import { Outlet } from "react-router-dom";

const Skeleton = () => {
    return (
        <div className="skeletonWrapper">
            <Header />
            <body>
                <Outlet />
            </body>
        </div>
    );
};

export default Skeleton;
