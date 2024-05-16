import './Task.css';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

const Task = ({ text, done, toggleTaskDone, deleteTask }) => {
    const handleClickTrash = (e) => {
        e.stopPropagation(); 
        deleteTask();
    };
    
    return (
        <>
            <ListGroup.Item as="li" onClick={toggleTaskDone} className={`d-flex justify-content-around task ${done ? 'bg-primary' : ''}`}>
                {text}<i className="fa-solid fa-trash m-1" onClick={handleClickTrash}></i>
            </ListGroup.Item>
        </>
    );
};

Task.propTypes = {
    text: PropTypes.string,
    done: PropTypes.bool,
    toggleTaskDone: PropTypes.func,
    deleteTask: propTypes.func
};

export default Task;
