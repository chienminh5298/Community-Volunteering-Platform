import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
    activities: [
        {
            type: "joined",
            title: "Raise the woddod",
            projectId: 2424,
            date: new Date().toUTCString(),
            username: "chienminh5298",
        },
        {
            type: "donated",
            title: "Raise the weeood",
            projectId: 2424,
            value: 10000,
            date: new Date().toUTCString(),
            username: "hongminh",
        },
        {
            type: "liked",
            title: "Raise the wood",
            projectId: 2424,
            date: new Date().toUTCString(),
            username: "chienminh5298",
        },
    ],
};

const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {
        fetch: (state, action) => {
            state.data = action.payload.data;
        },
        unlike: (state, action) => {
            const id = action.payload.id;
            const username = action.payload.username;
            let temp = state.data[id];
            const indexRemove = temp.liker.indexOf(username);
            temp.liker.splice(indexRemove, 1);
            state.data[id] = temp;
        },
        like: (state, action) => {
            const id = action.payload.id;
            const username = action.payload.username;
            state.data[id].liker.push(username);
            state.activities.unshift({
                type: "liked",
                title: state.data[id].title,
                projectId: id,
                date: new Date().toUTCString(),
                username: username,
            });
        },
        unjoin: (state, action) => {
            const id = action.payload.id;
            const username = action.payload.username;
            let temp = state.data[id];
            const indexRemove = temp.joiner.indexOf(username);
            temp.joiner.splice(indexRemove, 1);
            state.data[id] = temp;
            state.data[id].member -= 1;
        },
        join: (state, action) => {
            const id = action.payload.id;
            const username = action.payload.username;
            state.data[id].joiner.push(username);
            state.data[id].member += 1;
            state.activities.unshift({
                type: "joined",
                title: state.data[id].title,
                projectId: id,
                date: new Date().toUTCString(),
                username: username,
            });
        },
        comment: (state, action) => {
            const content = action.payload.comment;
            const username = action.payload.username;
            const id = action.payload.id;
            state.data[id].comment.push({ username, content });
        },
        fetchActivities: (state, action) => {
            state.activities = action.payload;
        },
        addPost: (state, action) => {
            const data = action.payload.data.data
            state.data[data.id] = data;
        },
    },
});

export const taskAction = taskSlice.actions;
export default taskSlice.reducer;
