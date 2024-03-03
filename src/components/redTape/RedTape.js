import React, { useEffect } from "react";
import "./RedTape.css";
import SplitTextJS from "split-text-js";

function RedTape({ title = "hekki" }) {
  useEffect(() => {
  }, []);
  return (
    <div className="redTapcontainer">
      <p
        className="large01 tapeTitle"
        id="tapeTitle"
        style={{ color: "white" }}
      >
        {title}
      </p>
    </div>
  );
}

export default RedTape;
