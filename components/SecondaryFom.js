import React,{useState} from 'react'


function SecondaryFom() {
    const [input, setInput] = useState('')
    
    const HandleSecondarySubmit = event => {
        event.preventDefault();
        setInput('')
        
    }
    const handleChange = event => {
        setInput(event.target.value);
    }

    return (
        <form className="secondary-todo-form" onSubmit={HandleSecondarySubmit}>
            <input 
            type="text"
            placeholder="Add some secondary tasks...."
            value={input}
            name='text'
            className="secondary-todo-input"
            onChange={handleChange}
            />
            <button className="secondary-submit-button">Add</button>
        </form>
    )
}

export default SecondaryFom
