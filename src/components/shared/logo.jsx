// Modules
import React from "react";

// Common
import { appConfig } from "@/common/configs.common";

// Component
export const Logo = (props) => {
  return <span {...props}>{appConfig.appName}</span>;
};
