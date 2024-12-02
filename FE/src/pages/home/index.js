import React, { Fragment, useEffect, useState } from "react";
import "./home.scss";
import Post from "./post";
import Activities from "./activities";
import { toUSD } from "../../ultil";
import Donator from "./donator";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BACKEND_URL } from "../../setting";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../../storage/taskReducer";
const Home = () => {
    const [filter, setFilter] = useState("all");
    const posts = useSelector((state) => state.taskReducer.data);
    const dispatch = useDispatch();
    const { data: postData, isFetching } = useQuery({
        queryFn: async () => {
            return await axios.get(`${BACKEND_URL}/allPost`);
        },
        queryKey: [`fetchData`],
        staleTime: 30000,
    });

    useEffect(() => {
        if (postData) {
            dispatch(taskAction.fetch(postData.data));
        }
    }, [postData]);

    const handleChangeFilter = (inputFilter) => {
        setFilter(inputFilter);
    };

    const { data: topdonate } = useQuery({
        queryFn: async () => {
            await axios.get(`${BACKEND_URL}/topDonate`);
        },
        queryKey: ["fetchTopDonate"],
        staleTime: 0,
    });

    const username = useSelector((state) => state.userReducer.username);

    const fetchPostSkeleton = <Post title="Raise the wood" donateValue={300000} donateTarget={1000000} memberValue={53} memberTarget={100} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" isJoin={false} isLike={true} isSkeleton={true} />;

    let listPosts = Object.values(posts);
    if (filter === "liked") {
        listPosts.sort((a, b) => a.liker.length - b.liker.length);
    } else if (filter === "donate") {
        listPosts.sort((a, b) => b.donateValue - a.donateValue);
    } else if (filter === "member") {
        listPosts.sort((a, b) => b.member - a.member);
    }
    const renderPosts = listPosts.map((post) => {
        const indexLiked = post.liker.indexOf(username);
        const indexJoined = post.joiner.indexOf(username);
        return <Post key={post.id} title={post.title} donateValue={post.donateValue} donateTarget={post.donateTarget} memberValue={post.member} memberTarget={post.memberTarget} description={post.description} isJoin={indexJoined === -1 ? false : true} isLike={indexLiked === -1 ? false : true} id={post.id} />;
    });
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
                        <input type="radio" id="option1" name="options" defaultChecked={filter === "all" ? true : false} value="all" />
                        <label className="radiolabel" onClick={() => handleChangeFilter("all")} htmlFor="option1">
                            All
                        </label>
                        <input type="radio" id="option2" name="options" defaultChecked={filter === "like"} value={200} />
                        <label className="radiolabel" onClick={() => handleChangeFilter("like")} htmlFor="option2">
                            Most liked
                        </label>
                        <input type="radio" id="option3" name="options" defaultChecked={filter === "donate"} value={100} />
                        <label className="radiolabel" onClick={() => handleChangeFilter("donate")} htmlFor="option3">
                            Most donate
                        </label>
                        <input type="radio" id="option4" name="options" defaultChecked={filter === "member"} value={50} />
                        <label className="radiolabel" onClick={() => handleChangeFilter("member")} htmlFor="option4">
                            Most member
                        </label>
                    </div>
                </div>
                <div className="listPost">
                    <div className="wrapPost">{isFetching ? fetchPostSkeleton : renderPosts}</div>
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
