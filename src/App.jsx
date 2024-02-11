import { useState } from "react";
import AddTodo from "./Components/addTodo/AddTodo"
import TodoList from "./Components/todoList/TodoList"
import TodoContext from "./Context/TodoContext";
function App() {

  const [list , setList] = useState ([ //This is a setList hooks which stores the id and todo data in as a list with a finished value initialized with false
        {id : 1 , todoData : 'todo 1' , finished : false},
        {id : 2 , todoData : 'todo 2' , finished : false}
]);

  return (
    <TodoContext.Provider value={{list , setList}}>
      <AddTodo updateList = {(todo) => setList( // In this updateList - all previous list remains same and there will be new todo added with the id +1 and data whatever input is given with the finished value as false
        [...list ,
        {id : list.length + 1,
        todoData : todo ,
        finished : false}]
      )}/>
      <TodoList  />
    </TodoContext.Provider>
  )
}

export default App
