import React from "react";
import "./ProgressBar.css";

export const ProgressBar = () => {
    return (
    <footer>
        <p>Progressie</p>
        <div className="progressBar">
            <div className="progressBarProgress"></div>
        </div>

    </footer>
    );
  };

export default ProgressBar;