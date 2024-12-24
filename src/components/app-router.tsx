// Modules
import * as React from "react";
import { Route, Routes } from "react-router-dom";

// Types
interface AppRouterProps {}

// Component
export const AppRouter: React.FC<AppRouterProps> = (): React.ReactElement => {
  return (
    <div className="w-dvw h-dvh flex">
      <Routes>
        <Route path="/" element="Starter" />
      </Routes>
    </div>
  );
};
