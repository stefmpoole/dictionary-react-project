import "./App.css";
import Dictionary from "./Dictionary";

import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Card>
          <Card.Header style={{ margin: 20 }}>
            <Card.Title>Dictionary</Card.Title>
          </Card.Header>
          <main>
            <Dictionary />
          </main>
        </Card>
        <footer className="App-footer">
          <small>Coded by Stefanie Poole</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
