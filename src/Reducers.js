import { unstable_renderSubtreeIntoContainer } from "react-dom";

function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return {
                "username": action.username,
                "access_token": action.access_token
            }
        case 'LOGOUT':
            return {
                "username": undefined,
                "access_token": undefined
            }
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
            return state.map((t) => {
                if(t.id === action.todoID) {
                    t.isComplete = action.isComplete;
                    t.completedOn = Date.now();
                    console.log(t)
                }
                return t;
            })
        case "DELETE":
            return state.filter((t) => t.id !== action.todoID)
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