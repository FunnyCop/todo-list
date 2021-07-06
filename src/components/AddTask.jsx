import React, { useState } from "react"

const AddTask = props => {
    const [ task, setTask ] = useState( "" )

    const handleSubmit = e => {
        e.preventDefault()
        props.addTask( task )
        setTask( "" )

        return null
    }

    return (
        <form className = "AddTask form-group" onSubmit = { handleSubmit }>
            <label htmlFor = "task">New Task</label>

            <input className = "form-control" type = "text" name = "task" value = { task }
                onChange = { e => setTask( e.target.value ) } />

            <input className = "btn btn-primary" type="submit" />
        </form>
    )
}

export default AddTask