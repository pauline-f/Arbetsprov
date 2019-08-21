import React from 'react';
import './TaskCard.css';

function TaskCard(props) {

    const developer = (props.task.dev) ? props.developers.filter(dev => dev.id === props.task.dev)[0].name : '';

    return (
        <div className='taskCard'>
            <h3>{props.task.task}</h3>
            <p>Story points: {props.task.sp}</p>
            {developer ? <p>Assigned developer: {developer}</p> : <></>}
        </div>
    )
}

export default TaskCard;