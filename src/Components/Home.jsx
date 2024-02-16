import React, { useEffect, useState } from 'react'
import './Home.css'
import List_event from '../min_component/List_event'
import db from '../db'
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
const Home = () => {
 const [data,setData] = useState([])
 
 




 

 const getEventList = async () => {
  try {
       onSnapshot(collection(db, "list_events"), (querySnapshot) => {
                 setData(querySnapshot.docs.map((doc) => ({
                     id: doc.id,
                     data: doc.data()
                 })))
             });

         
         } catch (error) {
             console.error(error) 
         }

     }
  useEffect(() => {
   getEventList()
     console.log(data);
  }, [])
  

  return (
    <div className='home'>
        <h2>Events Listed </h2>

        <div className="home_main">
        {data.map(event => (<List_event key = {event.id}name={(event.data.event_name)} date_time={(event.data.event_start_date?.toDate().toUTCString())} desc = {event.data.event_details} />))}
        </div>
        <div className="add_button">
        <h3>+</h3>
        </div>
    </div>
  )
}

export default Home