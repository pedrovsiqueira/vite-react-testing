import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedPage from "./pages/ProtectedPage";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/protected"
        element={
          <ProtectedRoute>
            <ProtectedPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
