import { Link } from "react-router-dom"
import "./overViewPage.css"
import { useState} from "react";
import AddPlace from "../../components/popUps/Add Place/AddPlace";


const OverviewPage= ()=>{

    const [ modal,setModal] = useState(false);

    const toggleModal =()=>{
        setModal(!modal)
    }


    return (
        <>
        <article>


            <div className="header-container">
            <Link to="/">
                <button className="header-btn-home">
                    <svg style={{width:"1.5rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.3" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <p>Home</p> 
                </button>
                </Link>
                <img className="header-img" src={"/assets/dummy-img/pexels-asad-photo-maldives-3601426.jpg"} alt={""} />
            </div>

            <div className="info-user-container">
                <div className="name-and-edit">
                    <h1 className="name-of-trip">Trip to Maldives</h1>
                    <button className="edit-trip-btn">
                        <svg style={{width:"1.2rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </button>
                </div>
                <p className="date-of-trip">Date: 10 aug - 17 aug</p>
                <img className="profile-icon" src={"/assets/dummy-img/Avatar.svg"} alt={""} />
            </div>


               <div className="categories-btn-container">
                    <button className="overview-btn-categories">Overview</button>
                    <button className="itinerary-btn-categories">Itinerary</button>
                </div> 

                <div className="places-to-visit-container">
                    <button className="places-to-visit-handler-btn">
                        <svg style={{width:"2rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        Places to Visit
                    </button>

                    <button
                    onClick={toggleModal}
                     className="add-place-to-visit-btn"> <p>+</p> 
                    </button>

                    {modal && <AddPlace toggleModal={toggleModal}/> }
                    
                </div>


            <p className="recommended-places-overview">Recommended Places</p>

            <div className="recommended-container-overview">
            <div className="recommended-card">
                <img src={"/assets/dummy-img/Rectangle 718.png"} alt={""} />
                <p> Taman Nasional Wakatobi</p>
            </div>
            <div className="recommended-card">
                <img src={"/assets/dummy-img/Rectangle 718.png"} alt={""} />
                <p> Gunung Bromo</p>
            </div>
            </div>
        </article>
        </>
    )
}


export default OverviewPage