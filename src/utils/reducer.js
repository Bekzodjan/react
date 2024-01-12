import { applyMiddleware, createStore } from "redux";

function reducer(state, { type, payload }) {
  switch (type) {
    case 'plus':
      state.count++
      break
    case 'minus':
      state.count--
      break
  }

  return { ...state };
}

const boboF = (store)=>(next)=>(actions)=>{
  console.log(store.getState());
  console.log(actions);
  next(actions)
  console.log(store.getState());
  console.log('______________');
}

const store = createStore(reducer, {
  count: 0
},applyMiddleware(boboF));

store.dispatch({type: "plus"})
store.dispatch({type: "plus"})
store.dispatch({type: "plus"})
store.dispatch({type: "plus"})
store.dispatch({type: "plus"})
store.dispatch({type: "minus"})

export default store;
