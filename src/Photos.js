import React from "react";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <Card className="mt-2 mb-2 pb-3">
        <Card.Header className="text-uppercase mb-3">
          <strong>Images</strong>
        </Card.Header>
        <Row>
          <CardGroup
            className="rounded"
            style={{
              display: "-webkit-inline-flex",
              WebkitJustifyContent: "center",
              marginTop: 2,
            }}
          >
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-sm-3" key={index} style={{ margin: 2 }}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      className="card-img-top rounded img-fluid"
                      src={photo.src.tiny}
                      alt="img"
                    />
                  </a>
                </div>
              );
            })}
          </CardGroup>
        </Row>
      </Card>
    );
  } else {
    return null;
  }
}
