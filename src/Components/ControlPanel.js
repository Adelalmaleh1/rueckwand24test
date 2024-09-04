import React from "react";
import "../Styling/ControlPanel.css";
import PropTypes from "prop-types";

const ControlPanel = (props) => {
  const { width, height, setWidth, setHeight } = props;

  ControlPanel.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    setWidth: PropTypes.func.isRequired,
    setHeight: PropTypes.func.isRequired,
  };

  return (
    <div className="control-panel-container">
      <div className="control-panel">
        <div className="circle-distance">
          <label>Distance for Circle</label>
          <div className="input-row">
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              placeholder="x"
              className="input-field"
            />
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              placeholder="y"
              className="input-field"
            />
          </div>
        </div>

        <div className="material-selection">
          <label>Material Selection</label>
          <div className="material-list">
            <input
              type="text"
              placeholder="Material 1"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Material 2"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Material 3"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Material 4"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Material 5"
              className="input-field"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
