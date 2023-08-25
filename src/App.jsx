//import { Routes,Route } from "react-router-dom";
import OverviewPage from "./pages/New-Trip-OverviewPage/OverviewPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import NavBar from "./components/Nav Component/NavBar";
import PlanNewTrip from "./pages/plan-new-trip/PlanNewTrip";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" />
        <Route path="/trip/overview" element={<OverviewPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newtrip" element={<PlanNewTrip />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
