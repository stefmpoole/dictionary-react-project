import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms text-capitalize my-2 list-style: none pl-0">
        {props.synonyms.map(function (synonym, index) {
          return (
            <ListGroup variant="flush" key={index}>
              similar : {synonym}
            </ListGroup>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
