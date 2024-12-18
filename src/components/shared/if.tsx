// Modules
import * as React from "react";

// Types
interface IfProps {
  condition: any;
  renderWhenTrue: any;
  renderWhenFalse: any;
  children: any;
}

// Component
export const If: React.FC<IfProps> = ({
  condition,
  renderWhenTrue,
  renderWhenFalse,
  children,
}): any => {
  if (children && condition) {
    return children;
  }

  if (condition) {
    return renderWhenTrue;
  }

  return renderWhenFalse;
};
