import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader_parent">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
