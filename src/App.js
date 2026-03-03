import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// pages
import { Home, MealDetails, Error, Category } from "./pages/index";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

        {/* Login Route */}
        <Route 
          path="/login" 
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} 
        />

        <Route 
          path="/signup" 
          element={<SignupPage />} 
        />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <>
                <Header />
                <Sidebar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/meal/:id" element={<MealDetails />} />
                  <Route path="/meal/category/:name" element={<Category />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;