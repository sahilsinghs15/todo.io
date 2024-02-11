import { useState } from "react";

function AddTodo({updateList}){

    const [inputText , setInputText] = useState(''); //This is the inputText hooks which is used to enter the name of TodoTask
    return (

        <div>
            <input
                type="text"
                value={inputText} 
                placeholder="Add your next todo"
                onChange = {e => setInputText(e.target.value)} //This is used to update the placeholder value
            />

            <button onClick={() =>{
                updateList(inputText);
                setInputText('');
            }}>Add</button> {/* This is a callback function which used to update the updateList props with parameter input text */}
            
        </div>
        
    )
}

export default AddTodo;