/* eslint-disable react/prop-types */
import "./addPlace.css"

const AddPlace = ({toggleAdd})=> {


    return (
        <div className="modal">
            <div
            onClick={toggleAdd} 
            className="overlay"> 
            </div>
                <div className="modal-content">

                    <h1 className="title-popUp-add"> Place To Visit</h1>
                        <form className="form-add-place">
                            <label >Place to Visit: </label>
                            <input className="input-place-visit" type="text" ></input>

                            <label>Description: </label>
                            <input className="input-description" type="text"></input>
                        </form>
                        <div className="container-btn-add-place">
                            <button onClick={toggleAdd} className="add-place-visit"> 
                            ADD
                            </button>
                            <button onClick={toggleAdd} className="cancel-add-place"> 
                            Cancel
                            </button>
                        </div>
                </div>

            </div>
        

        )
}


export default AddPlace