import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";
import PostComponent from "../components/PostComponent";

const PostsPage = () => {

    const posts = useLoaderData()

    return (
        <div>
            <h3>Posts Page</h3>
            <hr/>
                <Outlet/>
            <hr/>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsPage;