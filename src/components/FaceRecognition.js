import React from "react";

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <div className="face">
      {imageURL && (
        <div className="face-container">
          <img
            id="inputimage"
            className="face-container-img"
            alt="SearchImage"
            src={imageURL}
          />
          {Array.isArray(box) &&
            box.map((faceBox, index) => (
              <div
                key={index}
                className="face-bounding-box"
                style={{
                  top: faceBox.topRow,
                  right: faceBox.rightCol,
                  bottom: faceBox.bottomRow,
                  left: faceBox.leftCol,
                }}
              ></div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FaceRecognition;
