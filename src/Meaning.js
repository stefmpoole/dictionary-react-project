import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <h5>{props.definition.partOfSpeech}</h5>
      {props.definition.definitions.map(function (define, index) {
        if (index < 1) {
          return (
            <div key={index}>
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
              <br />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
