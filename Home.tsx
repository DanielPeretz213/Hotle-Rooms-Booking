import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigat = useNavigate();
  return (
    <div>
      <Box
        sx={{
          backgroundImage:
            "url(https://www.israelhayom.co.il/wp-content/uploads/2025/07/06/06/%D7%A1%D7%90%D7%9E%D7%A8-%D7%A7%D7%90%D7%9E%D7%A4-%D7%91%D7%9E%D7%9C%D7%95%D7%9F-%D7%92%D7%9C%D7%99%D7%9C%D7%95%D7%9F-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%99%D7%97%D7%A6-2-1920x960.jpg)",
          backgroundSize: "cover",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          gap: "15px",
        }}
      >
        <h1>Welcome to the King David Hotel</h1>
        <Button variant="contained" onClick={() => navigat("/rooms")}>
          View Rooms
        </Button>
        <Button variant="contained" onClick={() => navigat("/booking")}>
          Booking
        </Button>
      </Box>
    </div>
  );
};

export default Home;
