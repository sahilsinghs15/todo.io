import { useReducer} from "react";
import AddTodo from "./Components/addTodo/AddTodo"
import TodoList from "./Components/todoList/TodoList"
import TodoContext from "./Context/TodoContext";
import TodoDispatchContext from "./Context/TodoDispatchContext";
import todoReducer from "./reducers/todoReducers";
function App() {

  const [list , dispatch] = useReducer(todoReducer , []);

  return (
    
    <TodoContext.Provider value={{list}}>
      <TodoDispatchContext.Provider value={{dispatch}}>
        <AddTodo />
        <TodoList  />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
