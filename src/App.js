import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import
import store from "./root/store";
import Login from "./pages/login";
import MainLayout from "./MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Global.css'
import DashboardCard from "./pages/dashboard";
import NewCampaign from "./pages/NewCampaign/Sections/NewCampaign";
import CreateCampaign from "./components/stepper";
import AnalyticsPage from "./pages/analytics";
import CampaignList from "./pages/campaignList";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <Routes> {/* Updated usage */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/" element={<Login />} /> 

          <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardCard />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/campaign-list" element={<CampaignList />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
