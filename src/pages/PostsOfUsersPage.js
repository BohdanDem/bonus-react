import React from 'react';
import {useLoaderData, useLocation} from "react-router-dom";

const PostsOfUsersPage = () => {

    const {state} = useLocation();
    const posts = useLoaderData()

    return (
        <div>
            {state.id} - {state.name} - {state.username} - {state.email}
            PostsOfUsersPage
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </div>
    );
};

export default PostsOfUsersPage;