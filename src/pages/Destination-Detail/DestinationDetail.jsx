import { Link, useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import  { Autoplay , Navigation} from "swiper/modules";

import "./destinationDetailStyle.css"
import "swiper/css"
import 'swiper/css/navigation';





const DestinationDetail =()=> {

   const id =  Number(useParams().id)

    return (
        <div className="container-destination-detail">
            <div className="container-background-destination">
                <img className="destination-background" src="/src/assets/dummy-img/pexels-asad-photo-maldives-3601426.jpg"></img>
            </div>
            <div className="card-description-destination">
                <h1 className="title-destination"> Maldives </h1>
                <h3 className="sub-title-destination"> Caribes</h3>
            </div>
            <div className="description-container-destination">
            <h4 className="description-title-destination">Description</h4>
            <p className="description-text-destination" >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nam. Voluptate lor
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

            <Link to={`/trip/overview/${id}`}><button className="btn-destination-detail">Back to Trip Itinerary</button></Link>


        </div>
    )
}



export default DestinationDetail