import React, { useState } from "react";
import "./index.scss";
import { checkFormFieldEmpty } from "../../ultil";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BACKEND_URL } from "../../setting";
import { taskAction } from "../../storage/taskReducer";

const CreatePost = () => {
    const navigator = useNavigate();
    const [isFormError, setIsFormError] = useState(false);
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(`${BACKEND_URL}/createPost`, data);
            return response;
        },
        onSuccess: (response) => {
            dispatch(taskAction.addPost(response));
            queryClient.invalidateQueries(["fetchData"]);
            toast.success("Create post success !");
            navigator("/");
        },
        onError: () => {
            toast.error("Can't create post !");
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let title = e.target[0].value;
        let donation = e.target[1].value;
        let member = e.target[2].value;
        let description = e.target[3].value;

        if (checkFormFieldEmpty(title) || checkFormFieldEmpty(donation) || checkFormFieldEmpty(member) || checkFormFieldEmpty(description)) {
            setIsFormError(true);
        } else {
            mutate({ title, donation, member, description });
        }
    };

    const error = (
        <div className="createPostError">
            <p>All fields can't empty or not valid data.</p>
        </div>
    );
    return (
        <div className="createPostWrapper">
            <form className="createPostContainer" onSubmit={handleSubmit}>
                <h1>Create your new idea.</h1>
                {isFormError && error}
                <div className="row">
                    <label htmlFor="title">Project title</label>
                    <input type="text" id="title" name="title" placeholder="Project title" />
                </div>
                <div className="row">
                    <label htmlFor="donation">Dontation target</label>
                    <input type="number" id="donation" name="donation" placeholder="Donation target" min={0} />
                </div>
                <div className="row">
                    <label htmlFor="member">Member target</label>
                    <input type="number" id="member" name="member" placeholder="Member target" min={1} />
                </div>
                <div className="descriptionWrapper">
                    <label htmlFor="descriotion">Description</label>
                    <textarea id="description" name="description" placeholder="Project description" />
                </div>
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
