import { Card, Carousel } from "react-bootstrap";
import React from "react";

interface ICarouselItem {
  photo: any;
  title: string;
  description: string;
}

export const CarouselItem = ({ photo, title, description }: ICarouselItem) => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={photo} className="aaa"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      <Carousel.Caption></Carousel.Caption>
    </div>
  );
};
