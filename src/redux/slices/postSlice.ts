import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPost} from "../../interfaces/postInterface";
import {AxiosError} from "axios";
import {postService} from "../../services/postService";

interface IState {
    posts: IPost[],
    post: string,
    error: any
}

const initialState: IState = {
    posts: [],
    post: null,
    error: null
}

const getAll = createAsyncThunk<IPost[], void>(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll();
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.post = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        .addCase(getAll.rejected, (state, action) => {
            state.error = action.payload
        })
})

const {reducer: postReducer, actions} = postSlice;

const postActions = {
    ...actions,
    getAll
}

export {
    postReducer,
    postActions
}