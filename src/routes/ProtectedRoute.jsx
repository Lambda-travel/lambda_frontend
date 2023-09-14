/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectPath = "/login" }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;