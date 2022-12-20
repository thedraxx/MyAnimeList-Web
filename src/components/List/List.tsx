import React, { Component } from "react";
import Slider from "react-slick";
import { Datum } from "../../interfaces/AnimeRec";
import { Button, ImageList } from "./Style";
import { useNavigate } from 'react-router-dom';

export interface Anime {
  Anime: Datum[]
}

const List = ({ Anime }: Anime) => {
  const navigate = useNavigate();
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
    <div>
      <Slider {...settings}>
        {Anime.map((anime) => (
          <div key={anime.mal_id}>
            <Button onClick={() => navigate("/Anime", {
              state: {
                anime: anime.mal_id
              }

            })}>
              <ImageList src={anime.images.webp.large_image_url} alt={anime.title} />
            </Button>
          </div>
        ))
        }
      </Slider >
    </div >
  );
}

export default List