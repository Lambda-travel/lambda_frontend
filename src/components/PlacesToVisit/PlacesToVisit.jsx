/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./placesToVisitStyle.css";
import AddPlace from "../popUps/Add Place/AddPlace";
import { useParams } from "react-router-dom";
import api from "../../api/api";

const PlacesToVisit = () => {
  const id = useParams().id
  const [placesInfo,setPlacesInfo] = useState([])
  const [showMore, setShowMore] = useState({});

  const placesInfoHandle = (id) => {
    api
      .get(`/trip/place/${id}`)
      .then((response) => {
        setPlacesInfo(response.data)
        if (response.data.length > 0) {
          setShowDetail(true);
        }
      })
      .catch((error) => console.error(error));
  };
useEffect(()=>{
  placesInfoHandle(id)
},[placesInfo])


  const [addPopUp, setAddPopUp] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const toggleAdd = () => {
    setAddPopUp(!addPopUp);
    if (!addPopUp) {
      document.body.classList.add("active-modal-place-to-visit");
    } else {
      document.body.classList.remove("active-modal-place-to-visit");
    }
  };

  // const toggleDetail = () => {
  //   setShowDetail(!showDetail);
  // };

  const toggleViewMore = (placeID) => {
    setShowMore((prevState) => ({
      ...prevState,
      [placeID]: !prevState[placeID] || false, 
    }));
  };

  return (
    <article>
    <div className="container-places-to-visit">
      <div className="btn-and-title">

          {
          showDetail ?  <svg  style={{width:"1.5rem",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                  :
                  <svg  style={{width:"1.5rem",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
          }
                      <h3  className="places-to-visit">Places to Visit</h3>
                      </div>
                      
               <button onClick={toggleAdd}  className="add-place-to-visit-btn"><p className="plus-icon-btn">+</p></button>
          </div>
          {
              showDetail ?

              placesInfo.map((places)=>(
                <div key={places.id} className="description-container">
                <h4 className="title-description-place">{places.name}</h4>
                <p className="description-place">
                  { showMore[places.id] ? places.description : `${places.description.substring(0,50)}...` }
                </p>
                <div className="container-btn-view-detail-place">
                <button onClick={()=> toggleViewMore(places.id)} className="view-details-places">{showMore[places.id] ? "View Less" : "View More"}</button>
                </div>
            </div>

              ))

              : null
          }

          {addPopUp && <AddPlace toggleAdd={toggleAdd}/>}
          <div className="places-to-visit-container"></div>
      {/*-------- RECOMMENDED PLACES -------------*/}


  </article>
  );
};

export default PlacesToVisit;
