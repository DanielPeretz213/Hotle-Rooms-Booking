import React, { useEffect, useState } from "react";
import Rooms from "./Rooms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import RoomDetails from "./RoomDetails";
import NotFoundPage from "./NotFoundPage";
import Booking from "./Booking";
import Payment from "./Payment";
import NavBar from "./NavBar";

const AppHRB: React.FC = () => {
  const [order, setOrder] = useState<number[]>(() => {
    const saved = localStorage.getItem("order");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route
          path="/booking"
          element={<Booking order={order} setOrder={setOrder} />}
        />
        <Route
          path="/payment/:id"
          element={<Payment order={order} setOrder={setOrder} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppHRB;
