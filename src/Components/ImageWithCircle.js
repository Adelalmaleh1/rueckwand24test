import React from "react";
import "../Styling/ImageWithCircle.css";
import wallpaper from "../Images/wallpaper.webp";
import PropTypes from "prop-types";

const ImageWithCircle = (props) => {
  const { width, height } = props;
  ImageWithCircle.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={wallpaper} alt="Background" className="image" />
        <div
          className="circle"
          style={{
            left: `${width}px`,
            top: `${height}px`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImageWithCircle;
