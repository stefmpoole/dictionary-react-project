import "./App.css";
import Dictionary from "./Dictionary";

import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mb-0">Dictionary</h1>
        <Card
          className="rounded pl-3 pr-3 pt-2"
          style={{ borderColor: "white" }}
        >
          <main>
            <Dictionary defaultKeyword="dictionary" />
          </main>
        </Card>
        <footer className="App-footer">
          <small>
            Coded by Stefanie Poole and is {""}
            <a href="https://github.com/stefmpoole/dictionary-react-project">
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
