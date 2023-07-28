import React, { useRef, useState } from "react";
import Alert from "./Alert";

const ImageLinkForm = ({
  onInputChange,
  onButtonSubmit,
  name,
  entries,
  clearImage,
}) => {
  const inputRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);

  const clearInput = () => {
    clearImage();
    inputRef.current.value = "";
  };

  const handleButtonSubmit = () => {
    if (!inputRef.current.value) {
      setShowAlert(true);
    } else {
      onButtonSubmit();
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="container display">
      <div className="container">
        <h3 className="text-style">
          {`${name},Your Current Rank Is`}
          <br />
          <p className='rank-count'>#{entries}</p>
          <p>"This Magic Brain will detect faces in your pictures. Give it a try."</p>
        </h3>
        <div className="container form">
          <input
            ref={inputRef}
            className="search-box"
            type="text"
            onChange={onInputChange}
            placeholder='Enter the Image Link Address'
          />
          <br />
          <button className="detect-box" onClick={handleButtonSubmit}>
            Detect
          </button>
          <button className="detect-box" onClick={clearInput}>
            Clear
          </button>
        </div>
      </div>
      {showAlert && (
        <Alert
          message="Please enter the image link address."
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
};

export default ImageLinkForm;
