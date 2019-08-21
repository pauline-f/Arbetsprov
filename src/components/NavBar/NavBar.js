import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='Navbar'>
            <div>
                <Link to='/board'>Board</Link>
            </div>
            <div>
                <Link to='/task/create'>CreateTask</Link>
            </div>
            <div>
                <Link to='/deleted-tasks'>DeletedTasks</Link>
            </div>
        </div>
    )
}

export default NavBar;