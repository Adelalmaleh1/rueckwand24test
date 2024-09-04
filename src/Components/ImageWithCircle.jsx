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

  const circleRadius = 10;

  const isOverlapping = (circle1, circle2) => {
    const widthX = circle1.x - circle2.x;
    const heightY = circle1.y - circle2.y;
    const distance = Math.sqrt(widthX * widthX + heightY * heightY);
    return distance < 2 * circleRadius;
  };

  const adjustPosition = (index, x, y) => {
    let newWidthX = x;
    let newHeightY = y;

    circles.forEach((otherCircle, idx) => {
      if (
        idx !== index &&
        isOverlapping({ x: newWidthX, y: newHeightY }, otherCircle)
      ) {
        newWidthX += circleRadius;
        newHeightY += circleRadius;
      }
    });

    return { newWidthX, newHeightY };
  };

  const handleDrag = (index, x, y) => {
    const { newWidthX, newHeightY } = adjustPosition(index, x, y);
    onDrag(index, newWidthX, newHeightY);
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
            onDrag={(e, data) => handleDrag(index, data.x, data.y)}
          >
            <div className="circle"></div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default ImageWithCircle;
