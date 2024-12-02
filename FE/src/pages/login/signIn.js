import React, { useState } from "react";
import "./login.scss";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BACKEND_URL } from "../../setting";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { checkFormFieldEmpty } from "../../ultil";

const SignIn = () => {
    const [isFormErr, setIsFormErr] = useState(false);
    const navigator = useNavigate();
    const { mutate } = useMutation({
        mutationFn: async (data) => {
            const res = await axios.post(`${BACKEND_URL}/signIn`, data);
            console.log(res)
        },
        onSuccess: () => {
            navigator("/");
        },
        onError: () => {
            toast.error("Username or password is not correct.");
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;

        if (checkFormFieldEmpty(username) || checkFormFieldEmpty(password)) {
            setIsFormErr(true);
        } else {
            mutate({ username, password });
        }
    };

    const error = (
        <div className="signError">
            <p>All fields can't empty or password does not match</p>
        </div>
    );

    return (
        <form className="signIn" onSubmit={handleSubmit}>
            <h2>Welcome back!</h2>
            {isFormErr && error}
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default SignIn;
