import Grid from "./components/Grid";
import Rules from "./components/Rules";
import About from "./components/About";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <div className="top-container">
        <Grid />
        <Rules />
      </div>
      <About />
    </div>
  );
}

export default App;
