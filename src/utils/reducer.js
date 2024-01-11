import { createStore } from "redux";

function reducer(state, { type, payload }) {
  switch (type) {
    case "change":
      state.taskObj = { ...state.taskObj, name: payload, active: true };
      break;
    case "add":
      if (state.current === "") {
        state.tasks.push(state.taskObj);
      } else {
        state.tasks[state.current] = state.taskObj;
      }
      state.current = "";
      state.tasks = [...state.tasks];
      break;
    case "changeStatus":
      state.tasks[payload].active = !state.tasks[payload].active;
      // state.delTasks.push(...state.tasks.splice(payload,1))
      state.tasks.filter((itm, i) => {
        if (!itm.active) {
          state.delTasks.push(...state.tasks.splice(i, 1));
        }
      });
      state.tasks = [...state.tasks];
      state.delTasks = [...state.delTasks];
      break;
    case "changeStatus2":
      state.delTasks[payload].active = !state.delTasks[payload].active;
      // state.delTasks.push(...state.tasks.splice(payload,1))
      state.delTasks.filter((itm, i) => {
        if (itm.active) {
          state.tasks.push(...state.delTasks.splice(i, 1));
        }
      });
      state.tasks = [...state.tasks];
      state.delTasks = [...state.delTasks];
      break;
    case "clear":
      state.tasks.map((itm) => ({ ...itm, active: !itm.active }));
      state.delTasks.push(...state.tasks.splice(0));
      state.tasks = [...state.tasks];
      state.delTasks = [...state.delTasks];
      break;
    case "delete":
      state.delTasks.splice(0);
      state.tasks = [...state.tasks];
      state.delTasks = [...state.delTasks];
      break;
    case "edit":
      state.taskObj = { ...state.taskObj, name: state.tasks[payload].name };
      state.current = payload;
  }

  return { ...state };
}

const store = createStore(reducer, {
  taskObj: {},
  tasks: [],
  delTasks: [],
  current: "",
});

export default store;
