/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';
import PropTypes from "prop-types";
import api from "../api/api";
// import { useNavigate, useLocation } from "react-router-dom";

const TripsContext = createContext();

const TripsContextProvider = ({ children }) => {
  const [trips, setTrips] = useState({});

//   const navigate = useNavigate()
//   const location = useLocation()

  useEffect(() => {
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
    api
        .get("/trip", config)
        .then((response) => {
          if (response.status === 200) {
            setTrips(response.data);
          }
        })
        .catch((error) => console.error(error));
    }  
  }, []);

  return (
    <TripsContext.Provider value={{ trips }}>
      {children}
    </TripsContext.Provider>
  );
};

TripsContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a node (React element)
};

export default TripsContext;

export { TripsContextProvider };
