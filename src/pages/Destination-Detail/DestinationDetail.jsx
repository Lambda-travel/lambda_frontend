import { Link } from "react-router-dom"
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
            <div className="container-images-desc-destination">
                <div className="description-images-destination">
                    <img className="img-desc-destination" src="/src/assets/dummy-img/pexels-asad-photo-maldives-3601426.jpg"></img>
                </div>
                <div className="description-images-destination">
                    <img className="img-desc-destination" src="/src/assets/dummy-img/pexels-asad-photo-maldives-3601426.jpg"></img>
                </div>
            </div>
            <Link to="/trip/itinerary"><button className="btn-destination-detail">Back to Trip Itinerary</button></Link>
        </div>
    )
}

export default DestinationDetail