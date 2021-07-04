import "./App.css";
import Header from "./components/header";
import Body from "./components/index";

// Whole app is divided in two sections - header and body

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
