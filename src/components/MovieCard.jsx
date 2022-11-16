import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MovieCard = ({ movies }) => {
  return (
    <>
      {movies.map((item, index) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardMedia
              component="img"
              height="400"
              image={`https://image.tmdb.org/t/p/w1280${item?.poster_path}`}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                align="center"
                variant="p"
                component="div"
                sx={{
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
                sx={{
                  display: "none",
                  "&:hover": {
                    display: "none",
                  },
                }}
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
              <Button size="small" variant="contained">
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
