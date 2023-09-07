import React, {FC} from 'react';
import {IPost} from "../../interfaces/postInterface";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {postActions} from "../../redux/slices/postSlice";

interface IProps {
    post: IPost
}

const Post:FC<IProps> = ({post}) => {

    const dispatch = useAppDispatch()
    const {id, userId, title, body} = post

    return (
        <div>
            <div>id :{id}</div>
            <div>userId :{userId}</div>
            <div>title :{title}</div>
            <div>body :{body}</div>
            <button onClick={() => dispatch(postActions.setCurrent(id))}>select</button>
        </div>
    );
};

export default Post;