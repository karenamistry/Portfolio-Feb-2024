import React from "react";
import { useNavigate } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="subheader fixed top-5 bg-white"
      >
        <ReplyIcon
          style={{
            color: "black",
            marginRight: "2px",
            marginBottom: "6px",
            fontSize: "18px",
          }}
        />
        Back
      </button>
    </div>
  );
};

export default BackButton;
