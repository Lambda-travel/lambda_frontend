/* eslint-disable react/prop-types */
import CardInfo from "../CardItinerary/CardInfo";
import { useState } from "react";
import "./listItineraryStyle.css"

const ListItinerary =()=> {
    
    const [showCard, setShowCard] = useState(false)
    const toggleCard =()=> {
        setShowCard(!showCard)
    }

    return (
        <div onClick={toggleCard} className="list-card-itinerary">
        <div className="btn-and-date-itinerary">
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
        <button className="btn-add-destination">Add Destination</button>
        { showCard ? <CardInfo/> : null}
    </div>
    )
}

export default ListItinerary;