import React from 'react';
import './CreateTaskForm.css'

function CreateTaskForm(props) {

    let tasks = props.tasks;

    const saveTask = (e) => {
        e.preventDefault();
        const task = document.getElementById('task').value;
        const sp = document.getElementById('sp').value;
        const dev = document.getElementById('dev').value;
        const status = (dev === '') ? 'created' : 'active';
        const id = tasks.length + 1;
        tasks.push({ id: id, task: task, sp: sp, dev: dev, status: status });
        props.setTasks(tasks);
        console.log(props.tasks);
        document.getElementById('task').value = '';
        document.getElementById('sp').value = '';
        document.getElementById('dev').value = '';
    };

    return (
        <div>
            <h1>Create Task</h1>
            <form autoComplete='off' onSubmit={saveTask}>
                <div className='element'>
                    <label htmlFor='task'>Task:</label>
                    <input type='text' id='task' />
                </div>

                <div className='element'>
                    <label htmlFor='sp'>Story points:</label>
                    <select id='sp'>
                        {props.storyPoints.map((point, index) => {
                            return <option key={index} value={point}>{point}</option>
                        })}
                    </select>
                </div>

                <div className='element'>
                    <label htmlFor='dev'>Assigned developer:</label>
                    <select id='dev'>
                        <option value=""></option>
                        {props.developers.map((developer, index) => {
                            return <option key={index} value={developer.id}>{developer.name}</option>
                        })}
                    </select>
                </div>

                <div className='element'>
                    <input type='submit' value='Save' className='button'/>
                </div>
            </form>
        </div>
    )
}

export default CreateTaskForm;