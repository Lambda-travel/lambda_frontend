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


const ListItinerary = () => {
    const allDays = JSON.parse(localStorage.getItem("allDays"))
  // Maintain state for each card separately
  const [showCardMap, setShowCardMap] = useState({});
  const [addDestinationPopUpMap, setAddDestinationPopUpMap] = useState({});

  // Function to toggle the visibility of a card
  const toggleCard = (dayId) => {
    setShowCardMap((prevState) => ({
      ...prevState,
      [dayId]: !prevState[dayId] || false, // Toggle the state or initialize as false
    }));
  };


  // Function to toggle the add destination pop-up for a card
  const toggleAddDestination = (dayId) => {
    if(!addDestinationPopUpMap[dayId]){
      document.body.classList.add('active-modal')
   }else {
      document.body.classList.remove('active-modal')
   }

    setAddDestinationPopUpMap((prevState) => ({
      ...prevState,
      [dayId]: !prevState[dayId] || false, // Toggle the state or initialize as false
    }));
  };
  return (
    <div>
      {allDays.map((day) => (
        <div key={day.id} className="list-card-itinerary">
          <div className="btn-and-date-itinerary">
            <button className="svg-btn" onClick={() => toggleCard(day.id)}>
              {showCardMap[day.id] ? (
                <svg
                  style={{ width: "1.5rem"}}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  style={{ width: "1.5rem" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              )}
            </button>
            <p>{formatDate(day.day)}</p>
          </div>
          <button onClick={() => toggleAddDestination(day.id)} className="btn-add-destination">Add Destination</button>
          {addDestinationPopUpMap[day.id] ? <AddDestination toggleAddDestination={() => toggleAddDestination(day.id)} dayId={day.id} /> : null}
          {showCardMap[day.id] ? <CardInfo dayID={day.id} /> : null}
        </div>
      ))}
    </div>
  );
};
export default ListItinerary;







// function formatDate(inputDate) {
//     const date = new Date(inputDate);
//     const monthNames = [
//       "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//     ];
//     const day = date.getDate();
//     const month = monthNames[date.getMonth()];
//     const formattedDate = `${day} ${month}`;
//     return formattedDate;
//   }






// const ListItinerary =({allDays})=> {


// /*--------------  SHOW CARD -----------------------*/

//     const [showCard, setShowCard] = useState(false)
//     const toggleCard =()=> {
//         setShowCard(!showCard)
//     }

// /*  ADD DESTINATION POP UP*/

// const [addDestinationPopUp, setAddDestinationPopUp] = useState(false);
// const toggleAddDestination = () => {
//     setAddDestinationPopUp(!addDestinationPopUp);
//   };   


//     return (
//         <div>

//             {allDays.map((days)=>(
//                 <div key={days.id} className="list-card-itinerary">
//                     <div onClick={toggleCard} className="btn-and-date-itinerary">
//                     {
//                         showCard 
//                     ?  <svg style={{width:"1.5rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//                         </svg>
//                     :
//                         <svg style={{width:"1.5rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
//                         </svg>
//                     }
//                     <p>{formatDate(days.day)}</p>
//                     </div>
//                     <button onClick={toggleAddDestination} className="btn-add-destination">Add Destination</button>
//                     {addDestinationPopUp ? <AddDestination toggleAddDestination={toggleAddDestination} /> : null}
//                     { showCard ? <CardInfo dayID={days.id} /> : null}
//                 </div>
//             ))}
            
//         </div>
//     )
// }





// export default ListItinerary;