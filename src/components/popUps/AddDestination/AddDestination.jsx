/* eslint-disable react/prop-types */
import "./addDestinationStyle.css"

const AddDestination = ({toggleAddDestination})=> {
    return (
        <div className="background-popUp-addDestination">
            <div
            onClick={toggleAddDestination} 
            className="overlay-addDestination-popUp">
            </div>
                <div className="popUp-addDestination-trip">
                    <form className="form-popUp-addDestination">
                        <label>Place to Visit: </label>
                        <input className="inputs-popUp-addDestination" type="text"></input>
                        <label>Location: </label>
                        <input className="inputs-popUp-addDestination" type="text"></input>
                        <label>Description: </label>
                        <textarea className="textarea-addDestination"></textarea>
                        <label className="uploadImage-popUp-addDestination"
                         htmlFor="input-file"><span 
                         className="text-uploadImage">Upload an Image</span></label>
                        <input id="input-file" style={{display:"none"}} type="file" />
                    </form>
                        <button className="save-destination">SAVE DESTINATION</button>
                </div>

            </div>
        

        )
}


export default AddDestination