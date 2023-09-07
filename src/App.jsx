//import { Routes,Route } from "react-router-dom";
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
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartJourney />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/trip/overview/:id" element={<OverviewPage />} />
        <Route
          path="/trip/overview/destination-detail"
          element={<DestinationDetail />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newtrip" element={<PlanNewTrip />} />
        <Route path="/travelmate" element={<InviteMate />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
