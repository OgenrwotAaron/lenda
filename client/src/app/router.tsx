import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, SignUp } from "./pages";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default AppRouter;
