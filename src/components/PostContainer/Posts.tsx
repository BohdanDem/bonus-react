import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {postActions} from "../../redux/slices/postSlice";
import {useAppSelector} from "../../hooks/useAppSelector";
import Post from "./Post";

const Posts = () => {

    const {posts} = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch();

    useEffect(() => {
            dispatch(postActions.getAll())
    }, [])

    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export default Posts;