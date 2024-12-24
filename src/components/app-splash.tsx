// Modules
import * as React from "react";

// Common
import { appConfig } from "@/common/configs.common";

// UI
import { Progress } from "@/components/ui/progress";

// Types
interface AppSplashProps {
  progress: number;
}

// Component
export const AppSplash: React.FC<AppSplashProps> = ({
  progress = 0,
}): React.ReactElement => {
  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      <div className="w-48 flex flex-col items-center justify-center">
        <p>{appConfig.appName}</p>

        <Progress value={progress} />
      </div>
    </div>
  );
};
