import React from "react";
import "./index.css";

const ChipList = props => {
  return (
    <ul className="chip-list">
      {props.chips.map((topic, i) => {
        return <li key={i}> {topic.title.replace('_', ' ')} </li>;
      })}
    </ul>
  );
};

export default ChipList;
