// Component
export const If = ({
  condition,
  renderWhenTrue = null,
  renderWhenFalse = null,
  children = null,
}) => {
  if (children && condition) {
    return children;
  }

  if (condition) {
    return renderWhenTrue;
  }

  return renderWhenFalse;
};
