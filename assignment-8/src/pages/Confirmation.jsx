import React from "react";
import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  if (!state) return <div className="p-4">No booking data found.</div>;

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2>Seat Booked Successfully!</h2>
      <p><strong>Booking ID:</strong> #{state.bookingId}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>
    </div>
  );
}