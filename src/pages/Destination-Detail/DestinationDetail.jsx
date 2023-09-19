import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import api from "../../api/api";

import "./destinationDetailStyle.css";
import "swiper/css";
import "swiper/css/navigation";

const defaultCover =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";

const DestinationDetail = () => {
  const id = Number(useParams().id);
  const allDays = JSON.parse(localStorage.getItem("allDays"));
  const backPage = useNavigate();
  const tripID = allDays.map((tripID) => tripID.trip_id)[0];

  const previousPage = () => {
    if (tripID) {
      backPage(-1);
    } else {
      backPage(`/trip/${id}/overview`);
    }
  };

  const [destinationDetails, setDestinationDetails] = useState([]);
  const [destinationImages, setDestinationImages] = useState([]);

  const destinationDetail = (id) => {
    api
      .get(`/destination/details/${id}`)
      .then((response) => {
        console.log(response.data);
        setDestinationImages(response.data.destinationImages);
        setDestinationDetails(response.data.destinationInfo);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    destinationDetail(id);
  }, []);

  return destinationDetails.map((details) => (
    <div key={details.id} className="container-destination-detail">
      <div className="container-background-destination">
        <img
          className="destination-background"
          src={
            destinationImages[0].image_url == null
              ? defaultCover
              : destinationImages[0].image_url
          }
        ></img>
      </div>
      <div className="card-description-destination">
        <h1 className="title-destination">{details.place_to_visit}</h1>
        <h3 className="sub-title-destination">{details.location}</h3>
      </div>
      <div className="description-container-destination">
        <h4 className="description-title-destination">Description</h4>
        <p className="description-text-destination">{details.description}</p>
      </div>
      <div className="images-carousel-container">
        <Swiper
          spaceBetween={24}
          slidesPerView={"1.5"}
          grabCursor={true}
          centeredSlides={true}
        >
          {destinationImages.filter((image, index) => index > 0).map((image, index) => (
            <SwiperSlide key={index}>
              <img className="img" src={image.image_url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button onClick={previousPage} className="btn-destination-detail">
        Back to Trip Itinerary
      </button>
    </div>
  ));
};

export default DestinationDetail;
