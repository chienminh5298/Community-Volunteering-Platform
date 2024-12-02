import React, { useState } from "react";
import "./login.scss";
import { checkFormFieldEmpty } from "../../ultil";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BACKEND_URL } from "../../setting";
import { toast } from "react-toastify";

const SignUp = ({setIsCreateAccount}) => {
    const [isFormErr, setIsFormErr] = useState(false);
    const { mutate } = useMutation({
        mutationFn: async (data) => {
            await axios.post(`${BACKEND_URL}/signUp`, data);
        },
        onSuccess: () => {
            toast.success("Sign up successfully.");
            setIsCreateAccount(false)
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstname = e.target[0].value;
        const lastname = e.target[1].value;
        const username = e.target[2].value;
        const password = e.target[3].value;
        const repassword = e.target[4].value;
        if (checkFormFieldEmpty(firstname) || checkFormFieldEmpty(lastname) || checkFormFieldEmpty(username) || checkFormFieldEmpty(password) || checkFormFieldEmpty(repassword) || password !== repassword) {
            setIsFormErr(true);
        } else {
            mutate({ firstname, lastname, username, password });
        }
    };

    const error = (
        <div className="signError">
            <p>All fields can't empty or password does not match</p>
        </div>
    );
    return (
        <form className="signUp" onSubmit={handleSubmit}>
            <h2>We are glad you are here!</h2>
            {isFormErr && error}
            <div className="detailInfoWrapper">
                <h3>Information</h3>
                <div className="detailInfo">
                    <input type="text" name="firstname" placeholder="First name" />
                    <input type="text" name="lastname" placeholder="Last name" />
                </div>
            </div>
            <div className="credentialWrapper">
                <h3>Credential</h3>
                <div className="credential"></div>
                <input type="text" placeholder="Username" name="username" />
                <input type="password" placeholder="Password" name="password" />
                <input type="password" placeholder="Re-enter password" name="repassword" />
                <button type="submit">Sign up</button>
            </div>
        </form>
    );
};

export default SignUp;
