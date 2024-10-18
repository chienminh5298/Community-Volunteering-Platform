import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "task",
    initialState: {},
    reducers: {
        fetch: (state, action) => {},
    },
});

export const taskAction = userSlice.actions;
export default userSlice.reducer;
