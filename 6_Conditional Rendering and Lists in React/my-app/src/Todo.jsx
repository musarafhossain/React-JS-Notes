import React, { useState } from 'react'

const Todo = () => {
    const [tasks, setTasks] = useState(['sleeping', 'eating']);
    const [newTask, setNewTask] = useState('');
    const addTask = () => {
        setTasks([...tasks, newTask]);
        setNewTask('');
    }
    const removeTask = (index) => {
        setTasks(tasks.filter((_, idx) => idx !== index))
    }
    return (
        <>
            <h1>Todo App</h1>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        {task} <button onClick={() => removeTask(index)}>Remove Task</button>
                    </li>
                )}
            </ol>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={addTask}>Add task</button>
        </>
    )
}

export default Todo