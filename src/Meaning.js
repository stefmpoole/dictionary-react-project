import React from "react";
import Synonyms from "./Synonyms";
import Card from "react-bootstrap/Card";

export default function Meaning(props) {
  return (
    <div>
      <Card className="mt-3 mb-3">
        <Card.Header className="text-uppercase">
          <strong>{props.definition.partOfSpeech}</strong>
        </Card.Header>
        <Card.Body>
          {props.definition.definitions.map(function (define, index) {
            if (index < 1) {
              return (
                <span key={index}>
                  {define.definition}
                  <br />
                  <br />
                  <strong>Example:</strong>
                  <br />
                  <em>{define.example}</em>
                  <br />
                  <br />
                  <strong>Synonyms:</strong>
                  <br />
                  <Synonyms synonyms={define.synonyms} />
                  <br />
                </span>
              );
            } else {
              return null;
            }
          })}
        </Card.Body>
      </Card>
    </div>
  );
}
