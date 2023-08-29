import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"




import "swiper/css";
import "./destinationDetailStyle.css"


const DestinationDetail =()=> {
    return (
        <div className="container-destination-detail">
            <div className="container-background-destination">
                <img className="destination-background" src="/src/assets/dummy-img/pexels-asad-photo-maldives-3601426.jpg"></img>
            </div>
            <div className="card-description-destination">
                <h1 className="title-destination"> Maldives </h1>
                <h3 className="sub-title-destination"> Caribes</h3>
            </div>
            <h4 className="description-title-destination">Description</h4>
            <p className="description-text-destination" >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nam. Voluptate 
            </p>

            <div className="test-container">
                <Swiper 
                spaceBetween={-190}
                slidesPerView={"auto"}
                grabCursor={true}
                centeredSlides={true}
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

            <Link to="/trip/itinerary"><button className="btn-destination-detail">Back to Trip Itinerary</button></Link>


        </div>
    )
}



export default DestinationDetail