import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigat = useNavigate();
  return (
    <div className="navBarContainer">
      <Button onClick={() => navigat("/")}>Home</Button>
      <Button onClick={() => navigat("/rooms")}>Rooms</Button>
      <Button onClick={() => navigat("/booking")}>Booking</Button>
    </div>
  );
};
export default NavBar;
