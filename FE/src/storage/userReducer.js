import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "task",
    initialState: {
        username: "chienminh5298",
    },
    reducers: {
        fetch: (state, action) => {},
    },
});

export const taskAction = userSlice.actions;
export default userSlice.reducer;
