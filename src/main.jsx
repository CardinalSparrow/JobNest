import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { JobProvider } from "./Context/JobOpeningContext.jsx";
import { TrackerProvider } from "./Context/ApplicationTrackerContext.jsx";

createRoot(document.getElementById("root")).render(
  <TrackerProvider>
    {" "}
    <JobProvider>
      <App />
    </JobProvider>
  </TrackerProvider>
);
