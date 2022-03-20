import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const Colors = () => {
  const { location, setIsColorsOpen, tasks, setTasks } = useGlobalContext();
  const colorsRef = useRef(null);

  useEffect(() => {
    const { top, right } = location;
    colorsRef.current.style.left = `${right + 30}px`;
    colorsRef.current.style.top = `${top - 20}px`;
  }, [location]);

  const changeColor = (e) => {
    const color = e.target.style.backgroundColor;
    const { id } = location;
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, color: color } : task;
      })
    );
    setIsColorsOpen(false);
  };

  return (
    <div ref={colorsRef} className="color-container">
      <span style={{ backgroundColor: "#F38181" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#FCE38A" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#FFE2E2" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#CADEFC" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#99DDCC" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#769FCD" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#CABBE9" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#798777" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#F8EDE3" }} onClick={changeColor}></span>
    </div>
  );
};

export default Colors;
