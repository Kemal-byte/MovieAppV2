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
import Fragman from "../components/Fragman";
import Caraousel from "../components/Caraousel";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Review from "../components/reviews/Review";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

const MovieDetail = () => {
  const [details, setDetails] = useState();
  const [cast, setCast] = useState();
  const [video, setVideo] = useState();
  const { state } = useLocation();
  console.log(state);

  const API_KEY = "81e74a5a3eda706f29bc7cfbd9013f25";
  const MovieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${state}?api_key=${API_KEY}`;
  const castDetailsURL = `https://api.themoviedb.org/3/movie/${state}/credits?api_key=${API_KEY}&language=en-US`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${state}/videos?api_key=${API_KEY}`;

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
    async function getVideo() {
      try {
        const resp = await fetch(videoUrl);
        const data = await resp.json();
        setVideo(data.results[0].key);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    getDetails();
    getCast();
    getVideo();
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
              <div>
                <h1>
                  <a href={details?.homepage}>{details?.original_title}</a>
                </h1>
                <p className="font-weight-light">{details?.tagline}</p>
              </div>
              <div className="d-flex gap-4 font-weight-bold">
                <div className="text-warning">
                  <h6>I.M.D.B rating</h6>
                  <h6>{details?.vote_average}</h6>
                </div>
                <div className="text-warning">
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
              <hr />
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                {cast &&
                  cast.slice(0, 6).map((item, index) => {
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src={`https://image.tmdb.org/t/p/original${item?.profile_path}`}
                          sx={{ width: 100, height: 100 }}
                          key={index}
                        />
                        <p>{item?.name}</p>
                      </Box>
                    );
                  })}
              </Box>
            </Actors>
            <Actors>
              <h2>Production Companies</h2>
              <hr />
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                {details?.production_companies.map((item, index) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={`https://image.tmdb.org/t/p/original${item?.logo_path}`}
                        sx={{ width: 100, height: 100 }}
                        key={index}
                      />
                      <p>{item?.name}</p>
                    </Box>
                  );
                })}
              </Box>
            </Actors>
            <Actors>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  justifyContent: "flex-start",
                }}
              >
                <LiveTvIcon
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    marginBottom: "8px",
                  }}
                />
                <h2>Videos</h2>
              </Box>
              <hr />
              {video && <Fragman video={video} />}
            </Actors>
            <Actors>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  justifyContent: "flex-start",
                }}
              >
                <CameraAltOutlinedIcon
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    marginBottom: "8px",
                  }}
                />
                <h2>Photos</h2>
              </Box>
              <hr />

              {<Caraousel movieId={state} />}
            </Actors>
            <Actors>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  justifyContent: "flex-start",
                }}
              >
                <RateReviewOutlinedIcon
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    marginBottom: "8px",
                  }}
                />
                <h2>Reviews</h2>
              </Box>
              <hr />
              <Review movieId={state} />
            </Actors>
          </Main>
        </Box>
      </Container>
    </div>
  );
};

export default MovieDetail;
