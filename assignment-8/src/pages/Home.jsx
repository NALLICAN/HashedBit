import React from "react";
import { Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Oppenheimer",
    image: "https://upload.wikimedia.org/wikipedia/en/3/36/Oppenheimer_%28film%29.jpg"
  },
  {
    id: 2,
    title: "Interstellar",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  },
  {
    id: 3,
    title: "Inception",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg"
  },
  {
    id: 4,
    title: "The Batman",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Batman_Poster.jpg"
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
  },
  {
    id: 6,
    title: "Jawan",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e3/Jawan_film_poster.jpg"
  },
  {
    id: 7,
    title: "RRR",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
  },
  {
    id: 8,
    title: "Pathaan",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Pathaan_film_poster.jpg"
  },
  {
    id: 9,
    title: "Dune",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg"
  },
  {
    id: 10,
    title: "The Dark Knight",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg"
  },
  {
    id: 11,
    title: "Jailer",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4b/Jailer_film_poster.jpg"
  },
  {
    id: 12,
    title: "Animal",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f4/Animal_film_poster.jpg"
  },
  {
    id: 13,
    title: "12th Fail",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e3/12th_Fail_film_poster.jpg"
  },
  {
    id: 14,
    title: "KGF Chapter 2",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d5/K.G.F_Chapter_2.jpg"
  },
  {
    id: 15,
    title: "Leo",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Leo_2023_poster.jpg"
  },
  {
    id: 16,
    title: "Don",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Don_2022_poster.jpg"
  }
];

export default function Home() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", padding: "1rem" }}>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`} style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center", textDecoration: "none", color: "black" }}>
          <img src={movie.image} alt={movie.title} style={{ width: "100%", height: "auto", maxHeight: "300px", objectFit: "cover" }} />
          <h3>{movie.title}</h3>
        </Link>
      ))}
    </div>
  );
}