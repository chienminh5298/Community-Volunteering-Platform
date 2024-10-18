import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { toUSD } from "../../ultil";

const Post = ({ title, donateValue, donateTarget, memberValue, memberTarget, description, isJoin, isLike }) => {
    return (
        <div className="postWrapper">
            <h1>{title}</h1>
            <div className="donationWrapper">
                <div className="donationValue">
                    <h3>Donation: </h3>
                    <p>
                        {toUSD(donateValue)} / {toUSD(donateTarget)}
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
                        {memberValue} / {memberTarget}
                    </p>
                    <FontAwesomeIcon icon={faUser} className="userIcon" />
                </div>
            </div>
            <div className="descriptionWrapper">
                <h3>Description:</h3>
                <div className="descriptionValue">{description}</div>
            </div>
            <div className="seeMore">
                <p>See more</p>
            </div>
            <div className="handleAction">
                <div className="joinWrapper">
                    <p>{isJoin ? "Joined" : "Join with us"}</p>
                </div>
                <div className="donateWrapper">
                    <p>Donate</p>
                </div>
                <div className={`likeWrapper ${isLike ? "isLike" : ""}`}>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
            </div>
        </div>
    );
};

export default Post;
