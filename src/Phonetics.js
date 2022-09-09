import React from "react";
import Button from "react-bootstrap/Button";
import { VolumeUpFill } from "react-bootstrap-icons";

export default function Phonetics(props) {
  return (
    <span className="mr-2 mb-2">
      <Button
        className="rounded-circle pt-0 pl-1 pr-1 pb-1 mr-2 mb-1"
        variant="outline-light"
        size="sm"
      >
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#eb6e4beb", fontSize: 20, margin: 3 }}
        >
          <VolumeUpFill />
        </a>
      </Button>

      {props.phonetics.text}
    </span>
  );
}
