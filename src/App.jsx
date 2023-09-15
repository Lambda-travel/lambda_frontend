import OverviewPage from "./pages/New-Trip-OverviewPage/OverviewPage";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import PlanNewTrip from "./pages/PlanNewTrip/PlanNewTrip";
import StartJourney from "./pages/StartJourney/StartJourney";
import InviteMate from "./pages/InviteMate/InviteMate";
import DestinationDetail from "./pages/Destination-Detail/DestinationDetail";
import HomePage from "./pages/Home-Page/HomePage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import ListItinerary from "./components/ListItinerary/ListItinerary/ListItinerary";
import PlacesToVisit from "./components/PlacesToVisit/PlacesToVisit";
import Register from "./pages/Register/Register";
import Login from "./pages/LogIn/Login";

import ChangePassword from "./components/ChangePassword/ChangePassword";
import EditProfile from "./pages/EditProfilePage/EditProfile";

import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";

import AuthContext from "./contexts/AuthContext";
import UserContext from "./contexts/UserContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useContext } from "react";
import NavBarMobile from "./components/NavBar/NavBarMobile";
import NavbarDesktop from "./components/NavBar/NavBarDesktop";

function App() {
  const { user } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);

  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ||
      location.pathname === "/register" ||
      location.pathname === "/login" ||
      location.pathname.includes("overview") ||
      location.pathname.includes("itinerary") ? null : (
        <NavBarMobile />
      )}
      {location.pathname === "/" ||
      location.pathname === "/register" ||
      location.pathname === "/login" ||
      location.pathname === "/forgot-password" ||
      location.pathname.includes("overview") ||
      location.pathname.includes("itinerary") ? null : (
        <NavbarDesktop />
      )}
      <Routes>
        <Route path="/" element={<StartJourney />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />

        <Route
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={isAuthenticated && user}
            />
          }
        >
          <Route path="/home" element={<HomePage />} />
          <Route path="/trip/:id" element={<OverviewPage />}>
            <Route path="overview" element={<PlacesToVisit />} />
            <Route path="itinerary" element={<ListItinerary />} />
          </Route>
          <Route
            path="/overview/destination-detail/:id"
            element={<DestinationDetail />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newtrip" element={<PlanNewTrip />} />
          <Route path="/travelmate" element={<InviteMate />} />

          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/editPage" element={<EditProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
