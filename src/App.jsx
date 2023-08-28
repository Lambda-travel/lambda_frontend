//import { Routes,Route } from "react-router-dom";
import OverviewPage from "./pages/New-Trip-OverviewPage/OverviewPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import NavBar from "./components/Nav Component/NavBar";
import PlanNewTrip from "./pages/PlanNewTrip/PlanNewTrip";
import StartJourney from "./pages/StartJourney/StartJourney";
import InviteMate from "./pages/InviteMate/InviteMate";
import ItineraryPage from "./pages/New-trip-Itinerary/ItineraryPage";
import DestinationDetail from "./pages/Destination-Detail/DestinationDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<StartJourney />} />
        <Route path="/trip/overview" element={<OverviewPage />} />
        <Route path="/trip/itinerary" element={<ItineraryPage />} />
        <Route path="/trip/itinerary/destination-detail" element={<DestinationDetail/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newtrip" element={<PlanNewTrip />} />
        <Route path="/travelmate" element={<InviteMate />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
