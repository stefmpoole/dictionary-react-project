import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics";

export default function Definition(props) {
  if (props.data) {
    return (
      <div className="Definition justify-center mt-2 pt-0">
        <h2 id="current-word">
          {props.data.word}
          {props.data.phonetics.map(function (phonetics, index) {
            if (index < 1) {
              return (
                <div key={index}>
                  <Phonetics phonetics={phonetics} />
                </div>
              );
            } else {
              return null;
            }
          })}
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
