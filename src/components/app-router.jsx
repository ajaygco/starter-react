// Modules
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import { Home } from "@/components/pages/home/home";

// Component
export const AppRouter = () => {
  return (
    <div className="w-dvw h-dvh flex">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
