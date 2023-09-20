/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import api from "../api/api";
import axios from "axios";

const TripsContext = createContext();

const TripsContextProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  const fetchTrips = (config) =>{
    api
    .get("/trip", config)
    .then((response) => {
      if (response.status === 200) {
        setTrips(response.data);
      }
    })
    .catch((error) => console.error(error));
  }

  useEffect(() => {
    const token = Cookies.get("user_token");
    
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
     
      fetchTrips(config)

      axios
        .get(
          "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
        .then((response) => {
          setCountries(response.data.countries);
          setSelectedCountry(response.data.userSelectValue);
        });
    }
  }, []);

  return (
    <TripsContext.Provider
      value={{
        trips,
        setTrips,
        countries,
        selectedCountry,
        setSelectedCountry,
        fetchTrips
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};

TripsContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a node (React element)
};

export default TripsContext;

export { TripsContextProvider };
