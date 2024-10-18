import React from "react";
import "./home.scss";
import Activity from "./activity";
import { toUSD } from "../../ultil";

const Activities = () => {
    return (
        <div className="actWrapper">
            <h1>Activities</h1>
            <div className="listAct">
                <Activity date="Wed 29th May 2024" content={toUSD(24233)} username="chienminh5298" project="Raise the wood" action="donated" />
                <Activity date="Wed 29th May 2024" content={toUSD(24233)} username="chienminh5298" project="Raise the wood" action="donated" />
                <Activity date="Wed 29th May 2024" content={""} username="chienminh5298" project="Raise the wood" action="joined" />
                <Activity date="Wed 29th May 2024" content={""} username="chienminh5298" project="Raise the wood" action="liked" />
                <Activity date="Wed 29th May 2024" content={""} username="chienminh5298" project="Raise the wood" action="joined" />
            </div>
        </div>
    );
};

export default Activities;
