# Task tracking application 

This application allows to create, display, complete, update, assign and delete tasks.
For each task you can add a story points from 0 to 10.
A task can be assigned to a developer.
It can have different states : created, active, completed, onhold and deleted.
The tasks are displayed in a board. The deleted tasks are displayed in another view.
Tasks can be modified.
On the board, tasks are sorted by story points.

### Notes
- I used React with State Hooks
- The state resides in one place
- I used react-router-dom for the routing
- I made small Git commits

### States
A task can have the following states: 
created, active, completed, onhold and deleted. 

The status can only be changed according to the following rules.
- A task can only be completed after being set to active.
- A task can only become active after being assigned a dev
- A task can only go from onhold to active or deleted 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.