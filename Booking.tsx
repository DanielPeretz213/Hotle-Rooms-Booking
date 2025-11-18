import { Box, Button, Card, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { roomData } from "./roomData";
import { Room } from "./types";
import "./style.css";

interface bookingProps {
  order: number[];
  setOrder: React.Dispatch<React.SetStateAction<number[]>>;
}

const Booking: React.FC<bookingProps> = ({ order, setOrder }) => {
  const [noRooms, setNoRooms] = useState<boolean>(false);
  const [amountToPay, setAmountToPay] = useState<number>(0);

  const fillterRooms: Room[] = roomData.filter((room) =>
    order.includes(room.id)
  );

  useEffect(() => {
    if (order.length === 0) {
      setNoRooms(true);
      setAmountToPay(0);
    } else {
      setNoRooms(false);
      let sum: number = fillterRooms.reduce((acc, elem) => acc + elem.price, 0);
      setAmountToPay(sum);
    }
  }, [order, fillterRooms]);

  return (
    <div>
      <Box
        sx={{
          backgroundImage:
            "url(https://media.reshet.tv/image/upload/v1676445944/uploads/2023/903430410.jpg)",
          display: "flex",
          flexDirection: "column",
          backgroundSize: "cover",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1>Your Booking Summary</h1>

        <div className="roomsForBooking">
          {noRooms ? (
            <h1>No Room Selected</h1>
          ) : (
            fillterRooms.map((room) => (
              <Card key={room.id} className="cardRoom">
                <CardMedia
                  component="img"
                  image={room.image}
                  alt={room.name}
                  sx={{
                    width: "400px",
                    height: "300px",
                    backgroundSize: "cover",
                  }}
                />
                <div className="nameAndPrice">
                  <h2>{room.name}</h2>
                  <h2>{room.price}$</h2>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setOrder(order.filter((r) => r !== room.id))}
                >
                  delete
                </Button>
              </Card>
            ))
          )}
        </div>
        <h1>total payable {amountToPay}</h1>
        <Button variant="contained" color="success">
          Proceed to Payment
        </Button>
      </Box>
    </div>
  );
};

export default Booking;
