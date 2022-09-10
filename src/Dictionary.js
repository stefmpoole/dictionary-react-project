import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "./Dictionary.css";
import Definition from "./Definition";
import Button from "react-bootstrap/Button";
import { Book } from "react-bootstrap-icons";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [defintion, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f9170000100000171b244f108514ee89b85692e1cc7fddf";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="submitForm mb-3">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-outline pt-1 mb-2" id="location-form">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Dictionary"
                  aria-label="Dictionary"
                  aria-describedby="basic-addon2"
                  autoComplete="off"
                  autoFocus="on"
                  id="search-text-input"
                  onChange={handleKeywordChange}
                />
                <div className="input-group-append">
                  <Button
                    className="rounded ml-2"
                    style={{
                      color: "white",
                      backgroundColor: "#eb6e4beb",
                      borderColor: "white",
                      margin: 1,
                    }}
                    type="Submit"
                    id="search-button"
                    value="search"
                    onChange={handleKeywordChange}
                  >
                    <Book />
                  </Button>
                </div>
              </div>
            </Form.Group>
            <Definition data={defintion} />
          </Form>
        </div>
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
