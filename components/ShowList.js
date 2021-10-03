import React , {useEffect} from 'react';
import {setState} from 'react'


const ShowList = ({task , setTask , setEditTodo}) => {

     const CompleteHandler = (todo) => {
        setTask(
            task.map((item) => {
                if(item.id === todo.id) {
                    return {...item,completed: !item.completed}
                }
                return item;
            })
        )}
    

    const EditHandler =({id}) => {
        const findtask = task.find((todo) => todo.id === id);
        setEditTodo(findtask) 
    }
    const DeleteHandler =({id}) => {
        setTask(task.filter((todo) => todo.id !== id));
    }
    return (
        <div>
            {task.map((todo) =>
            <li className="list-item"   key={todo.id}>
                <input 
                type="text" 
                value={todo.title} 
                className={`list ${todo.completed ? "complete" : ""}`} 
                onChange={(event) => event.preventDefault()}
                onClick={() => CompleteHandler(todo)}></input>
            
               <div className="butt-button">
                <button className="button-edit button-task" onClick={() => EditHandler(todo)}>
                    <i class="fa fa-edit"></i>
                </button>
                <button className="button-delete button-task" onClick={() => DeleteHandler(todo)}>
                    <i class="fa fa-trash-o"></i>
                </button>
               </div>
            
            </li>
            )}
        </div>
    );
};

export default ShowList;
