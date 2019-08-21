import React from 'react';

function filterAndSortTasks(tasks, status) {
    return tasks
      .filter(task => task.status === status)
      .sort((a, b) => {
        if(a.sp < b.sp) {
          return -1;
        } else if(a.sp > b.sp) {
          return 1;
        } else {
          return 0;
        }
      });
  }

function StatusColumn(props) {
    return (
        <ul>
          {filterAndSortTasks(props.tasks, props.status).map((task, index) =>
            <li key={index}>{task.task} - {task.sp}</li>
          )}
        </ul>
      );
}

export default StatusColumn;  