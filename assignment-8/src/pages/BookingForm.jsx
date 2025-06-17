import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(100000 + Math.random() * 900000);
    navigate("/confirmation", { state: { ...formData, bookingId } });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <h2>Booking for Movie {id}</h2>
      <input name="name" placeholder="Name" required onChange={handleChange} className="w-full border p-2" />
      <input name="email" placeholder="Email" required type="email" onChange={handleChange} className="w-full border p-2" />
      <input name="mobile" placeholder="Mobile" required type="tel" onChange={handleChange} className="w-full border p-2" />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white">Submit</button>
    </form>
  );
}