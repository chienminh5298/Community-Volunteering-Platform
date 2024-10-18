import React from "react";
import "./skeleton.scss";
import logo from "../../asset/4.png";
import avatar from "../../asset/3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        navigate("/login");
    };

    return (
        <div className="header">
            <div className="headerLogo">
                <img src={logo} alt="Logo" />
                <p>VOLUNTEERING PLATFORM</p>
            </div>
            <div className="headerUser">
                <p className="username">chienminh5298</p>
                <div className="headerAvatarWrapper">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="logoutButton" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faDoorOpen} />
                </div>
            </div>
        </div>
    );
};

export default Header;
