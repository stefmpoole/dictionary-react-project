import React from "react";
import Card from "react-bootstrap/Card";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics";

export default function Definition(props) {
  if (props.data) {
    return (
      <div className="Definition mt-1 pt-0">
        <div>
          {props.data.phonetics.map(function (phonetics, index) {
            if (index < 1) {
              return (
                <Card border="0 mt-1 mb-0 pb-0" key={index}>
                  <h3 className="mt-2 mb-0 pb-0 text-capitalize">
                    {props.data.word}
                  </h3>
                  <Phonetics phonetics={phonetics} />
                </Card>
              );
            } else {
              return null;
            }
          })}
        </div>
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
