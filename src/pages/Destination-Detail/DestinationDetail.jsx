import { useNavigate, useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import  { Autoplay , Navigation} from "swiper/modules";
import { useState,useEffect } from "react";
import api from "../../api/api";

import "./destinationDetailStyle.css"
import "swiper/css"
import 'swiper/css/navigation';




const DestinationDetail =()=> {
    const id =  Number(useParams().id)
    const allDays = JSON.parse(localStorage.getItem("allDays"))
    const backPage = useNavigate()
    const tripID = allDays.map((tripID)=> id == tripID.trip_id)[0]


    const previousPage =()=>{
        if(tripID){
            backPage(-1)
        }else {
            backPage('/home')
        }
    }

const [destinationDetails,setDestinationDetails] = useState([])


const destinationDetail =(id)=> {
  api
  .get(`/destination/detail/${id}`)
  .then((response)=> setDestinationDetails(response.data))
  .catch((error)=> console.log(error))
}



useEffect(()=>{
    destinationDetail(id)
},[])


    return (

        destinationDetails.map((details)=>(

            <div key={details.id} className="container-destination-detail">
            <div className="container-background-destination">
                <img className="destination-background" src={details.image_url}></img>
            </div>
            <div className="card-description-destination">
                <h1 className="title-destination">{details.place_to_visit}</h1>
                <h3 className="sub-title-destination">{details.location}</h3>
            </div>
            <div className="description-container-destination">
            <h4 className="description-title-destination">Description</h4>
            <p className="description-text-destination" >
                {details.description}
            </p>
            </div>
            <div className="images-carousel-container">
                <Swiper 
                spaceBetween={24}
                slidesPerView={"1.5"}
                grabCursor={true}
                centeredSlides={true}
                modules={[Autoplay,Navigation]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                >
                    <SwiperSlide>
                        <img className="img" src={"/src/assets/dummy-img/pexels-asad-photo-maldives-1287460.jpg"} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img" src={"/src/assets/dummy-img/pexels-asad-photo-maldives-1430676.jpg"} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img" src={"/src/assets/dummy-img/pexels-asad-photo-maldives-3601426.jpg"} alt="" />
                    </SwiperSlide>
                </Swiper>
                </div>

            <button onClick={previousPage} className="btn-destination-detail">Back to Trip Itinerary</button>


        </div>


        ))

    )
}


export default DestinationDetail