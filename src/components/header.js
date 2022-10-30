import React from "react";
import "./css/header.css";
function header() {
  return (
    <div onClick={() => window.scroll(0, 0)} className="header">
      &#127909; Movie Finder &#127916;
    </div>
  );
}

export default header;
