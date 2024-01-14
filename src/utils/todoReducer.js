export default function todoReducer(
  state = {
    inpValue: "",
    todos: [],
    order: '',
    sTodos: []
  },
  { type, payload }
) {
  switch (type) {
    case "change":
      state.inpValue = payload;
      break;
    case "changeE":
      state.todos[payload.i].name = payload.name;
      state.todos = [...state.todos];
      break;
    case "addE":
      state.todos[payload].active = !state.todos[payload].active;
      state.todos = [...state.todos];
      break;
    case "add":
      state.todos.push({
        completed: false,
        name: state.inpValue,
        active: false,
      });
      state.inpValue = ''
      state.todos = [...state.todos];
      break;
    case "del":
      state.todos.splice(payload, 1);
      state.todos = [...state.todos];
      break;
    case "clear":
      state.todos = [];
      break;
    case "check":
      state.todos[payload].completed = !state.todos[payload].completed;
      state.todos = [...state.todos];
      break;
    case 'order':
        if(state.order !== payload){
            state.order = payload
            state.todos = state.todos.reverse()
            state.todos = [...state.todos]
        }
        break
    case 'search':
        state.sTodos = state.todos
        state.todos = []
        state.sTodos.filter(itm=>{
            if(itm.name.includes(payload)){
                state.todos.push(itm)
                state.todos = [...state.todos]
            }
        })
  }

  return { ...state };
}
