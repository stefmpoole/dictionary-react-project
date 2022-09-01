import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition...`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="Dictionary">
      <Form onSubmit={search}>
        <InputGroup className="mb-3" onChange={handleKeywordChange}>
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
        </InputGroup>
      </Form>
    </div>
  );
}
