import { useState } from "react";

//It handles a single todo structure 
function Todo({todoData , isFinished , changeFinished , onDelete , onEdit}){  //These props are mostly comming from TodoList
    //todoData - represents the text present in the todo.
    //isFinished - boolean value represents that todo is checked or not by returning true or false values.
    //changeFinished - 
    //onDelete - is a function which is used to perform deleting operation on todo.
    //onEdit - is a function which is used to perform edit operation on a todo.

    
    const [finished , setFinished] = useState(isFinished);
    const [isEditing , setIsEditing] = useState(false);
    const [editText , setEditText ] = useState(todoData);
    return (
        <div>
            <input type="checkbox" checked = {finished} onChange={(e)=> {
                setFinished(e.target.checked)
                changeFinished(e.target.checked)
            }}/>

            {(isEditing) ? <input type="text" value={editText} onChange={e => setEditText(e.target.value)} /> : <span>{todoData}</span>}

            <button onClick={()=>{
                setIsEditing(!isEditing);
                onEdit(editText);
            }}>{(!isEditing) ? 'Edit' : 'Save'}</button>
            <button onClick={onDelete}>Delete</button> 
        </div>
    )
}

export default Todo;