import {createSlice} from "@reduxjs/toolkit";
import {IPost} from "../../interfaces/postInterface";

interface IState {
    posts: IPost[],
    post: string
}

const initialState: IState = {
    posts: [],
    post: null
}

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setAll: (state, action) => {
            state.posts = action.payload
        },
        setCurrent: (state, action) => {
            state.post = action.payload
        }
    }
})

const {reducer: postReducer, actions: postActions} = postSlice;

export {
    postReducer,
    postActions
}