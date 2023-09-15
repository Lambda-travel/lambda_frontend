/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';
import PropTypes from "prop-types";
import api from "../api/api";
import { useNavigate, useLocation } from "react-router-dom";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      api
        .get("/users", config)
        .then((response) => {
          if (response.status === 200) {
            setUser(response.data);
            if(location.pathname === "/"){
              navigate("/home")
            } else {
              navigate(location.pathname)
            }
          }
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a node (React element)
};

export default UserContext;

export { UserContextProvider };
