import React from "react";
import Meaning from "./Meaning.js";

export default function Definition(props) {
  if (props.data) {
    return (
      <div className="Definition justify-center mt-2 pt-0">
        <h2 id="current-word">
          {props.data.word}
          <p>{props.data.phonetic}</p>
        </h2>
        {props.data.meanings.map(function (definition, index) {
          return (
            <div key={index}>
              <Meaning definition={definition} />
            </div>
          );
        })}
      </div>
    );
  }
}
