import React from "react";
import "../Styling/ControlPanel.css";
import PropTypes from "prop-types";

const ControlPanel = (props) => {
  const { circles, setCirclePosition, addCircle } = props;

  ControlPanel.propTypes = {
    circles: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      })
    ).isRequired,
    setCirclePosition: PropTypes.func.isRequired,
    addCircle: PropTypes.func.isRequired,
  };

  return (
    <div className="control-panel-container">
      <div className="control-panel">
        {circles.map((circle, index) => (
          <div key={index} className="circle-distance">
            <label>Distance for Circle {index + 1}</label>
            <div className="input-row">
              <input
                type="number"
                value={circle.x}
                onChange={(e) =>
                  setCirclePosition(index, "x", Number(e.target.value))
                }
                placeholder="x"
                className="input-field"
              />
              <input
                type="number"
                value={circle.y}
                onChange={(e) =>
                  setCirclePosition(index, "y", Number(e.target.value))
                }
                placeholder="y"
                className="input-field"
              />
            </div>
          </div>
        ))}

        <button onClick={addCircle} className="add-circle-button">
          Add Circle
        </button>
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
