import React, {useState} from 'react'
import {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import ShowList from './components/ShowList'

const Todo = () => {
    const [ input , setInput ] = useState("");
    const [ task , setTask ] = useState([]); 
    const [ editTodo , setEditTodo ] = useState(null);
    
    const updateTodo = (title, id, completed) => {
        const newTodo = task.map((todo) => todo.id === id ? {title, id, completed} : todo);
        setTask(newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title);
        }else {
            setInput("")
        }
    }, [setInput, editTodo]);


    const onInputChange =(event) => {
        setInput(event.target.value);
        
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo) {
            setTask([...task,{id:uuidv4() , title: input , completed: false}]);
            setInput("");
        }else {
            updateTodo( input , editTodo.id, editTodo.completed)
        }
 
    };

    return (
        <div className="todo-container">
            <div className="app-wrapper">
                <div className="header">
                    <h1>Primary Task List</h1>
                </div>
                <div className="TodoList-Form">
                <form onSubmit={onFormSubmit}>
                    <input 
                        type="text"
                        placeholder="Enter a task..."
                        className="task-input"
                        value={input} required
                        onChange={onInputChange}

                        />
                        <button className="button-add" type="submit">
                            {editTodo ? "OK" : "Add"}
                        </button>
                </form>
                </div> 
                <div className="finest">
                    <ShowList 
                        task={task} 
                        setTask={setTask}
                        setEditTodo={setEditTodo}
                    />
                </div>
            </div>
        </div>
    )
}

export default Todo;

