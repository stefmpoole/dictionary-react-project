import "./App.css";
import Dictionary from "./Dictionary";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <Card
        className="rounded pl-3 pr-3 pt-2"
        style={{ borderColor: "white" }}
        id="card"
      >
        <h1 className="mb-3 text-white">Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          <small class="text-white">
            Coded by Stefanie Poole and is {""}
            <a href="https://github.com/stefmpoole/dictionary-react-project">
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </Card>
    </div>
  );
}

export default App;
