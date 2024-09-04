import React, { useState } from "react";
import ImageWithCircle from "./Components/ImageWithCircle";
import ControlPanel from "./Components/ControlPanel";
import "./Styling/App.css";

const App = () => {
  const [circles, setCircles] = useState([{ x: 0, y: 0 }]);

  const setCirclePosition = (index, axis, value) => {
    setCircles((prevCircles) =>
      prevCircles.map((circle, i) =>
        i === index ? { ...circle, [axis]: value } : circle
      )
    );
  };

  const addCircle = () => {
    setCircles((prevCircles) => [...prevCircles, { x: 0, y: 0 }]);
  };

  const onDrag = (index, x, y) => {
    setCirclePosition(index, "x", x);
    setCirclePosition(index, "y", y);
  };

  return (
    <div className="app">
      <ImageWithCircle circles={circles} onDrag={onDrag} />
      <ControlPanel
        circles={circles}
        setCirclePosition={setCirclePosition}
        addCircle={addCircle}
      />
    </div>
  );
};

export default App;
