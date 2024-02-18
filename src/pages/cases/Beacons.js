import React from "react";
import { useNavigate } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";

const Beacons = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 text-xs bg-black text-white px-1"
      >
        <ReplyIcon
          style={{
            color: "white",
            marginRight: "2px",
            marginBottom: "3px",
            fontSize: "16px",
          }}
        />
        Back
      </button>
      <div className="mt-8 text-sm">
        <h2>Case Study</h2>
        // Your case study content here
      </div>
    </div>
  );
};

export default Beacons;
