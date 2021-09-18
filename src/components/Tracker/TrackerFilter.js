import './TrackerFilter.css';

const TrackerFilter = (props) => {
  const setYearHandler = (event) => {
    props.onSelectTime(event.target.value);
  };
  
  return (
    <div className='tracker-filter'>
      <div className='tracker-filter__control'>
        <label>Filter by year</label>
        <select value={props.currentYear} onChange={setYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default TrackerFilter;