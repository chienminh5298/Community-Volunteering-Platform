import React from "react";
import "./detail.scss";
import { useSelector } from "react-redux";
import { toUSD } from "../../ultil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

const DetailProject = () => {
    const post = useSelector((state) => state.taskReducer.data["2424"]);

    return (
        <div className="detailProjectWrapper">
            <div className="postWrapper">
                <h1>{post.title}</h1>
                <div className="donationWrapper">
                    <div className="donationValue">
                        <h3>Donation: </h3>
                        <p>
                            {toUSD(post.donateValue)} / {toUSD(post.donateTarget)}
                        </p>
                    </div>
                    <div className="donationProcessBarWrapper">
                        <div className="donationProcessBar"></div>
                    </div>
                </div>
                <div className="memberWrapper">
                    <h3>Member:</h3>
                    <div className="memberValue">
                        <p>
                            {" "}
                            {post.memberValue} / {post.memberTarget}
                        </p>
                        <FontAwesomeIcon icon={faUser} className="userIcon" />
                    </div>
                </div>
                <div className="descriptionWrapper">
                    <h3>Description:</h3>
                    <div className="descriptionValue">{post.description}</div>
                </div>
                <div className="handleAction">
                    <div className="joinWrapper">
                        <p>{post.isJoin ? "Joined" : "Join with us"}</p>
                    </div>
                    <div className="donateWrapper">
                        <p>Donate</p>
                    </div>
                    <div className={`likeWrapper ${post.isLike ? "isLike" : ""}`}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
                <div className="commentWrapper">
                    <h3>Comment:</h3>
                    <div className="listComments">
                        <div className="comment">
                            <strong>chienminh5298</strong>
                            <p>Hello everyone.</p>
                        </div>
                        <div className="comment">
                            <strong>chienminh5298</strong>
                            <p>Hello everyone.</p>
                        </div>
                        <div className="comment">
                            <strong>chienminh5298</strong>
                            <p>Hello everyone.</p>
                        </div>
                    </div>
                    <form className="inputWrapper">
                        <input type="text" name="comment" placeholder="Comment"/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DetailProject;
