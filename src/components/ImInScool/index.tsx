import photo1 from "./../../image/photo1.jpg";
import photo2 from "./../../image/photo2.jpg";
import React from "react";
import "./style.css";
import { Card, Carousel } from "react-bootstrap";
import { CarouselItem } from "./Card.tsx";

export const ImInScool = () => {
  const data = [
    {
      photo: photo1,
      title: "я в старшей школе",
      description: "Эх, когда то я был стройный...",
    },
    {
      photo: photo2,
      title: "я играю в дворовой лиге г.Электросталь",
      description: 'Увы, когда я учился в школе - селфи не делали)'
    },
  ];

  return (
    <div className="im-in-scool">
      <div className="sliderVrap">
        <Carousel>
          {data.map((i) => (
            <Carousel.Item>
              <CarouselItem
                photo={i.photo}
                title={i.title}
                description={i.description}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
