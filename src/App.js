import './App.css';
import Homepage from './homepage';
import ReactGA from "react-ga4";

ReactGA.initialize('G-6RQBG4STV7');

ReactGA.send({ hitType: "pageview", page: "/", title: "Home page" });

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
