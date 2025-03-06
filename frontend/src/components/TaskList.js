import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask } from '../api';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks().then((response) => setTasks(response.data));
    }, []);

    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
