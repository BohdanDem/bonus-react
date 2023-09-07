import {countActions} from "../redux/slices/countSlice";
import {useAppDispatch} from "../hooks/useAppDispatch";

const CountPage = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(countActions.inc())}>increment</button>
            <button onClick={()=>dispatch(countActions.dec())}>decrement</button>
            <button onClick={()=>dispatch(countActions.reset())}>reset</button>
        </div>
    );
};

export {CountPage};