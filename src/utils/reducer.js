import { createStore } from "redux";

function reducer(state, { type, payload }) {
  switch (type) {
    case "change":
      state.productObj = { ...state.productObj, name: payload, count: 1 };
      break;
    case "add":
      state.products.push(state.productObj);
      state.products = [...state.products];
      console.log(state.products);
      break;
    case "plus":
      state.products[payload].count = state.products[payload].count+1;
      console.log(state.products[payload]);
      state.products = [...state.products];
      break;
    case "minus":
      if (state.products[payload].count > 1) {
        state.products[payload].count--;
      }
      console.log(state.products[payload]);
      state.products = [...state.products];
      break;
    case 'delete':
      state.products.splice(payload,1)
      state.products = [...state.products];

  }

  return { ...state };
}

const store = createStore(reducer, {
  productObj: {},
  products: [],
});

export default store;
