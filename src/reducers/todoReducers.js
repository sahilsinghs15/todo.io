function todoReducer(state = [] , action){//State represents that how many todo is present now.
    if(action.type == 'add_todo'){
        let todoText = action.payload.todoText;
        return [...state ,
        {id : state.length + 1,
        todoData : todoText ,
        finished : false}
        ];
    }else if(action.type == 'edit_todo'){
        let todo = action.payload.todo;
        let todoText = action.payload.todoText;

        const updatedList = state.map(st => {
            if(st.id == todo.id){
                todo.todoData = todoText;
            }

            return st;
        });
        return updatedList;
    }else if(action.type == 'delete_todo'){
        let todo = action.payload.todo;
        const updatedList = state.filter(st => st.id != todo.id)
        return updatedList;

    }else if(action.type == 'finish_todo'){
        let todo = action.payload.todo;
        let isFinished = action.payload.isFinished;
        const updatedList = state.map(st => {
            if(st.id == todo.id){
                todo.finished = isFinished;
            }

            return st;
        });
        return updatedList;
    }else{
        return state;
    }
}

export default todoReducer;