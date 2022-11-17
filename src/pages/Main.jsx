import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContextPro } from "../context/AuthContext";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const { userIn } = React.useContext(AuthContextPro);
  if (userIn) {
    let a = localStorage.getItem("user");
    console.log(JSON.parse(a));
  }
  console.log(userIn);
  const API_KEY = "81e74a5a3eda706f29bc7cfbd9013f25";
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  useEffect(() => {
    async function getDate() {
      try {
        const resp = await fetch(FEATURED_API);
        const data = await resp.json();
        setMovies(data?.results);
        console.log(data?.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getDate();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "#2c2b2b",
            minHeight: "100vh",
            padding: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
            boxShadow: "1px 8px 25px -2px rgba(148,163,255,0.75)",
          }}
        >
          <MovieCard movies={movies} />
        </Box>
      </Container>
    </>
  );
};

export default Main;
