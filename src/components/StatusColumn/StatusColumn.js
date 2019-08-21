import React from 'react';
import TaskCard from '../TaskCard/TaskCard';

function filterAndSortTasks(tasks, status) {
    return tasks
      .filter(task => task.status === status)
      .sort((a, b) => {
        if(a.sp > b.sp) {
          return -1;
        } else if(a.sp < b.sp) {
          return 1;
        } else {
          return 0;
        }
      });
  }

function StatusColumn(props) {
    return (
        <div>
          {filterAndSortTasks(props.tasks, props.status).map((task, index) =>
            <TaskCard key={index} {...props} task={task} />
          )}
        </div>
      );
}

export default StatusColumn;  