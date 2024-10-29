import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        2424: {
            id: 2424,
            title: "Raise the wood",
            donateValue: 24223,
            donateTarget: 100000,
            member: 24,
            memberTarget: 250,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            joiner: ["chienminh5298"],
            liker: ["chienminh5298"],
            comment: [
                {
                    username: "chienminh5298",
                    content: "Hello everyone",
                },
            ],
        },
        2425: {
            id: 2425,
            title: "Build the house",
            donateValue: 10000,
            donateTarget: 100000,
            member: 30,
            memberTarget: 250,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            joiner: ["chienminh5298"],
            liker: ["chienminh5298"],
            comment: [
                {
                    username: "chienminh5298",
                    content: "Hello everyone",
                },
            ],
        },
    },
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
            state.data = action.payload;
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
    },
});

export const taskAction = taskSlice.actions;
export default taskSlice.reducer;
