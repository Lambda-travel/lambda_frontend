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
import { UserContextProvider } from "./contexts/UserContext.jsx";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<StartJourney />} />
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
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
