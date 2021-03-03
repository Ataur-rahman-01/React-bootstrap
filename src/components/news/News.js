import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const News = (props) => {
  const { title, description, urlToImage } = props.news;

  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default News;
