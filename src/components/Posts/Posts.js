import {Post} from "../Post/Post";
import css from "./Posts.module.css";

const Posts = ({posts, postsRef}) => {
    return (
        <div className={css.Posts} ref={postsRef}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};