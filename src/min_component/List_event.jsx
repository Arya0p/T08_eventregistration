import React from 'react'
import { Link } from 'react-router-dom';
const List_event = ({name,date_time,desc}) => {
  return (
    <div className="event_listed">
            <div className="top">
            <h3>{name}</h3> 
            <div className="top-right">

             <Link to = {`events`}>
             <button>Join</button>
             </Link>
            <span className="event_date">{date_time}</span>
            {/* <span className="event_date">Time: 9am</span> */}
            </div>
            </div>
            <div className="bottom">
            <p className="desc">{desc}</p>
            </div>
            
        </div>
  )
}

export default List_event