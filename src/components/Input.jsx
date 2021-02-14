import React from "react";

function Input({ onChange, error, type, name, defaultValue, placeholder }) {
  return (
    <div>
      <input
        id="in1"
        type={type}
        value={defaultValue}
        name={name}
        className="inputBox"
        onChange={onChange}
        placeholder={placeholder}
      />

      {error !== "" && (
        <center>
          <div className="alert alert-danger inputBox" role="alert">
            {error}
          </div>
        </center>
      )}
    </div>
  );
}
export default Input;
