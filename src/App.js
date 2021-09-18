import { useState } from 'react';
import Tracker from './components/Tracker/Tracker';
import NewTime from './components/NewTime/NewTime';

const INITIAL_TIME = [
  { 
    id: 0,
    project: 'Enter title', 
    beginDate: new Date(2021, 8, 25, 8, 0),
    endDate: new Date(2021, 8, 25, 15, 0),
    totalTime: 7
  }
  ];

function App() {
  const [time, setTime] = useState(INITIAL_TIME);

  const addTimeHandler = (time) => {
    setTime((prevTime) => {
      return [time, ...prevTime];
    });
  };
  
  return (
    <div>
      <NewTime onAddTime={addTimeHandler} />
      <Tracker items={time} />
    </div>
  );
}

export default App;
