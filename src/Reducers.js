function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}

  function todoReducer (state, action) {
    switch (action.type) {
        case 'CREATE':
          const newTodo = {
              id: action.id,
              title: action.title,
              description: action.description,
              isComplete: false,
              completedOn: undefined
            }
            return [ newTodo, ...state ]
        case "TOGGLE":
            return state.map((p, i) => {
                if(i === action.todoID) {
                    p.isComplete = action.isComplete;
                    p.completedOn = Date.now();
                    console.log(p)
                }
                return p;
            })
        case "DELETE":
            return state.filter((p,i) => i !== action.todoID)
        case 'FETCH_TODOS':
            return action.todos
        default:
           return state;
    }
  }

  export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}