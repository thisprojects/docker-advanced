import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
      Im some Other Page!
      <Link to="/"> Go Back Home</Link>
    </div>
  );
};

export default OtherPage;
