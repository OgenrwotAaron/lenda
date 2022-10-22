import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import {
  Home,
  Login,
  Profile,
  Requests,
  SignUp,
  Transactions,
  Request,
  Onboarding
} from "./pages";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/requests/:id" element={<Request />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
