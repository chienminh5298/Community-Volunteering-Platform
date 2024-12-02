import React from "react";
import "./detail.scss";
import { useDispatch, useSelector } from "react-redux";
import { toUSD } from "../../ultil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import JoinComponent from "../home/joinComponent";
import LikeComponent from "../home/likeComponent";
import { taskAction } from "../../storage/taskReducer";

const DetailProject = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");
    const post = useSelector((state) => state.taskReducer.data[id]);
    const username = useSelector((state) => state.userReducer.username);
    const renderComment = post.comment.map((cmt) => (
        <div className="comment">
            <strong>{cmt.username}</strong>
            <p>{cmt.content}</p>
        </div>
    ));

    const indexLiked = post.liker.indexOf(username);
    const indexJoined = post.joiner.indexOf(username);

    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = e.target[0].value;
        dispatch(taskAction.comment({ comment, username, id }));
        e.target[0].value = "";
    };
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
                        <div className="donationProcessBar" style={{ width: `${(post.donateValue / post.donateTarget) * 100}%` }}></div>
                    </div>
                </div>
                <div className="memberWrapper">
                    <h3>Member:</h3>
                    <div className="memberValue">
                        <p>
                            {" "}
                            {post.member} / {post.memberTarget}
                        </p>
                        <FontAwesomeIcon icon={faUser} className="userIcon" />
                    </div>
                </div>
                <div className="descriptionWrapper">
                    <h3>Description:</h3>
                    <div className="descriptionValue">{post.description}</div>
                </div>
                <div className="handleAction">
                    <JoinComponent isJoin={indexJoined === -1 ? false : true} id={id} />
                    <div className="donateWrapper">
                        <p>Donate</p>
                    </div>
                    <LikeComponent isLike={indexLiked === -1 ? false : true} id={id} />
                </div>
                <div className="commentWrapper">
                    <h3>Comment:</h3>
                    <div className="listComments">{renderComment}</div>
                    <form className="inputWrapper" onSubmit={handleSubmit}>
                        <input type="text" name="comment" placeholder="What are you thinking ?" />
                        <button type="submit">Comment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DetailProject;
