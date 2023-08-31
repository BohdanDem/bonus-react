import React from 'react';
import {Link} from "react-router-dom";

const PostComponent = ({post}) => {
    return (
        <div>
            <Link to={`${post.id}`} state={post}>{post.title}</Link>
        </div>
    );
};

export default PostComponent;