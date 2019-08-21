import React from 'react';

function UpdateTaskForm(props) {

    const task = props.tasks.filter(task => task.id === parseInt(props.match.params.id))[0];    
    
    const updateTask = (e) => {
        e.preventDefault();
        task.task = document.getElementById('task').value;
        task.sp = document.getElementById('sp').value;
        task.dev = document.getElementById('dev').value;
        const status = task.status;
        task.status = (task.dev === '') ? 'created' : status;

        if (task.status === 'created' && task.dev !== '') task.status = 'active';


        let allTasks = [...props.tasks];
        const taskToUpdate = allTasks.filter(task => task.id === parseInt(props.match.params.id))[0];
        allTasks.splice(allTasks.indexOf(taskToUpdate), 1, task);
        props.setTasks(allTasks);
    };

    return (
        <div>
            <h1>Update Task</h1>
            <form autoComplete='off' onSubmit={updateTask}>
                <div>
                    <label htmlFor='task'>Task:</label>
                    <input type='text' id='task' defaultValue={task.task} />
                </div>

                <div>
                    <label htmlFor='sp'>Story points:</label>
                    <select id='sp' defaultValue={task.sp}>
                        {props.storyPoints.map((point, index) => {
                            return <option key={index} value={point}>{point}</option>
                        })}
                    </select>
                </div>

                <div>
                    <label htmlFor='dev'>Assigned developer:</label>
                    <select id='dev' defaultValue={task.dev}>
                        <option value=""></option>
                        {props.developers.map((developer, index) => {
                            return <option key={index} value={developer.id}>{developer.name}</option>
                        })}
                    </select>
                </div>

                <div>
                    <input type='submit' value='Update' />
                </div>
            </form>
        </div>
    )
}

export default UpdateTaskForm;