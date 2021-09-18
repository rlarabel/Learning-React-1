import { useState } from 'react';
import './TimeForm.css'

const TimeForm = (props) => {
    const [enteredProject, setEnteredProject] = useState('');
    const [enteredStart, setEnteredStart] = useState('');
    const [enteredEnd, setEnteredEnd] = useState('');

    const projectChangeHandler = (event) => {
        setEnteredProject(event.target.value);
    };

    const startChangeHandler = (event) => {
        setEnteredStart(event.target.value);
    };

    const endChangeHandler = (event) => {
        setEnteredEnd(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const trackerData = {
            project: enteredProject,
            beginDate: new Date(enteredStart),
            endDate: new Date(enteredEnd)
        };

        props.onSaveTimeData(trackerData);
        setEnteredProject('');
        setEnteredStart('');
        setEnteredEnd('');
        props.onCloseForm();
    };

    return (
    <form onSubmit={submitHandler}>
        <div className="new-time__controls">
            <div className="new-time__control">
                <label>Project</label>
                <input type="text" value={enteredProject} onChange={projectChangeHandler}/>
            </div>
        </div>
        <div className="new-time__controls">
            <div className="new-time__control">
                <label>Start Time</label>
                <input type="datetime-local" min="2000-01-01" value={enteredStart} onChange={startChangeHandler}/>
            </div>
        </div>
        <div className="new-time__controls">
            <div className="new-time__control">
                <label>End Time</label>
                <input type="datetime-local"  min="2000-01-01" value={enteredEnd} onChange={endChangeHandler}/>
            </div>
        </div>
        <div className="new-time__actions">
            <button type="button" onClick={props.onCloseForm}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default TimeForm