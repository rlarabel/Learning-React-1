import TrackerItem from './TrackerItem';
import './TrackerList.css'

const TrackerList = (props) => {
    if (props.items.length === 0) {
      return <h2 className="tracker-list__fallback">Found no expenses.</h2>
    };

    return ( 
        <ul className="tracker-list">
            {props.items.map((times) => (
                <TrackerItem
                key={times.id} 
                start={times.beginDate} 
                finish={times.endDate}
                />
            ))}
        </ul>
    )  
};

export default TrackerList;