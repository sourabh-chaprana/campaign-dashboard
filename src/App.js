import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import
import store from "./root/store";
import Login from "./pages/login";
import MainLayout from "./MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Global.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <Routes> {/* Updated usage */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/dashboard" element={<MainLayout />} />
          <Route path="/" element={<Login />} /> 
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
