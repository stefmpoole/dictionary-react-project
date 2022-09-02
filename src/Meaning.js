import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h5>{props.definition.partOfSpeech}</h5>
      {props.definition.definitions.map(function (define, index) {
        if (index < 2) {
          return (
            <div key={index}>
              <p>
                {define.definition}
                <br />
                <br />
                <em>{define.example}</em>
              </p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
