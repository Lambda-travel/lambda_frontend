/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import "./editTrip.css";
import {storage} from "../../../services/firebase"
import { ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";


const EditTrip = ({toggleEditTrip})=> {
    const [loading,setLoading] = useState(false)
    const allDays = JSON.parse(localStorage.getItem("allDays"))
    const tripID = allDays.map((tripID)=>tripID.trip_id)[0]
    const [validation,setValidation] = useState("")

    const reload = useNavigate()

    const {
        register,
        handleSubmit,

      } = useForm();

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, "0");
        const day = today.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

      const handleChange = (event) => {
        event.target.type = "text"
        setValidation(event.target.value);
      };
  



  const editInfoTrip =(data)=>{

    //! Prevent fetch API info if don't have values
          if(data.destination == "" &&
            data.end_date == "" &&
            data.start_date == "" &&
            data.trip_image_url.length == 0){
              return alert("Don't have Updates")
            }
            setLoading(true)
           if(data.destination == ""){
                 delete data.destination
             }if(data.end_date == ""){
                 delete data.end_date
             }if(data.start_date == ""){
                 delete data.start_date
             }if (data.trip_image_url.length == 0){
                 delete data.trip_image_url
             }


         if(data.trip_image_url !== undefined && data.trip_image_url[0] ){

           const destinationImage = data.trip_image_url[0]
           const imageRef = ref(storage,`${uuid()}-trip-image`)
     
     
           uploadBytes(imageRef, destinationImage)
           .then(()=>{
              getDownloadURL(imageRef)
             .then((urlImage)=>{
              data.trip_image_url = urlImage
              api
              .put(`/trip/edit/${tripID}`,data)
               .then((response)=> response)
        
        
             })
             .catch((error)=> console.log(error))
           })
            .catch((error)=>console.log(error) )
         } else {
             api
             .put(`/trip/edit/${tripID}`,data)
             .then((response)=> response)
         }

         setTimeout(() => {
         toggleEditTrip()
             reload(0)
           }, 3000);
    }

    return (
          <>
            {loading ? (
             <div className="loader-container">
              <div className="spinner"></div>
            </div>
            ):(
        <div className="background-popUp-Edit">
            <div
            onClick={toggleEditTrip} 
            className="overlay-edit-popUp">

            </div>
                <div className="popUp-edit-trip">
                    <h1 className="title-edit-trip-popup">Edit Trip</h1>


            <form className="form-popUp-edit" onSubmit={handleSubmit(editInfoTrip)}>
                <label htmlFor="destination">Trip Name:</label>
                <input
                    {...register("destination")}
                    onChange={handleChange}
                    name="destination"
                    className="inputs-popUp-edit"
                    type="text"
                    placeholder="e.g., Japan, Paris, Indonesia"
                />

          <label htmlFor="start_date">Start Date:</label>
          <input
            {...register("start_date")}
            name="start_date"
            className="inputs-popUp-edit"
            type="text"
            placeholder="e.g. 10 Aug 2023 "
            min={getCurrentDate()}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={handleChange}
            />
          <label htmlFor="end_date">End Date:</label>
          <input
            {...register("end_date")}
            name="end_date"
            className="inputs-popUp-edit"
            type="text"
            placeholder="e.g. 17 Aug 2023"
            min={getCurrentDate()}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={handleChange}
          />
            <label
            onClick={()=>setValidation("Action")}
            className="uploadImage-popUp-addDestination"
            htmlFor="input-file"
          >
            <span  className="text-uploadImage">Upload an Image</span>
          </label>
                <input
                    id="input-file"
                    accept="image/*"
                    multiple
                    placeholder="Upload an Image"
                    type="file"
                    {...register("trip_image_url")}
                />
                    <div className="container-buttons-popUp-edit">
                      {validation !== "" ?
                      <button type="submit" className="add-place-visit">ADD</button>
                      :
                      <button disabled className="add-place-visit-disabled">ADD</button>}
                      
                        <button onClick={toggleEditTrip} className="cancel-add-place">CANCEL</button>
                    </div>
                    </form>
                </div>
                
            </div>)}
            </>
        )
}

export default EditTrip