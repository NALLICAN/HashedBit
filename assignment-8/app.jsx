// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import Confirmation from "./pages/Confirmation";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

// pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const movies = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
  image: `https://via.placeholder.com/150?text=Movie+${i + 1}`,
}));

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`} className="border p-2 text-center">
          <img src={movie.image} alt={movie.title} />
          <h3 className="mt-2">{movie.title}</h3>
        </Link>
      ))}
    </div>
  );
}

// pages/MovieDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <h2>Movie Details - Movie {id}</h2>
      <img src={`https://via.placeholder.com/300?text=Movie+${id}`} alt={`Movie ${id}`} />
      <p className="mt-4">Some details about Movie {id}...</p>
      <button onClick={() => navigate(`/book/${id}`)} className="mt-4 px-4 py-2 bg-blue-500 text-white">
        Book Seat
      </button>
    </div>
  );
}

// pages/BookingForm.jsx
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

// pages/Confirmation.jsx
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