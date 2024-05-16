import React, { useState } from 'react';
import { Button, ListGroup, Form } from 'react-bootstrap';
import Task from '../task/Task';

const initialTasks = [{ text: "Limpiar la taza", done: false }];

const TaskList = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [input, setInput] = useState('');

    const handleInputTask = (e) => {
        setInput(e.target.value);
    };

    const handleAddTask = () => {
        const newTask = {
            text: input,
            done: false
        };
        setTasks((prev) => [...prev, newTask]);
        setInput(''); 
    };

    const handleToggleTaskDone = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, done: !task.done };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <>
        <p>Al apretar en la linea, marca la tarea y al apretar en el cesto la borra</p>
            <ListGroup as="ol" numbered className='mb-3'>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        text={task.text}
                        done={task.done}
                        toggleTaskDone={() => handleToggleTaskDone(index)}
                        deleteTask={() => handleDeleteTask(index)}
                    />
                ))}
            </ListGroup>
            <Form.Control
                type="text"
                onChange={handleInputTask}
                value={input}   
                placeholder="Ingrese una tarea..."
            />
            <Button className='btn btn-primary mt-4' onClick={handleAddTask}>Agregar Tarea</Button>
        </>
    );
};

export default TaskList;
