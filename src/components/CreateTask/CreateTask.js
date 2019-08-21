import React from 'react';
import CreateTaskForm from '../CreateTaskForm/CreateTaskForm';

function CreateTask(props) {
    return (
        <div>
            <CreateTaskForm {...props} />
        </div>
    )
}

export default CreateTask;