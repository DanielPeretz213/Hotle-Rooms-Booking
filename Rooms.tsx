import { Box, Button, Card, CardMedia } from "@mui/material";
import React from "react";
import "./style.css";
import { roomData } from "./roomData";
import { useNavigate } from "react-router-dom";

const Rooms: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://ynet-pic1.yit.co.il/cdn-cgi/image/f=auto,w=740,q=75/picserver5/crop_images/2024/07/22/Hy6SvG3u0/Hy6SvG3u0_0_45_787_443_0_x-large.jpg)",
        backgroundSize: "cover",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1>Our hotel offers a variety of room types with high standards.</h1>
      <div className="listRoomOptions">
        {roomData.map((element) => (
          <Card key={element.id} className="cardRoom">
            <CardMedia
              component="img"
              sx={{
                width: 400,
                height: 300,
                objectFit: "cover",
              }}
              image={element.image}
              alt={element.name}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 1rem",
              }}
            >
              <h2>{element.name}</h2>
              <h2>{element.price}$</h2>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(`/rooms/${element.id}`)}
            >
              More
            </Button>
          </Card>
        ))}
      </div>
    </Box>
  );
};

export default Rooms;
