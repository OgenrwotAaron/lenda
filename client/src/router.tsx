import * as React from "react";
import { Routes, Route } from "react-router-dom";
import AppRouter from "./app/router";
import AppAdmin from "./admin";

const Router: React.FC = () => (
  <Routes>
    <Route path="/admin/*" element={<AppAdmin />} />
    <Route path="*" element={<AppRouter />} />
  </Routes>
);

export default Router;
