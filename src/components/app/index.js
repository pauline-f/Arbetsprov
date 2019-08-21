import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Board from '../Board/Board';
import CreateTask from '../CreateTask/CreateTask';
import DeletedTasks from '../DeletedTasks/DeletedTasks';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Route path='/board' component={Board} />
            <Route path='/task/create' component={CreateTask} />
            <Route path='/deleted-tasks' component={DeletedTasks} />
        </BrowserRouter>
    )
}
export default App