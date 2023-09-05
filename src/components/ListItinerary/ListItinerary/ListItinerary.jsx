/* eslint-disable react/prop-types */
import CardInfo from "../CardItinerary/CardInfo";
import { useState } from "react";
import "./listItineraryStyle.css"
import AddDestination from "../../popUps/AddDestination/AddDestination";

function formatDate(inputDate) {
    const date = new Date(inputDate);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const formattedDate = `${day} ${month}`;
    return formattedDate;
  }

const ListItinerary =({allDays})=> {


/*--------------  SHOW CARD -----------------------*/

    const [showCard, setShowCard] = useState(false)
    const toggleCard =()=> {
        setShowCard(!showCard)
    }

/*  ADD DESTINATION POP UP*/

const [addDestinationPopUp, setAddDestinationPopUp] = useState(false);
const toggleAddDestination = () => {
    setAddDestinationPopUp(!addDestinationPopUp);
  };   

    return (
        <div>

{allDays.map((ei)=>(
                <div key={ei.id} className="list-card-itinerary">
        <div onClick={toggleCard} className="btn-and-date-itinerary">
            {
            showCard ?  <svg style={{width:"1.5rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    :
                    <svg style={{width:"1.5rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
            }
        <p>{formatDate(ei.day)}</p>
        </div>
        <button onClick={toggleAddDestination} className="btn-add-destination">Add Destination</button>
        {addDestinationPopUp ? <AddDestination toggleAddDestination={toggleAddDestination} /> : null}
        { showCard ? <CardInfo/> : null}
    </div>

            ))}
            
        </div>
    )
}
/*
 
*/
export default ListItinerary;