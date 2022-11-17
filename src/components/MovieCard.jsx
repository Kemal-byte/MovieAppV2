import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./MovieCard.css";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Score = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  transform: translate(20px, -20px);
  background-color: #d14949;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 600;
  top: 0;
  right: 0;
  content: "A";
`;

const MovieCard = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <>
      {movies.map((item, index) => {
        return (
          <Card
            key={index}
            sx={{
              overflow: "visible",
              position: "relative",
              maxWidth: 345,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Score>{item.vote_average}</Score>
            <CardMedia
              component="img"
              height="400"
              image={`https://image.tmdb.org/t/p/w1280${item?.poster_path}`}
              alt="green iguana"
            />
            <CardContent
              sx={{ position: "absolute", left: "0px", width: "100%" }}
            >
              <Typography
                gutterBottom
                align="center"
                variant="p"
                component="div"
                className="info"
                sx={{
                  position: "absolute",
                  align: "center",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                {item?.original_title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="info"
                sx={{ position: "absolute", color: "white" }}
              >
                {item?.overview}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                size="small"
                variant="contained"
                sx={{ minWidth: "104px" }}
              >
                Share
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() => navigate("/detail", { state: item.id })}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default MovieCard;
