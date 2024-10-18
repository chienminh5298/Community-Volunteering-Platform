import React from "react";
import "./home.scss";
import Post from "./post";
import Activities from "./activities";
import { toUSD } from "../../ultil";
import Donator from "./donator";

const Home = () => {
    return (
        <div className="homeWrapper">
            <div className="leftSide">
                <div className="postDetail">
                    <Activities />
                </div>
            </div>
            <div className="middleSide">
                <div className="filterBox">
                    <div className="radioWrapper">
                        <input type="radio" id="option1" name="options" value="all" />
                        <label className="radiolabel" htmlFor="option1">
                            All
                        </label>
                        <input type="radio" id="option2" name="options" value={200} />
                        <label className="radiolabel" htmlFor="option2">
                            Most liked
                        </label>
                        <input type="radio" id="option3" name="options" defaultChecked={true} value={100} />
                        <label className="radiolabel" htmlFor="option3">
                            Most donate
                        </label>
                        <input type="radio" id="option4" name="options" value={50} />
                        <label className="radiolabel" htmlFor="option4">
                            Most member
                        </label>
                    </div>
                </div>
                <div className="listPost">
                    <div className="wrapPost">
                        <Post title="Raise the wood" donateValue={300000} donateTarget={1000000} memberValue={53} memberTarget={100} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" isJoin={false} isLike={true} />
                        <Post title="Raise the wood" donateValue={300000} donateTarget={1000000} memberValue={53} memberTarget={100} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" isJoin={false} isLike={true} />
                        <Post title="Raise the wood" donateValue={300000} donateTarget={1000000} memberValue={53} memberTarget={100} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" isJoin={false} isLike={true} />
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <div className="topDonation">
                    <h1>Top donate</h1>
                    <div className="listDonate">
                        <Donator money={214124} username="chienminh5298" rank={1} />
                        <Donator money={214124} username="chienminh5298" rank={2} />
                        <Donator money={214124} username="chienminh5298" rank={3} />
                        <Donator money={214124} username="chienminh5298" rank={4} />
                        <Donator money={214124} username="chienminh5298" rank={5} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
