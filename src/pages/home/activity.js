import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

const Activity = ({ date, content, action, username, project }) => {
    return (
        <div className="actDetailWrapper">
            <div className={`actContent ${action}`}>
                <div className="actTime">
                    <small>{date}</small>
                </div>
                <p>
                    <strong>{username}</strong> {action} {content}
                </p>
            </div>
            <div className="toProject">
                <Link to="#">{project}</Link>
            </div>
        </div>
    );
};

export default Activity;
