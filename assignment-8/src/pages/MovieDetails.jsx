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