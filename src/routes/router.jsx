import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error-page";
import ApiTestPage from "../pages/api-test-page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<ApiTestPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
