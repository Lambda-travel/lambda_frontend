import { Link } from "react-router-dom";
import "./cardInfoStyle.css";
import { useState, useEffect } from "react";
import api from "../../../api/api";

// eslint-disable-next-line react/prop-types
const CardInfo = ({ dayID }) => {
  const [destination, setDestination] = useState([]);


  const destinationDetail = (dayID) => {
    api
      .get(`/destination/detail/${dayID}`)
      .then((response) => setDestination(response.data))
      .catch((error) => console.log(error));
  };




  useEffect(() => {
    destinationDetail(dayID);
  }, []);
  

  return destination.map((destination) => (
    <div key={destination.id}>
      <img
        className="img-card-itinerary"
        src={destination.image_url}
      ></img>
      <div className="description-itinerary-card">
        <h3 className="title-card-itinerary">
          <span className="number-desc-card">{destination.id}.</span>
          {destination.place_to_visit}
        </h3>
        <p className="description-card-itinerary">{destination.description}</p>
        <Link to={`/overview/destination-detail/${destination.id}`}>
          <button className="viewMore-card-itinerary">View Details</button>
        </Link>
      </div>
    </div>
  ));
};

export default CardInfo;
