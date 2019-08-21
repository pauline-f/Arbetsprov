import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Board from '../Board/Board';
import CreateTask from '../CreateTask/CreateTask';
import DeletedTasks from '../DeletedTasks/DeletedTasks';
import UpdateTaskForm from '../UpdateTaskForm/UpdateTaskForm';

function App() {
    const [tasks, setTasks] = useState([]);
    const [developers, setDevelopers] = useState([
        {id:'0', name:'Mark Zuckerberg'},
        {id:'1', name:'Bill Gates'},
        {id:'2', name:'Uncle Bob'},
        {id:'3', name:'Ada Lovelace'}
    ]);
    const [storyPoints, setStoryPoints] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <BrowserRouter>
            <NavBar />
            <Route path='/board' render={(props) => <Board {...props} tasks={tasks} setTasks={setTasks} developers={developers} component={Board} />} />
            <Route path='/task/create' render={(props) => <CreateTask {...props} tasks={tasks} setTasks={setTasks} developers={developers} storyPoints={storyPoints} component={CreateTask} />} />
            <Route path='/task/update/:id' render={(props) => <UpdateTaskForm {...props} tasks={tasks} setTasks={setTasks} developers={developers} storyPoints={storyPoints} component={UpdateTaskForm} />} />
            <Route path='/deleted-tasks' render={(props) => <DeletedTasks {...props} tasks={tasks} developers={developers} component={DeletedTasks} />} />
        </BrowserRouter>
    )
}
export default App;