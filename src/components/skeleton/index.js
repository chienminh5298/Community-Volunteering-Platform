import React, { useEffect, useState } from "react";
import "./skeleton.scss";
import Header from "./header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Skeleton = () => {
    const navigator = useNavigate();
    const location = useLocation();
    const [isCreatePath, setIsCreatePath] = useState(true);

    useEffect(() => {
        if (location.pathname === "/createPost") {
            setIsCreatePath(false);
        } else {
            setIsCreatePath(true);
        }
    }, [location]);

    return (
        <div className="skeletonWrapper">
            {isCreatePath ? (
                <div className="floatingBackground" onClick={() => navigator("/createPost")}>
                    Create a post
                </div>
            ) : (
                ""
            )}
            <Header />
            <body>
                <Outlet />
            </body>
        </div>
    );
};

export default Skeleton;
