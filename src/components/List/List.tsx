import React, { Component } from "react";
import Slider from "react-slick";
import { Datum } from "../../interfaces/AnimeRec";
import { Button, DivList, ImageList, TitleAnime } from "./Style";
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
    responsive:[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ],
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
    <>
      <Slider {...settings}>
        {Anime.map((anime) => (
          <DivList key={anime.mal_id}>
            <Button onClick={() => navigate("/Anime", {
              state: {
                anime: anime.mal_id
              }

            })}>
              <ImageList src={anime.images.webp.large_image_url} alt={anime.title} />
              <TitleAnime>{anime.title.substring(0,50).concat('...')}</TitleAnime>
            </Button>
          </DivList>
        ))
        }
      </Slider >
    </ >
  );
}

export default List