import { createSlice } from "@reduxjs/toolkit";

import tuits from "./tuits.json"

import { findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk, findSummariesThunk }
    from "../../services/tuits-thunks";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "disliked": false,
    "dislikes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: "tuits",
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findSummariesThunk.pending]:
            (state) => {
                state.loading = true
                state.summaries = []
            },
        [findSummariesThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.summaries = payload
            },
        [findSummariesThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }


    },
    reducers: {}
})

export const { createTuit, deleteTuit, likeTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
