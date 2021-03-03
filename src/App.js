import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./components/news/header/Header";
import Topheadline from "./components/news/topheadline/Topheadline";

function App() {
  return (
    <div className="App">
      <h2>React bootstrap</h2>
      <Button variant="success">Success</Button>
      <Header />
      <div className="d-flex">
        <div>
          <Topheadline />
        </div>
      </div>
    </div>
  );
}

export default App;
