import React from "react";
import "./styles.css";

const AsideBar = () => {
  return (
    <aside className="AsideBar">
      <span className="bar"></span>
      <div className="points">
        <div className="point select"></div>
        <div className="point"></div>
        <div className="point"></div>
      </div>
      <span className="bar"></span>
    </aside>
  );
};

export default AsideBar;
