import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import "./overViewPage.css";
import { useState, useEffect } from "react";
import EditTrip from "../../components/popUps/EditTrip/EditTrip";
import Avatar from "../../assets/dummy-img/Avatar.svg";
import api from "../../api/api";


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



const OverviewPage = () => {
  const location = useLocation() 

  const id = Number(useParams().id)
 
  

  // ------------  GET ALL DAYS

const getAllDays =(id)=> {
    api
    .get(`/trip/${id}`)
    .then((response)=> {
      localStorage.setItem("allDays", JSON.stringify(response.data))
    })
    .catch((error)=> console.log(error))
  }

  // -------------- GET INFO ONE TRIP BY ID

  const [tripInfo,setTripInfo] = useState([])

  const tripById =(id)=> {
    api
    .get(`/trip/overview/${id}`)
    .then((response)=> setTripInfo(response.data))
    .catch((error)=> console.log(error))
  }



  useEffect(()=>{
    getAllDays(id)
    tripById(id)
  },[])


/*-------------  PAGE INFO -----------*/

  const [editTripPopUp, setEditTripPopUp] = useState(false);
  
  if(editTripPopUp){
    document.body.classList.add('active-modal-edit')
 }else {
    document.body.classList.remove('active-modal-edit')
 }


  const toggleEditTrip = () => {
    setEditTripPopUp(!editTripPopUp);
  };


  return (
    <>

    {tripInfo.map((trip)=>(
      <article key={trip.id}>
      {/*-------- H E A D E R -------------*/}
      <div className="header-container">
        <Link to="/home">
          <button className="header-btn-home">
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <p>Home</p>
          </button>
        </Link>
        <img className="header-img" src={trip.trip_image_url} alt={""} />
      </div>
      {/*-------- INFO USER -------------*/}
      <div className="info-user-container">
        <div className="name-and-edit">
          <h1 className="name-of-trip">{trip.destination}</h1>
          <button className="edit-trip-btn" onClick={toggleEditTrip}>
            <svg
              style={{ width: "1.2rem" }}
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
        <p className="date-of-trip">{formatDate(trip.start_date)} - {formatDate(trip.end_date)}</p>
        <div className="container-avatar-and-button">
        <img className="profile-icon" src={Avatar} alt={""} />
        <Link to="/travelmate"><button className="travel-mate-overview-page">+</button></Link>
        </div>
      </div>

      <div className="categories-btn-container">
      <Link className={location.pathname === `/trip/${id}/overview` ?
         "overview-btn-categories-active" 
          :
          "overview-btn-categories-disable"} to={`/trip/${id}/overview`}>
      
        Overview
        </Link>
        <Link className={location.pathname === `/trip/${id}/itinerary` ?
          "itinerary-btn-categories-active"
          :
           "itinerary-btn-categories-disable"} to={`/trip/${id}/itinerary`}>
       
        Itinerary
        </Link>
      </div>
        <Outlet />
  

    </article>

    ))}

    </>
  );
};

export default OverviewPage;
