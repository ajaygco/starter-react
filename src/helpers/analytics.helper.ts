// Modules
import {
  captureEvent as _captureEvent,
  captureException as _captureException,
} from "@sentry/react";

// Capture Exception
export const captureException = (...args: unknown[]): void => {
  // @ts-expect-error
  _captureException(...args);

  // eslint-disable-next-line no-console
  console.error(...args);
};

// Log
export const captureEvent = (...args: unknown[]): void => {
  // @ts-expect-error
  _captureEvent(...args);

  // eslint-disable-next-line no-console
  console.log(...args);
};
