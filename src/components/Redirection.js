import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const RedirectButton = ({ path, label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button className="button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default RedirectButton;