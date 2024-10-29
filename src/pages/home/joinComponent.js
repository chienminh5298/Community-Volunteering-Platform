import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { taskAction } from "../../storage/taskReducer";

const JoinComponent = ({ isSkeleton, isJoin, id }) => {
    const user = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const handleJoin = () => {
        if (id) {
            toast.success(isJoin ? "Removed post from wish list." : "Added post to wish list.");
            if (isJoin) {
                dispatch(taskAction.unjoin({ username: user.username, id }));
            } else {
                dispatch(taskAction.join({ username: user.username, id }));
            }
        }
    };

    return (
        <div className="joinWrapper" onClick={handleJoin}>
            <p>{isJoin ? "Joined" : "Join with us"}</p>
        </div>
    );
};

export default JoinComponent;
