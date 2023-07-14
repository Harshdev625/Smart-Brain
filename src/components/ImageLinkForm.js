import React, { useRef } from "react";

const ImageLinkForm = ({
  onInputChange,
  onButtonSubmit,
  name,
  entries,
  clearImage,
}) => {
  const inputRef = useRef(null);

  const clearInput = () => {
    clearImage();
    inputRef.current.value = "";
  };

  return (
    <div className="container display">
      <div className="container">
        <h3 className="text-style">
          {`${name},Your Current Rank Is`}
          <br />
          <h1>{entries}</h1>
          "This Magic Brain will detect faces in your pictures. Give it a try."
        </h3>
        <div className="container form">
          <input
            ref={inputRef}
            className="search-box"
            type="text"
            onChange={onInputChange}
          />
          <br />
          <button className="detect-box" onClick={onButtonSubmit}>
            Detect
          </button>
          <button className="detect-box" onClick={clearInput}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
