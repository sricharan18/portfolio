import './App.css';
import Homepage from './homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactGA from "react-ga4";

ReactGA.initialize('G-6RQBG4STV7');

ReactGA.send({ hitType: "pageview", page: "/", title: "Home page" });

function App() {
  return (
    // <div className="App">
    //   <Homepage />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
