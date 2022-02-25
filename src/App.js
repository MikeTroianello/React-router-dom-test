import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import FoodList from "./components/FoodList";
import FoodDetails from "./components/FoodDetails";

import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <header
        style={{
          backgroundColor: "lightgrey",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/foodlist">All Foods</Link>
        <Link to="/profile/Johnny">Johnny's profile</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/foodlist" element={<FoodList />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
