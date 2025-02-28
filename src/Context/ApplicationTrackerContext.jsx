import { createContext, useContext, useState } from "react";

const TrackerContext = createContext();
export const useTrackerContext = () => {
  return useContext(TrackerContext);
};
export const TrackerProvider = ({ children }) => {
  const [isJobseeker, setIsJobSeeker] = useState(null);
  const handleDropDownChange = (e) => {
    if (e.target.value === "applied") {
      setIsJobSeeker(true);
    } else if (e.target.value === "posted") {
      setIsJobSeeker(false);
    }
  };
  return (
    <TrackerContext.Provider value={{ isJobseeker, handleDropDownChange }}>
      {children}
    </TrackerContext.Provider>
  );
};
