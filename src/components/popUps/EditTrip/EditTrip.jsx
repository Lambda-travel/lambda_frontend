/* eslint-disable react/prop-types */
import { useForm, Controller } from "react-hook-form";
import "./editTrip.css";
import { storage } from "../../../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Select from "react-select";
import TripsContext from "../../../contexts/TripsContext";

const EditTrip = ({ toggleEditTrip, defaultDestination }) => {
  const [loading, setLoading] = useState(false);
  const allDays = JSON.parse(localStorage.getItem("allDays"));
  const tripID = allDays.map((tripID) => tripID.trip_id)[0];

  const { countries, selectedCountry, setSelectedCountry } =
    useContext(TripsContext);

  // const [validation, setValidation] = useState("");

  const reload = useNavigate();

  useEffect(() => {
    setSelectedCountry(defaultDestination);
  }, []);

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
  } = useForm();

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [error, setError] = useState();
  const startDate = watch(["start_date"]);
  const endDate = watch(["end_date"]);
  const imageUpload = watch(["trip_image_url"]);

  useEffect(() => {
    if (endDate && startDate) {
      if (endDate[0]?.length > 0 && startDate[0]?.length > 0) {
        if (endDate < startDate) {
          setError("End date should not be earlier that the Start date");
        } else {
          setError(null);
        }
      }
    }
  }, [endDate, startDate]);

  const editInfoTrip = (data) => {
    setLoading(true);
    if (data.tripName !== "" && data.destination) {
      data.destination = data.destination + " - " + data.tripName;
      delete data.tripName;
    }
    if (data.tripName === "") {
      delete data.tripName;
    }
    if (data.destination === "") {
      delete data.destination;
    }
    if (data.end_date === "") {
      delete data.end_date;
    }
    if (data.start_date === "") {
      delete data.start_date;
    }
    if (data.trip_image_url?.length === 0) {
      delete data.trip_image_url;
    }

    if (data.trip_image_url !== undefined && data.trip_image_url[0]) {
      const destinationImage = data.trip_image_url[0];
      const imageRef = ref(storage, `${uuid()}-trip-image`);

      uploadBytes(imageRef, destinationImage)
        .then(() => {
          getDownloadURL(imageRef)
            .then((urlImage) => {
              data.trip_image_url = urlImage;
              api
                .put(`/trip/edit/${tripID}`, data)
                .then((response) => response)
                .catch((error) => console.error(error));
            })
            .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));
    } else {
      api
        .put(`/trip/edit/${tripID}`, data)
        .then((response) => response)
        .catch((error) => console.error(error));
    }
   
   
    setTimeout(() => {
      setLoading(false);
      toggleEditTrip();
      reload(0);
    }, 3000);
  };

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="background-popUp-Edit">
          <div onClick={toggleEditTrip} className="overlay-edit-popUp"></div>
          <div className="popUp-edit-trip">
            <h1 className="title-edit-trip-popup">Edit Trip</h1>

            <form
              className="form-popUp-edit"
              onSubmit={handleSubmit(editInfoTrip)}
            >
              <label htmlFor="destination">Destination:</label>
              <div className="divInput">
                <Controller
                  className="inputField"
                  name="destination"
                  control={control}
                  defaultValue={defaultDestination}
                  placeholder="e.g., Japan, Paris, Indonesia"
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={countries}
                      onChange={(value) => {
                        setSelectedCountry(value);
                        setValue("destination", value.label);
                      }}
                      value={selectedCountry}
                    />
                  )}
                />
              </div>
              <label htmlFor="tripName">Trip Name:</label>

              <input
                {...register("tripName")}
                name="tripName"
                className="inputs-popUp-edit"
                type="text"
                placeholder="e.g. Exploring"
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
                onBlur={(e) => (e.target.type = "text")}
              />
              <label htmlFor="end_date">End Date:</label>
              <input
                {...register("end_date")}
                name="end_date"
                className="inputs-popUp-edit"
                type="text"
                placeholder="e.g. 17 Aug 2023"
                min={startDate[0] ? startDate[0] : getCurrentDate()}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
              {error && error.length > 0 ? (
                <p className="required">{error}</p>
              ) : null}

              <label
                className="uploadImage-popUp-addDestination"
                htmlFor="input-file"
              >
                <span className="text-uploadImage">
                  {imageUpload[0] && imageUpload[0][0]
                    ? imageUpload[0][0].name
                    : "Upload an Image"}
                </span>
              </label>
              <input
                id="input-file"
                accept="image/*"
                type="file"
                {...register("trip_image_url")}
              />
              <div className="container-buttons-popUp-edit">
                <button type="submit" className="add-place-visit">
                  ADD
                </button>
                <button onClick={toggleEditTrip} className="cancel-add-place">
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTrip;
