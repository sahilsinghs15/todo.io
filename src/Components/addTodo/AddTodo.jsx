import { useContext, useState } from "react";
import TodoDispatchContext from "../../Context/TodoDispatchContext";

function AddTodo(){

    const [inputText , setInputText] = useState(''); //This is the inputText hooks which is used to enter the name of TodoTask
    const {dispatch} = useContext(TodoDispatchContext);
    return (

        <div>
            <input
                type="text"
                value={inputText} 
                placeholder="Add your next todo"
                onChange = {e => setInputText(e.target.value)} //This is used to update the placeholder value
            />

            <button onClick={() =>{
                dispatch({type : 'add_todo' , payload : {todoText : inputText}});
                setInputText('');
            }}>Add</button> {/* This is a callback function which used to update the updateList props with parameter input text */}
            
        </div>
        
    )
}

export default AddTodo;