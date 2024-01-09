import { createStore } from "redux";

function reducer(state, { type, payload }) {
  switch (type) {
    case "plus":
      state.count++;
      break;
    case "minus":
      if (state.count < 1) {
        state.count = 0;
      } else {
        state.count--;
      }
      break;
    case "plus2":
      state.count2++;
      break;
    case "minus2":
        if (state.count2 < 1) {
            state.count2 = 0;
          } else {
            state.count2--;
          }
        break;
    case "h1":
      state.h1Text = payload;
      break;
    case "rep":
      state.h3Text = "salom".repeat(payload);
      break;
    case "open":
      state.isOpen = !state.isOpen;
      break;
    case "tab":
      state.table.push({
        no: payload.no,
        fName: payload.fName,
        pos: payload.pos,
        salary: payload.salary,
      });
      console.log(state.table);
      state.isOpen = !state.isOpen;
      break;
  }

  return { ...state };
}

const store = createStore(reducer, {
  count: 0,
  count2: 0,
  h1Text: "",
  table: [],
  isOpen: false,
  h3Text: "",
});

export default store;
