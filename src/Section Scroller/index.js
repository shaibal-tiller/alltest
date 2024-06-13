import React, { useRef } from "react";
import '../index.css';
import useVisible from "./hooks.js";

const ColorCard = ({el,index}) => {
  const elemRef = useRef();
  const isVisible = useVisible(elemRef);
  return (<div className=""
    style={{ height: '50vh', width: '100%', backgroundColor: el, scrollSnapAlign: 'start', paddingTop: '80px' }}>
    <h3>Section{index}</h3>
  </div>)
}

const SectionScroller = () => {
  const sections = ['purple', 'red', 'green', 'yellow', 'pink', 'blue', 'violet']

  return (
    <div className="hello" style={{ scrollSnapType: 'y mandatory', height: '100vh', overflowY: 'scroll' }}>
      {sections.map((el, index) => {
        <ColorCard  el={el} index={index}/>
      })}
    </div>
  );
};
export default SectionScroller;