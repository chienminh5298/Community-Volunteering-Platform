import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { taskAction } from "../../storage/taskReducer";

const LikeComponent = ({ isLike, isSkeleton, id }) => {
    const user = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const handleLike = () => {
        if (id) {
            toast.success(isLike ? "Removed post from wish list." : "Added post to wish list.");
            if (isLike) {
                dispatch(taskAction.unlike({ username: user.username, id }));
            } else {
                dispatch(taskAction.like({ username: user.username, id }));
            }
        }
    };

    return (
        <div className={`likeWrapper ${isSkeleton ? "skeleton" : ""} ${isLike ? "isLike" : ""}`} onClick={handleLike}>
            <FontAwesomeIcon icon={faHeart} />
        </div>
    );
};

export default LikeComponent;
