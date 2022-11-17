import { Container, Box, Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Actors,
  Header,
  IMG,
  Main,
  Overview,
  Tags,
} from "./MovieDetails.styled";
import Chip from "@mui/material/Chip";

const MovieDetail = () => {
  const [details, setDetails] = useState();
  const [cast, setCast] = useState();
  const { state } = useLocation();
  console.log(state);
  const API_KEY = "81e74a5a3eda706f29bc7cfbd9013f25";
  const MovieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${state}?api_key=${API_KEY}`;
  const castDetailsURL = `https://api.themoviedb.org/3/movie/${state}/credits?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    async function getDetails() {
      try {
        const resp = await fetch(MovieDetailBaseUrl);
        const data = await resp.json();
        setDetails(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    async function getCast() {
      try {
        const resp = await fetch(castDetailsURL);
        const data = await resp.json();
        setCast(data.cast);
        console.log(data.cast);
      } catch (error) {
        console.log(error.message);
      }
    }
    getDetails();
    getCast();
  }, []);

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#2c2b2b",
            minHeight: "100vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
            boxShadow: "1px 8px 25px -2px rgba(148,163,255,0.75)",
          }}
        >
          <Main>
            <Header>
              <h1>
                <a href={details?.homepage}>{details?.original_title}</a>
              </h1>
              <div className="d-flex gap-4">
                <div>
                  <h6>I.M.D.B rating</h6>
                  <h6>{details?.vote_average}</h6>
                </div>
                <div>
                  <h6>Relase Date</h6>
                  <h6>{details?.release_date}</h6>
                </div>
              </div>
            </Header>
            <IMG
              src={
                details?.poster_path &&
                `https://image.tmdb.org/t/p/w1280${details.backdrop_path}`
              }
            ></IMG>
            <Tags>
              {details?.genres.map((item, index) => {
                return <Chip label={item.name} color="primary" key={index} />;
              })}
            </Tags>
            <Overview>{details?.overview}</Overview>
            <Actors>
              <h2>Top Cast</h2>
              {cast &&
                cast.slice(0, 6).map((item, index) => {
                  return (
                    <Avatar
                      alt="Remy Sharp"
                      src={`https://image.tmdb.org/t/p/original${item?.profile_path}`}
                      sx={{ width: 56, height: 56 }}
                      key={index}
                    />
                  );
                })}
            </Actors>
          </Main>
        </Box>
      </Container>
    </div>
  );
};

export default MovieDetail;
