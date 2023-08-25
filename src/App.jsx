
//import { Routes,Route } from "react-router-dom";
import OverviewPage from "./pages/New-Trip-OverviewPage/OverviewPage";
import "./App.css"
import { Route, Routes } from "react-router-dom";


function App() {
  return <>
    <Routes>
      <Route path="/home" />
      <Route path="/trip/overview" element={<OverviewPage />} />
    </Routes>
    
  </>;

}

export default App;
