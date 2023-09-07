import {useReducer} from 'react';

const initialState = {
  count1: 0,
  count2: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC_COUNT1':
      state.count1++
      break
    case 'DEC_COUNT1':
      state.count1 --
      break
    case 'RESET_COUNT1':
      state.count1 = 0
      break
    case 'INC_COUNT2':
      state.count2 ++
      break
    case 'DEC_COUNT2':
      state.count2 --
      break
    case 'RESET_COUNT2':
      state.count2 = 0
      break
    default:
      return state
  }
  return {...state}
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
      <div>
        <div>
          count_1: {state.count1}
          <button onClick={() => dispatch({type: 'INC_COUNT1'})}>inc</button>
          <button onClick={() => dispatch({type: 'DEC_COUNT1'})}>dec</button>
          <button onClick={() => dispatch({type: 'RESET_COUNT1'})}>res</button>
        </div>
        <div>
          count_2: {state.count2}
          <button onClick={() => dispatch({type: 'INC_COUNT2'})}>increment</button>
          <button onClick={() => dispatch({type: 'DEC_COUNT2'})}>decrement</button>
          <button onClick={() => dispatch({type: 'RESET_COUNT2'})}>reset</button>
        </div>
      </div>
  );
};

export {App};