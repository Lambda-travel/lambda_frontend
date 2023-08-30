import { useState } from "react";
import EditTrip from "../../components/popUps/EditTrip/EditTrip";
import "./itineraryStyle.css"
import { Link } from "react-router-dom";
import ListItinerary from "../../components/ListItinerary/ListItinerary/ListItinerary";



const ItineraryPage =()=> {

    /* EDIT POPUP*/
    const [editTripPopUp, setEditTripPopUp] = useState(false);
    const toggleEditTrip = () => {
        setEditTripPopUp(!editTripPopUp);
      };
 
    return (
        <>
            <article className="main-container-itinerary">
                {/* -------  HEADER ----------*/}
                <Link className="link-style-in-itinerary" to="/trip/overview"><div className="container-btn-and-trip-itinerary">
                <button className="btn-back-trip-overview">
                    <svg
                    style={{ width: "2rem", cursor:"pointer" }}
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                    </svg>
                </button>
                    <p className="back-to-overview">Trip Overview</p>
                </div>
                </Link>
                <div className="container-buttons-header-itinerary">
                    <Link to="/trip/overview"><button className="btn-over-itinerary-page">Overview</button></Link>
                    <button className="btn-iti-itinerary-page">Itinerary</button>
                </div>
                    {/* ------------ PROFILE ------------*/}

                <div className="info-user-container-itinerary">
                    <div className="name-and-edit-itinerary">
                        <h1 className="name-of-trip-in-itinerary">Trip to Maldives</h1>
                        <button className="edit-trip-btn" onClick={toggleEditTrip}>
                            <svg
                            style={{ width: "1.2rem",cursor:"pointer" }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                            >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                            />
                            </svg>
                        </button>

                        {editTripPopUp && <EditTrip toggleEditTrip={toggleEditTrip} />}
                        
                    </div>
                    <p className="date-of-trip-itinerary">Date: 10 aug - 17 aug</p>
                    <img className="profile-icon-itinerary" src={"/src/assets/dummy-img/Avatar.svg"} alt={""} />
                    </div>
                    {/* --------  LIST OF TRIP'S  -------------- */}
                    
                    <ListItinerary />
            </article>
        </>
    )
}

export default ItineraryPage;