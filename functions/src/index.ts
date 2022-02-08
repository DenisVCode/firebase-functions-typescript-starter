import { analysisFunction } from "./analysis.function.js";
import { functions } from "./firebase/firebase.js";

/**
 * Trigger a function with an HTTP request.
 */
export const httpFunction = functions.https.onRequest((request, response) => {
  return analysisFunction(request, response);
});

// Add here other functions.
