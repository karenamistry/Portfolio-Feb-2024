// Example for a case study page, e.g., SupernaOne.js
import React from "react";
import { useNavigate } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";

const SupernaOne = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)} className="fixed top-4 ">
        <ReplyIcon style={{ color: "black", marginRight: "4px" }} />
        Back
      </button>
      <div className="mt-8">
        <h2>Case Study</h2>
        // Your case study content here
      </div>
    </div>
  );
};

export default SupernaOne;
