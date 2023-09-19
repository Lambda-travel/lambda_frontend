/* eslint-disable react/prop-types */
import "./addDestinationStyle.css";
import { useForm, Controller } from "react-hook-form";
import api from "../../../api/api";
import { storage } from "../../../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";
import Select from "react-select";
import { useState, useEffect } from "react";
import axios from "axios";

const AddDestination = ({ toggleAddDestination, dayId }) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [cities, setCities] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState();

  const getCitiesByCountry = () => {
    setLoading(true);
    const country = localStorage.getItem("lambda_country_trip");
    if (country) {
      let data = {
        country: country,
      };
      axios
        .post("https://countriesnow.space/api/v0.1/countries/cities", data)
        .then((response) => {
          if (response.data.error === false) {
            setCities(
              response.data.data.map((city) => ({ value: city, label: city }))
            );
          }
        })
        .catch((err) => console.error(err));
    }
    setLoading(false);
  };

  useEffect(() => {
    getCitiesByCountry();
  }, []);

  const submitDestination = (data) => {
    // console.log(data);
    const destinationInfo = {...data};
    if (destinationInfo) {
      delete destinationInfo.image;
      api
        .post(`/destination/${dayId}`, destinationInfo)
        .then((response) => {
          if (response.data.destinationId) {
            let destinationId = response.data.destinationId
            // console.log(destinationId);
            // console.log(data);
            Object.keys(data.image).forEach(async (image) => {
              // console.log(data.image[image]);
              const destinationImage = data.image[image];
              const imageRef = ref(storage, `${uuid()}-destination-image`);
              // console.log(destinationImage);
              // console.log(imageRef);
              // console.log(dayId);
              await uploadBytes(imageRef, destinationImage)
                .then(async () => {
                  getDownloadURL(imageRef)
                    .then(async (urlImage) => {
                      // data.image = urlImage;
                      console.log("url",urlImage);
                      console.log("id",destinationId);
                      let imageInfo={
                        destination_id: destinationId,
                        image_url: urlImage
                      }
                      api
                        .post('/destination/images',imageInfo)
                        .then((response) => {
                          console.log("image saved", response);
                        });
                    })
                    .catch((error) => console.error(error));
                })
                .catch((error) => {
                  console.error(error.message, "error getting the image url");
                });
            });
          } else {
            console.warn("Error creating destination")
          }
        })
        .catch((error) => console.error(error));
    }
    toggleAddDestination();
  };

  return (
    <div className="background-popUp-addDestination">
      <div className="overlay-addDestination-popUp"></div>
      <div className="popUp-addDestination-trip">
        <form
          className="form-popUp-addDestination"
          onSubmit={handleSubmit(submitDestination)}
        >
          <label>Place to Visit: </label>
          <input
            placeholder="place to visit"
            type="text"
            className="inputs-popUp-addDestination"
            {...register("place_to_visit", {
              required: "place to visit is required",
            })}
            aria-invalid={errors.place_to_visit ? "true" : "false"}
          />
          {errors.place_to_visit && (
            <p className="style-error-form">{errors.place_to_visit?.message}</p>
          )}
          <label>Location: </label>
          {loading ? (
            <input
              className="inputs-popUp-addDestination"
              placeholder="Loading Cities..."
              readOnly
            />
          ) : (
            <Controller
              className="inputs-popUp-addDestination"
              name="location"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={cities}
                  onChange={(value) => {
                    // console.log(value);
                    setSelectedCity(value);
                    setValue("location", value.label);
                  }}
                  value={selectedCity}
                />
              )}
            />
          )}
          {/* <input
            placeholder="location"
            type="text"
            className="inputs-popUp-addDestination"
            {...register("location", { required: "location is required" })}
            aria-invalid={errors.location ? "true" : "false"}
          /> */}
          {errors.location && (
            <p className="style-error-form">{errors.location?.message}</p>
          )}
          <label>Description: </label>
          <textarea
            placeholder="description"
            type="text"
            className="textarea-addDestination"
            {...register("description", {
              required: "description is required",
            })}
            aria-invalid={errors.description ? "true" : "false"}
          />
          {errors.description && (
            <p className="style-error-form">{errors.description?.message}</p>
          )}
          <label
            className="uploadImage-popUp-addDestination"
            htmlFor="input-file"
          >
            <span className="text-uploadImage">Upload an Image</span>
          </label>
          <input
            id="input-file"
            accept="image/*"
            multiple
            placeholder="Upload an Image"
            type="file"
            {...register("image", {
              required: "image is required",
            })}
            aria-invalid={errors.image ? "true" : "false"}
          />
          {errors.image && (
            <p className="style-error-form">{errors.image?.message}</p>
          )}
          <button type="submit" className="save-destination">
            SAVE DESTINATION
          </button>
          <button
            onClick={() => toggleAddDestination()}
            className="cancel-add-place"
          >
            CANCEL
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDestination;
