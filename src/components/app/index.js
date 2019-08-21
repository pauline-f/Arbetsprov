import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Board from '../Board/Board';
import CreateTask from '../CreateTask/CreateTask';
import DeletedTasks from '../DeletedTasks/DeletedTasks';

function App() {
    const [tasks, setTasks] = useState([]);
    return (
        <BrowserRouter>
            <NavBar />
            <Route path='/board' render={(props) => <Board {...props} tasks={tasks} component={Board} />} />
            <Route path='/task/create' render={(props) => <CreateTask {...props} tasks={tasks} setTasks={setTasks} component={CreateTask} />} />
            <Route path='/deleted-tasks' render={(props) => <DeletedTasks {...props} tasks={tasks} component={DeletedTasks} />} />
        </BrowserRouter>
    )
}
export default App;