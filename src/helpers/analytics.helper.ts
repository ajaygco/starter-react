// Capture Exception
export const captureException = (...args: unknown[]): void => {
  // eslint-disable-next-line no-console
  console.error(...args);
};

// Log
export const captureEvent = (...args: unknown[]): void => {
  // eslint-disable-next-line no-console
  console.log(...args);
};
