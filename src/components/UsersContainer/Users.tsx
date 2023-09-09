import {useAppSelector} from "../../hooks/useAppSelector";
import {User} from "./User";
import {useEffect} from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {userActions} from "../../redux/slices/userSlice";

const Users = () => {
    const {users} = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
            dispatch(userActions.getAll())
    }, [])

    return (
        <div>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export {Users};