// Modules
import * as React from "react";
import { Route, Routes } from "react-router-dom";

// Helpers
import { getSupabase } from "@/helpers/supabase.helper";

// Elements
import { AppSplash } from "@/components/app-splash";

// Types
interface AppRouterProps {}

// Component
export const AppRouter: React.FC<AppRouterProps> = (): React.ReactElement => {
  // State
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [isAppStarting, setIsAppStarting] = React.useState<boolean>(true);
  const [appStartProgress, setAppStartProgress] = React.useState<number>(0);

  // On Auth State Changed
  const onAuthStateChanged = (session: unknown): void => {
    setAppStartProgress(75);
    setIsLoggedIn(!!session);

    setTimeout(() => {
      // Just for the aesthetics
      // setIsAppStarting(false);
    }, 500);
  };

  React.useEffect(() => {
    setIsAppStarting(true);
    setAppStartProgress(25);

    const supabase = getSupabase();

    supabase.auth.getSession().then(({ data: { session } }) => {
      onAuthStateChanged(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      onAuthStateChanged(session);
    });
  }, []);

  if (isAppStarting) {
    return <AppSplash progress={57} />;
  }

  if (isLoggedIn) {
    return (
      <div className="w-dvw h-dvh flex">
        <Routes>
          <Route path="/" element="You are home!" />
        </Routes>
      </div>
    );
  }

  return (
    <div className="w-dvw h-dvh flex">
      <Routes>
        <Route path="/" element="Starter" />
      </Routes>
    </div>
  );
};
