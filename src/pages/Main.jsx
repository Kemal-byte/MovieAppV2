import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContextPro } from "../context/AuthContext";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/searchBar/SearchBar";
import Right from "../assets/arrow-20-48.png";
import Left from "../assets/arrow-121-48.png";

import Stack from "@mui/material/Stack";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { userIn } = React.useContext(AuthContextPro);

  if (userIn) {
    let a = localStorage.getItem("user");
    console.log(JSON.parse(a));
  }
  // console.log(userIn);

  const API_KEY = "81e74a5a3eda706f29bc7cfbd9013f25";
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNumber}`;

  useEffect(() => {
    async function getData() {
      try {
        const resp = await fetch(FEATURED_API);
        const data = await resp.json();
        setMovies(data?.results);
        // console.log(data?.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [pageNumber]);

  async function serachMovies(search) {
    let filmName = search.split(" ").join("+");
    try {
      const resp = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${filmName}`
      );
      const data = await resp.json();
      setMovies(data.results);
      // console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Navbar />
      <Container sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
        <SearchBar serachMovies={serachMovies} />
      </Container>
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
      <Box
        sx={{
          padding: 2,
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={4} direction="row">
          <img
            src={Left}
            alt="left"
            style={{ cursor: "pointer" }}
            onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}
          />
          <h3 className="my-auto text-light">{pageNumber}</h3>
          <img
            src={Right}
            alt="right"
            style={{ cursor: "pointer" }}
            onClick={() => setPageNumber(pageNumber + 1)}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Main;
