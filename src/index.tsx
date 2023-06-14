import React from "react";
import ReactDOM from "react-dom/client";
import CheckBoxGroup from "./CheckBoxGroup";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const options = Array.from({ length: 10 }).map((v, i) => {
  const label = String.fromCharCode(i + 97).repeat(3);
  return {
    label,
    value:label
  }
})
root.render(
  <CheckBoxGroup options={options} defaultValue={['aaa', 'ccc']}
    onChange={(selectdValues, selectd) => {
      console.log(selectdValues,selectd);
    }} 
  />
);
