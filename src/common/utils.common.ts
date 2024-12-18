// Modules
import { DateTime } from "luxon";

// Get UTC Timestamp
export const getUtcTimestamp = (): number => {
  return DateTime.utc().toMillis();
};
