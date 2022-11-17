import React, { useEffect, useState } from "react";

const Caraousel = ({ movieId }) => {
  const [img, setImg] = useState([]);
  const [id, setId] = useState(movieId);
  console.log(`Movie id is ` + id);

  const API = `https://api.themoviedb.org/3/movie/${id}/images?api_key=81e74a5a3eda706f29bc7cfbd9013f25`;

  useEffect(() => {
    async function getImages() {
      try {
        const resp = await fetch(API);
        const data = await resp.json();
        setImg(data.backdrops);
        console.log(img);
      } catch (error) {
        console.log(error.message);
      }
    }
    getImages();
  }, []);
  console.log(img);
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={
                img &&
                `https://image.tmdb.org/t/p/original/${img[0]?.file_path}`
              }
              alt="First slide"
            />
          </div>
          {img &&
            img.slice(1, 7).map((item, index) => {
              return (
                <div class="carousel-item" key={index}>
                  <img
                    class="d-block w-100"
                    src={`https://image.tmdb.org/t/p/original${item?.file_path}`}
                    alt="Second slide"
                  />
                </div>
              );
            })}
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Caraousel;
