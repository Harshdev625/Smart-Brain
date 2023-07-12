import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit, name, entries }) => {
  return (
    <div className="container display">
      <div className="container">
        <h3>
          {`${name},Your Current Rank Is`}
          <br />
          {entries}
          <br />
          "This Magic Brain will detect faces in your pictures. Give it a try."
        </h3>
        <div className="container form">
          <input className="search-box" type="text" onChange={onInputChange} />
          <button className="detect-box" onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
