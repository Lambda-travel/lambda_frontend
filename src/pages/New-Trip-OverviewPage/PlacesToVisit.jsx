import { useState } from "react";
import "./placesToVisitStyle.css";
import AddPlace from "../../components/popUps/Add Place/AddPlace";
import { Link } from "react-router-dom";

const PlacesToVisit = () => {
  
  const [addPopUp, setAddPopUp] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const toggleAdd = () => {
    setAddPopUp(!addPopUp);
  };

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <article>
      <div className="container-places-to-visit">
        <div className="btn-and-title">

            {
            showDetail ?  <svg onClick={toggleDetail} style={{width:"1.5rem",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    :
                    <svg onClick={toggleDetail} style={{width:"1.5rem",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
            }
                        <h3 onClick={toggleDetail} className="places-to-visit">Places to Visit</h3>
                        </div>
                 <button onClick={toggleAdd}  className={showDetail ? "add-place-to-visit-btn" :"none" }><p className="plus-icon-btn">+</p></button>
            </div>
            {
                showDetail ?
                 <div className="description-container">
                    <h4 className="title-description-place"> Maldives</h4>
                    <p className="description-place">
                    The Maldive Islands are a series of coral atolls built up from the crowns of a submerged ancient volcanic mountain range.
                     All the islands are low-lying, none rising to more than 6 feet (1.8 metres)
                    </p>
                    <div className="container-btn-view-detail-place">
                    <Link to="/trip/overview/destination-detail"><button className="view-details-places">View Details</button></Link>
                    </div>
                </div>
                : null
            }
            <button onClick={toggleAdd} className={showDetail ? "none" : "add-place-to-visit-btn2" }><p className="plus-icon-btn">+</p></button>

            {addPopUp && <AddPlace toggleAdd={toggleAdd}/>}
            <div className="places-to-visit-container"></div>
        {/*-------- RECOMMENDED PLACES -------------*/}
        <div>
          <p className="recommended-places-overview">Recommended Places</p>
        </div>


    </article>
  );
};

export default PlacesToVisit;
