// Modules
import * as React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import { Home } from "@/components/pages/home/home";

// Types
interface AppRouterProps {}

// Component
export const AppRouter: React.FC<AppRouterProps> = (): React.ReactElement => {
  return (
    <div className="w-dvw h-dvh flex">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
