import React from "react";
import "../styles/suggestion_styles.css";

const Suggestion = props => {
  function pad(number, size) {
    var s = String(number);
    while (s.length < (size || 2)) {
      s = "0" + s;
    }
    return s;
  }

  let paddedUuid = pad(props.uuid, 3);

  return (
    <div className="suggestionDiv" onClick={() => props.updateUuid(props.uuid)}>
      <img
        src={`https://s3.us-east-2.amazonaws.com/fashovapictures/${paddedUuid}_1.jpg`}
        style={{
          height: "50px",
          width: "40px",
          float: "left",
          marginRight: "10px"
        }}
      />
      <p>{props.name}</p>
      <p style={{ fontWeight: "bold" }}>{props.price}</p>
    </div>
  );
};

export default Suggestion;
