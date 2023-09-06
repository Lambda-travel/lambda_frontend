import { Link } from "react-router-dom";
import "./cardInfoStyle.css"


const CardInfo =()=> {

    return (
        <div>
            <img className="img-card-itinerary" 
            src="/src/assets/dummy-img/pexels-asad-photo-maldives-3601426.jpg">
            </img>
            <div className="description-itinerary-card">
                <h3 className="title-card-itinerary"><span className="number-desc-card">1.</span>Maldives</h3>
                <p className="description-card-itinerary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  maxime repellat totam?
                </p>
                    <Link to="destination-detail"><button className="viewMore-card-itinerary">View Details</button></Link>
            </div>
        </div>
    )
}

export default CardInfo;