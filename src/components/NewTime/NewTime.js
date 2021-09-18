import './NewTime.css';
import TimeForm from './TimeForm'
import { useState } from 'react';

const NewTime = (props) => {
    const [showForm, setShowForm] = useState(false)
    
    const saveTimeDataHandler = (enteredTimeData) => {
        const timeDiff = enteredTimeData.endDate - enteredTimeData.beginDate
        const timeData = {
            ...enteredTimeData,
            id: Math.random().toString(),
            totalTime: timeDiff
        };
        props.onAddTime(timeData);
    };

    const openForm = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    if (showForm === false) {
        return (
            <div className='new-time'>
                <button onClick={openForm}>Add New Time</button>
            </div>
        )
    };

    return (
        <div className='new-time'>
            <TimeForm onCloseForm={closeForm} onSaveTimeData={saveTimeDataHandler} />
        </div>
    );
};

export default NewTime