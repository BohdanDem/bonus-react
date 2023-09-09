import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces/userInterface";
import {userService} from "../../services/userService";
import {AxiosError} from "axios";

interface IState {
    users: IUser[],
    user: string,
    error: any
}

const initialState: IState = {
    users: [],
    user: null,
    error: null
}

const getAll = createAsyncThunk<IUser[], void>(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.users = action.payload
        })
        .addCase(getAll.rejected, (state, action) => {
            state.error = action.payload
        })
})

const {reducer:userReducer, actions} = userSlice;

const userActions = {
    ...actions,
    getAll
}

export {
    userReducer,
    userActions
}