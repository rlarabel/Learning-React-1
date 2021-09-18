import { useState } from 'react';
import './Tracker.css';
import TrackerList from './TrackerList';
import Card from '../UI/Card';
import TrackerFilter from './TrackerFilter';
import TrackerChart from './TrackerChart';

function Tracker(props) {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());

    const selectFilterHandler = (year) => {
      setSelectedYear(year);
    };

    const filteredTimes = props.items.filter((times) => {
      return times.endDate.getFullYear().toString() === selectedYear;
    });

    

  return (
    <Card className='tracker'>
      <TrackerFilter 
        onSelectTime={selectFilterHandler} 
        currentYear={selectedYear} 
      />
      
      <TrackerChart times={filteredTimes} />

      <TrackerList items={filteredTimes}/>

    </Card>
  );
}

export default Tracker;