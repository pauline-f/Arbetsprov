import React from 'react';

function CreateTaskForm() {
    return (
        <form autoComplete='off'>
            <div>
                <label>Task:</label>
                <input type='text' id='task' />
            </div>

            <div>
                <label>Story points:</label>
                <select>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div>
                <label>Assigned developer:</label>
                <select>
                    <option value=""></option>
                    <option value="Zuckerberg">Mark Zuckerberg</option>
                    <option value="Gates">Bill Gates</option>
                    <option value="Bob">Uncle Bob</option>
                    <option value="Lovelace">Ada Lovelace</option>
                </select>
            </div>

            <div>
                <button>Save</button>
            </div>
        </form>
    )
}

export default CreateTaskForm;