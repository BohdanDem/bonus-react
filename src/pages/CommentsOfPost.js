import React from 'react';
import {useLocation} from "react-router-dom";

const CommentsOfPost = () => {

    const {state} = useLocation()

    return (
        <div>
            CommentsOfPost {state.id}
        </div>
    );
};

export default CommentsOfPost;