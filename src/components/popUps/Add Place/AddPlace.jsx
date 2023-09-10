/* eslint-disable react/prop-types */
import "./addPlace.css"
import { useForm } from "react-hook-form";
import api from "../../../api/api";

const AddPlace = ({toggleAdd})=> {

        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();
      
      

    const submitPlaceToVisit = (data) => {
        const allDays = JSON.parse(localStorage.getItem("allDays"))
        const tripID = allDays.map((tripID)=>tripID.trip_id)[0]
        console.log(data)
        api
        .post(`trip/place/${tripID}`,data)
        .then((response)=>response)
         .catch((error)=>console.error(error))
       
   
        toggleAdd();
    };
    

    
    return (
        <div className="modal">
            <div
            onClick={toggleAdd} 
            className="overlay"> 
            </div>
                <div className="modal-content">

                    <h1 className="title-popUp-add"> Place To Visit</h1>


                    <form
                    className="form-add-place"
                    onSubmit={handleSubmit(submitPlaceToVisit)}
                    >
                    <label>Place to Visit: </label>
                    <input
                    placeholder="place to visit"
                    type="text"
                    className="input-place-visit"
                    {...register("name", {
                    required: "place to visit is required",
                    })}
                    aria-invalid={errors.place_to_visit ? "true" : "false"}
                    />
                    {errors.name && <p className="style-error-place-to-visit">{errors.name?.message}</p>}
                    <label>Description: </label>
                    <input
                    placeholder="description"
                    type="text"
                    className="input-description"
                    {...register("description", {
                    required: "description is required",
                    })}
                    aria-invalid={errors.description ? "true" : "false"}
                    />
                    {errors.description && <p className="style-error-form">{errors.description?.message}</p>}
                    <div className="container-btn-add-place">
                            <button type="submit" className="add-place-visit"> 
                            ADD
                            </button>
                            <button onClick={()=>toggleAdd()} className="cancel-add-place"> 
                            Cancel
                            </button>
                    </div>
                </form>


                </div>

            </div>
        
        )
}


/*

                        <form className="form-add-place">
                            <label >Place to Visit: </label>
                            <input className="input-place-visit" type="text" ></input>

                            <label>Description: </label>
                            <input className="input-description" type="text"></input>
                        </form>


*/

export default AddPlace