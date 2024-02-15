import { useDispatch } from "react-redux";
import AddTodo from "./Components/addTodo/AddTodo"
import TodoList from "./Components/todoList/TodoList"
import {addTodo , deleteTodo , editTodo , todoFinished} from "./actions/todoActions";
import { bindActionCreators } from "redux";
function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({addTodo , deleteTodo , editTodo , todoFinished} , dispatch);
  return (
    
    <>
        <AddTodo addTodo = {actions.addTodo}/>
        <TodoList  deleteTodo = {actions.deleteTodo} editTodo = {actions.editTodo} todoFinished = {actions.todoFinished}/>
    </>
  )
}

export default App
