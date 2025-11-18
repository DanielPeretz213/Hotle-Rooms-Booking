import React, { SetStateAction } from "react";
import { Room } from "./types";
import { useNavigate, useParams } from "react-router-dom";
import { roomData } from "./roomData";
import { Button, Card, CardMedia } from "@mui/material";

const RoomDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const room: Room | undefined = roomData.find((r) => r.id === Number(id));
  if (!room) return <h1>room is not found </h1>;

  return (
    <div className="roomDetailsContainer">
      <Card className="cardRoomDetails">
        <CardMedia
          component="img"
          image={room.image}
          sx={{ width: "700px", height: "400px", objectFit: "cover" }}
        />

        <div className="nameAndPrice">
          <h1>{room.name}</h1>
          <div className="priceAndReserve">
            <h2>{room.price}$</h2>
            <Button
              variant="contained"
              color="warning"
              onClick={() => navigate(`/payment/${id}`)}
            >
              To order
            </Button>
          </div>
        </div>
        <h3>description</h3>
        <p>{room.description}</p>
      </Card>
    </div>
  );
};

export default RoomDetails;
