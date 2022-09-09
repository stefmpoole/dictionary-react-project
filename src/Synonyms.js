import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms text-capitalize font-weight-light my-2 list-style: none pl-0">
        {props.synonyms.map(function (synonym, index) {
          return (
            <ListGroup variant="flush" key={index}>
              {synonym}
            </ListGroup>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
