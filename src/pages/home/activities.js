import React, { useEffect } from "react";
import "./home.scss";
import Activity from "./activity";
import { toUSD } from "../../ultil";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BACKEND_URL } from "../../setting";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../../storage/taskReducer";
import { useNavigate } from "react-router-dom";

const Activities = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activities = useSelector((state) => state.taskReducer.activities);

    const { data } = useQuery({
        queryFn: async () => {
            await axios.get(`${BACKEND_URL}/activities`);
        },
        queryKey: ["fetchActivities"],
        staleTime: 30000,
        enabled: activities.length === 0,
    });

    useEffect(() => {
        if (data) {
            dispatch(taskAction.fetchActivities(data));
        }
    }, [data]);

    const handleOnClick = (id) => {
        navigate(`/detail?id=${id}`);
    };

    const renderActivities = activities.map((act, idx) => {
        if (act.type === "joined") {
            return (
                <div onClick={() => handleOnClick(2424)} key={idx}>
                    <Activity date={act.date} content={""} username={act.username} project={act.title} action="joined" />
                </div>
            );
        } else if (act.type === "liked") {
            return (
                <div onClick={() => handleOnClick(2424)} key={idx}>
                    <Activity date={act.date} content={""} username={act.username} project={act.title} action="liked" />
                </div>
            );
        } else {
            return (
                <div onClick={() => handleOnClick(2424)} key={idx}>
                    <Activity date={act.date} content={toUSD(24233)} username={act.username} project={act.title} action="donated" />
                </div>
            );
        }
    });
    return (
        <div className="actWrapper">
            <h1>Activities</h1>
            <div className="listAct">{renderActivities}</div>
        </div>
    );
};

export default Activities;
