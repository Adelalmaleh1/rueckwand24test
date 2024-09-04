import React from "react";
import "../Styling/ImageWithCircle.css";
import wallpaper from "../Images/wallpaper.webp";
import PropTypes from "prop-types";
import Draggable from "react-draggable";

const ImageWithCircle = (props) => {
  const { circles, onDrag } = props;

  ImageWithCircle.propTypes = {
    circles: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      })
    ).isRequired,
    onDrag: PropTypes.func.isRequired,
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={wallpaper} alt="Background" className="image" />

        {circles.map((circle, index) => (
          <Draggable
            key={index}
            position={{ x: circle.x, y: circle.y }}
            bounds="parent"
            onDrag={(e, data) => onDrag(index, data.x, data.y)}
          >
            <div className="circle"></div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default ImageWithCircle;
