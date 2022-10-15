import "./App.css";
import Dictionary from "./Dictionary";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Card
          className="rounded pl-3 pr-3 pt-2"
          style={{ borderColor: "white" }}
        >
          <h1 className="mb-3">Dictionary</h1>
          <main>
            <Dictionary defaultKeyword="dictionary" />
          </main>
          <footer className="App-footer">
            <small>
              Coded by Stefanie Poole and is {""}
              <a href="https://github.com/stefmpoole/dictionary-react-project">
                open-sourced on GitHub
              </a>
            </small>
          </footer>
        </Card>
      </div>
    </div>
  );
}

export default App;
