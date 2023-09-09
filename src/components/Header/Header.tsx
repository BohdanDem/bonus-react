import css from "./Header.module.css";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";

const Header = () => {
    const {count} = useAppSelector(state => state.count);
    const {selectedUsers} = useAppSelector(state => state.users);
    const {post} = useAppSelector(state => state.posts)

    return (
        <div className={css.Header}>
            <div className={css.links}>
                <Link to={'users'}>users</Link>
                <Link to={'posts'}>posts</Link>
                <Link to={'count'}>count</Link>
            </div>
            <div>
                <div>user: {selectedUsers.map(user => <div key={user.id}>{user.name}</div>)}</div>
                <div>post: {post}</div>
                <div>count: {count}</div>
            </div>
        </div>
    );
};

export {Header};