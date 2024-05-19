import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/tripsList" Component={TripsList}></Route>
        <Route path="/tripDetail/:tripID" Component={TripDetail}></Route>
      </Routes>
    </div>
  );
}

export default App;
