import React from 'react';
import './TaskCard.css';
import { Link } from 'react-router-dom';


function TaskCard(props) {
    
    const developer = (props.task.dev) ? props.developers.filter(dev => dev.id === props.task.dev)[0].name : '';

    const changeStatusToActive = () => changeStatus('active');
    const changeStatusToCompleted = () => changeStatus('completed');
    const changeStatusToOnhold = () => changeStatus('onhold');
    const changeStatusToDeleted = () => changeStatus('deleted');

    function changeStatus(status) {
        let allTasks = [...props.tasks];
        props.task.status = status;
        allTasks.splice(allTasks.indexOf(props.task), 1, props.task);
        props.setTasks(allTasks);
    }

    return (
        <div className='taskCard'>
            <Link to={`/task/update/${props.task.id}`}>
                <h3>{props.task.task}</h3>
            </Link>
            <p>Story points: {props.task.sp}</p>
            {developer ? <p>Assigned developer: {developer}</p> : <></>}
            {props.task.status === 'created'
                ? <button onClick={changeStatusToDeleted}>Deleted</button>
                : <></>
            }

            {props.task.status === 'onhold'
                ?
                <div>
                    <button onClick={changeStatusToActive}>Active</button>
                    <button onClick={changeStatusToDeleted}>Deleted</button>
                </div>
                : <></>
            }

            {props.task.status === 'active'
                ?
                <div>
                    <button onClick={changeStatusToCompleted}>Completed</button>
                    <button onClick={changeStatusToOnhold}>Onhold</button>
                    <button onClick={changeStatusToDeleted}>Deleted</button>
                </div>
                : <></>
            }

            {props.task.status === 'completed'
                ?
                <div>
                    <button onClick={changeStatusToActive}>Active</button>
                    <button onClick={changeStatusToOnhold}>Onhold</button>
                    <button onClick={changeStatusToDeleted}>Deleted</button>
                </div>
                : <></>
            }
        </div>
    )
}

export default TaskCard;