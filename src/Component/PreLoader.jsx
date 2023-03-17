import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";

export default function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader fixed-bottom">
      <div className="texts-container">
        <span>Loading.</span>
        <span>Loading.</span>
        <span>Loading.</span>
      </div>
    </div>
  );
}
