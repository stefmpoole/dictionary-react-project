import React from "react";
import { VolumeUpFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <Button
        className="rounded-circle pt-0 pl-2 pr-2 pb-1 mr-0 mb-1"
        variant="outline-light"
        size="sm"
      >
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#eb6e4beb", fontSize: 30 }}
        >
          <VolumeUpFill />
        </a>
      </Button>

      {props.phonetics.text}
    </div>
  );
}
