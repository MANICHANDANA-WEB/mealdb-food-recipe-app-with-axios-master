import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// pages
import { Home, MealDetails, Error, Category } from "./pages/index";
import LoginPage from "./pages/LoginPage/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";

// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>

      {/* Header and Sidebar only after login */}
      {isAuthenticated && (
        <>
          <Header />
          <Sidebar />
        </>
      )}

      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login Page */}
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Protected Home */}
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />

        {/* Meal Details */}
        <Route
          path="/meal/:id"
          element={isAuthenticated ? <MealDetails /> : <Navigate to="/login" />}
        />

        {/* Category */}
        <Route
          path="/meal/category/:name"
          element={isAuthenticated ? <Category /> : <Navigate to="/login" />}
        />

        {/* Error */}
        <Route path="*" element={<Error />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;