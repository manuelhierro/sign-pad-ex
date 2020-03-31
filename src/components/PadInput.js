import React from "react";
import "./DesingContainer.css";

const DesignBoard = () => {
  return (
    <div id="colorbox" className="pad-left">
      <button
        id="bt1"
        className="left-bt-color1"
        value="blue"
        draggable="true"
        onDragStart={ev => {
          ev.dataTransfer.setData("color", "blue");
        }}
      >
        Blue
      </button>

      <button
        id="bt2"
        className="left-bt-color1"
        value="red"
        draggable="true"
        onDragStart={ev => {
          ev.dataTransfer.setData("color", "red");
        }}
      >
        Red
      </button>

      <button
        id="bt3"
        className="left-bt-color1"
        value="yellow"
        draggable="true"
        onDragStart={ev => {
          ev.dataTransfer.setData("color", "yellow");
        }}
      >
        Yellow
      </button>
      <br />
    </div>
  );
};
export default DesignBoard;
