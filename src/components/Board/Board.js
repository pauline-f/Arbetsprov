import React from 'react';
import StatusColumn from '../StatusColumn/StatusColumn';

function Board(props) {
    return (
        <div>
            <h1>Board</h1>

            <h3>Created</h3>
            <StatusColumn {...props} status={'created'} />

            <h3>Active</h3>
            <StatusColumn {...props} status={'active'} />
        </div>
    )
}

export default Board;