import React, { useState } from "react"

const DisplayTasks = props => {
    const [ task, setTask ] = useState( {} )

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form className = "DisplayTasks form-group" onSubmit = { e => handleSubmit }>
            { props.tasks.map( ( item, i ) => { return (
                item.done
                    ? <span>
                        <p className = "Done">{ item.task }</p>

                        <input type = "checkbox" checked = { item.done }
                            onChange = { e => {
                                props.completeTask( { task : item.task, done : e.target.checked }, i )
                            } }>
                        </input>

                        <button className = "btn btn-primary"
                            onClick = { e => props.deleteTask( i ) }>Delete</button>

                    </span>

                    : <span>
                        <p>{ item.task }</p>

                        <input type = "checkbox" checked = { item.done }
                            onChange = { e => {
                                props.completeTask( { task : item.task, done : e.target.checked }, i )
                            } }>
                        </input>

                        <button className = "btn btn-primary"
                            onClick = { e => props.deleteTask( i ) }>Delete</button>

                    </span>
            ) } ) }
        </form>
    )
}

export default DisplayTasks