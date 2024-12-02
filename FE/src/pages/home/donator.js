import React from "react";
import "./home.scss";
import { toUSD } from "../../ultil";

const Donator = ({money, username, rank}) => {
    return (
        <div className="donateDetail">
            <div className="donateTop">
                <div className="rank">
                    <p>{rank}</p>
                </div>
                <div className="donateName">
                    <p>{username}</p>
                </div>
            </div>
            <div className="donateBottom">
                <strong>{toUSD(money)}</strong>
            </div>
        </div>
    );
};

export default Donator;
