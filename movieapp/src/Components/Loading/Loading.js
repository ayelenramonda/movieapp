import {  CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "10px auto",
  borderColor: "violet",
  width: "30px",
  heigth: "30px" 
};

function Loading() {
  

  return (
    <div className="sweet-loading">
      

      <ClipLoader cssOverride={override} size={30} />
    </div>
  );
}

export default Loading;