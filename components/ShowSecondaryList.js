import React,{useState} from 'react'
import SecondaryFom from './SecondaryFom'

function ShowSecondaryList() {
    const [todos, setTodos] = useState([])
    return (
        <div>
            <SecondaryFom/>
        </div>
    )
}

export default ShowSecondaryList
