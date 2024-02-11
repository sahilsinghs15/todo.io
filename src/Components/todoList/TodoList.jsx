//It handles multiple todo pages based on their id and set todoData too.
import Todo from "../todo/Todo";
import TodoContext from "../../Context/TodoContext";
import { useContext } from "react";

function TodoList(){ //here a list props is passed in parameter of the TodoList
    const {list , setList} = useContext(TodoContext);
    return(
        <div>
            {list.length > 0 && list.map
            (todo => <Todo 
                            key={todo.id}
                            id={todo.id} 
                            isFinished={todo.finished} 
                            todoData = {todo.todoData}
                            changeFinished = {(isFinished) =>{
                                const updatedList = list.map(t => {
                                    if(t.id == todo.id){
                                        todo.finished = isFinished;
                                    }

                                    return t;
                                });
                                setList(updatedList);
                            }}

                            onDelete = {()=>{
                                const updatedList = list.filter(t => t.id != todo.id)
                                setList(updatedList);
                            }}

                            onEdit = {(todoText)=>{
                                const updatedList = list.map(t => {
                                    if(t.id == todo.id){
                                        todo.todoData = todoText;
                                    }

                                    return t;
                                });
                                setList(updatedList);
                            }}
                    />)}
        </div>
    )
}

export default TodoList;