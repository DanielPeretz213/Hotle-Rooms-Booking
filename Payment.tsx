import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface paymentProps {
  order: number[];
  setOrder: Dispatch<SetStateAction<number[]>>;
}

const Payment: React.FC<paymentProps> = ({ order, setOrder }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState<number>(1);
  const [payment, setPayment] = useState<number>(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const hendlerReservClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOrder(order.includes(Number(id)) ? order : [...order, Number(id)]);
    navigate(`/booking`);
  };

  return (
    <div className="paymentCntainer">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box
          sx={{
            width: "50%",
            padding: "10px",
            backgroundColor: "#bf8d47ff",
            borderRadius: "15px",
          }}
        >
          <Paper sx={{ padding: "2rem" }}>
            <h1>booking information </h1>
            <form onSubmit={hendlerReservClick}>
              <TextField
                label="First Name"
                value={firstName}
                margin="normal"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />

              <TextField
                label="last name"
                value={lastName}
                margin="normal"
                required
                onChange={(e) => setLastName(e.target.value)}
              />

              <DatePicker
                label="check-in date"
                value={checkIn}
                onChange={(newValue) => setCheckIn(newValue)}
                slotProps={{ textField: { margin: "normal", required: true } }}
              />

              <DatePicker
                label="check-out date"
                value={checkOut}
                onChange={(newValue) => setCheckOut(newValue)}
                slotProps={{ textField: { margin: "normal", required: true } }}
              />

              <TextField
                label="Email"
                type="email"
                value={email}
                margin="normal"
                required
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                label="Phone number"
                type="tel"
                value={phoneNum}
                margin="normal"
                required
                fullWidth
                onChange={(e) => setPhoneNum(e.target.value)}
              />

              <TextField
                label="Number of guests"
                type="number"
                fullWidth
                margin="normal"
                slotProps={{ htmlInput: { min: 1, max: 10 } }}
                value={guests}
                required
                onChange={(e) => setGuests(Number(e.target.value))}
              />

              <FormControl fullWidth margin="normal" required>
                <InputLabel>payments</InputLabel>
                <Select
                  label="payments"
                  value={String(payment)}
                  onChange={(e: SelectChangeEvent) =>
                    setPayment(Number(e.target.value))
                  }
                >
                  <MenuItem value="1">1 payment</MenuItem>
                  <MenuItem value="2">2 payments</MenuItem>
                  <MenuItem value="3">3 payments</MenuItem>
                  <MenuItem value="5">5 payments</MenuItem>
                  <MenuItem value="10">10 payments</MenuItem>
                </Select>
              </FormControl>

              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                sx={{ marginTop: "1rem" }}
              >
                payment
              </Button>
            </form>
          </Paper>
        </Box>
      </LocalizationProvider>
    </div>
  );
};
export default Payment;
