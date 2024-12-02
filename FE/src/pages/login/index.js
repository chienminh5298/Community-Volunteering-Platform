import React, { useState } from "react";
import "./login.scss";
import sideLogo from "../../asset/2.png";
import { Link } from "react-router-dom";
import SignIn from "./signIn";
import SignUp from "./signUp";

const Login = () => {
    const [isCreateAcctount, setIsCreateAccount] = useState(false);
    return (
        <div className="wrapper">
            <div className="leftSide">
                <div className="img">
                    <img src={sideLogo} alt="Logo" />
                </div>
                <div className="describe">
                    <h1>Project Overview</h1>
                    <p>The Community Volunteering Platform will serve as a bridge between volunteers and organizations, enhancing community engagement and promoting social support. The platform’s goal is to empower users (volunteers and organizations) to post and discover opportunities, interact based on shared interests, and contribute to reducing social inequality.</p>
                </div>
                <div className="team">
                    <h2>Team member</h2>
                    <ul>
                        <li>Product manager: Minh Nguyen</li>
                        <li>Scrum Master: Lynn-Chian Chen</li>
                        <li>Development: August Boland</li>
                        <li>Development: Daniel Delgado Granados</li>
                    </ul>
                </div>
            </div>
            <div className="rightSide">
                <div className="loginWrapper">
                    {isCreateAcctount ? <SignUp setIsCreateAccount={setIsCreateAccount}/> : <SignIn />}
                    <div className="resetAccount">
                        <ul>
                            <li>
                                <Link to="#">Forgot your password?</Link>
                            </li>
                            <li>
                                <Link to="#">Forgot your username?</Link>
                            </li>
                            <li>
                                <Link to="#">Need help?</Link>
                            </li>
                            {isCreateAcctount ? (
                                <li onClick={() => setIsCreateAccount(false)}>
                                    <Link to="#">Sign in</Link>
                                </li>
                            ) : (
                                <li onClick={() => setIsCreateAccount(true)}>
                                    <Link to="#">Create account</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <p>Contact us: +1 (561)-242-xxxx</p>
            </div>
        </div>
    );
};

export default Login;
