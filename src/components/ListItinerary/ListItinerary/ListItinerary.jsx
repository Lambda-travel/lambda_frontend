/* eslint-disable react/prop-types */
import CardInfo from "../CardItinerary/CardInfo";
import { useState } from "react";
import "./listItineraryStyle.css"
import AddDestination from "../../popUps/AddDestination/AddDestination";

const ListItinerary =()=> {
    
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
        <div  className="list-card-itinerary">
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
        <p> 10 Aug</p>
        </div>
        <button onClick={toggleAddDestination} className="btn-add-destination">Add Destination</button>
        {addDestinationPopUp ? <AddDestination toggleAddDestination={toggleAddDestination} /> : null}
        { showCard ? <CardInfo/> : null}
    </div>
    )
}

export default ListItinerary;