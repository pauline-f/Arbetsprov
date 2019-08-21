import React from 'react';
import './DeletedTasks.css';
import StatusColumn from '../StatusColumn/StatusColumn';

function DeletedTasks(props) {
    return (
        <div>
            <h1>Deleted Tasks</h1>
            <div>
                <StatusColumn {...props} status={'deleted'} />
            </div>
        </div>
    )
}

export default DeletedTasks;