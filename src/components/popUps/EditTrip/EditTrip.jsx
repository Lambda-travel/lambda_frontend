/* eslint-disable react/prop-types */
import "./editTrip.css"

const EditTrip = ({toggleEditTrip})=> {


    return (
        <div className="background-popUp-Edit">
            <div
            onClick={toggleEditTrip} 
            className="overlay-edit-popUp">

            </div>
                <div className="popUp-edit-trip">
                    <h1>Edit Trip</h1>
                    <form className="form-popUp-edit">
                        <label>Trip Name: </label>
                        <input className="inputs-popUp-edit" type="text"></input>
                        <label>Date: </label>
                        <input className="inputs-popUp-edit" type="date"></input>
                        <input className="inputs-popUp-edit" type="date"></input>
                        <label className="uploadImage-popUp-edit" htmlFor="input-file">Upload an Image</label>
                        <input id="input-file" style={{display:"none"}} type="file" />
                    </form>
                    <div className="container-buttons-popUp-edit">
                        <button className="add-place-visit">ADD</button>
                        <button className="cancel-add-place">CANCEL</button>
                    </div>
                </div>

            </div>
        

        )
}


export default EditTrip