import "./App.css";
import Dictionary from "./Dictionary";

import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mb-3">Dictionary</h1>

        <Card className="rounded">
          <Card.Title
            className="text-white"
            style={{ marginTop: 10, fontSize: 18 }}
          >
            What word do you want to look up?
          </Card.Title>
          <main>
            <Dictionary />
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
