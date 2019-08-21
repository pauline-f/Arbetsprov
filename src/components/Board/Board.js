import React from 'react';
import './Board.css';
import StatusColumn from '../StatusColumn/StatusColumn';

function Board(props) {
    return (
        <div>
            <h1>Board</h1>
            <div className='container'>
                <div>
                    <h3>Created</h3>
                    <StatusColumn {...props} status={'created'} />
                </div>

                <div>
                    <h3>Active</h3>
                    <StatusColumn {...props} status={'active'} />
                </div>

                <div>
                    <h3>Completed</h3>
                    <StatusColumn {...props} status={'completed'} />
                </div>

                <div>
                    <h3>Onhold</h3>
                    <StatusColumn {...props} status={'onhold'} />
                </div>
            </div>
        </div>
    )
}

export default Board;