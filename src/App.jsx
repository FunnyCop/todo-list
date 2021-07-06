import React, { useState } from "react"

import AddTask from "./components/AddTask.jsx"
import DisplayTasks from "./components/DisplayTasks.jsx"

import "./App.css"

const App = () => {
  const [ tasks, setTasks ] = useState( [] )

  const addTask = task => {
    const newTask = { task : task, done : false }

    setTasks( [ ...tasks, newTask ] )

    return null
  }

  const completeTask = ( task, index ) => {
    const newTasks = [ ...tasks ]
    newTasks[ index ] = task
    setTasks( newTasks )

    return null
  }

  const deleteTask = index => {
    const newTasks = [ ...tasks ].splice( index, 1 )
    setTasks( newTasks )
  }

  return (
    <div className = "App">
      <AddTask addTask = { addTask } />
      <DisplayTasks tasks = { tasks } completeTask = { completeTask } deleteTask = { deleteTask } />
    </div>
  )
}

export default App