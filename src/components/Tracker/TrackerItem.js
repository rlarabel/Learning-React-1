import './TrackerItem.css'
import Card from '../UI/Card'

function TrackerItem(props) {
     let timeOptions = {timeStyle: 'short'};
     let dateOptions = {dateStyle: 'full'};
    

    return (
        <li>
        <Card className="tracker-item">
            <div className="shift-time">
                <h2><small>Start:</small> { props.start.toLocaleString('en-US', timeOptions) }</h2>
                <h2><small>Finish:</small> { props.finish.toLocaleString('en-US', timeOptions) }</h2>
            </div>

            <div className="shift-date">
                <h2>{ props.start.toLocaleString('en-US', dateOptions) }</h2>
                <h2>{ props.finish.toLocaleString('en-US', dateOptions) }</h2>

            </div>
            
            <div className="tracker-item__total">total time</div>
        </Card>
        </li>);
};

export default TrackerItem;