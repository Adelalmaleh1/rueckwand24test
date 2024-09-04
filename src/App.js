import React, { useState } from "react";
import ImageWithCircle from "./Components/ImageWithCircle";
import ControlPanel from "./Components/ControlPanel";
import "./Styling/App.css";

const App = () => {
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);

  return (
    <div className="app">
      <ImageWithCircle width={width} setHeight={setHeight} />
      <ControlPanel
        width={width}
        height={height}
        setWidth={setWidth}
        setHeight={setHeight}
      />
    </div>
  );
};

export default App;
