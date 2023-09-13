import OverviewPage from "./pages/New-Trip-OverviewPage/OverviewPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import AuthContext from "./contexts/AuthContext";
import UserContext from "./contexts/UserContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<StartJourney />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

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
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/changepassword" element={<ChangePassword />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
