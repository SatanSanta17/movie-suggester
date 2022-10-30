import "./App.css";
// import Switch from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/links/home";
import Trending from "./components/links/trending";
import Movies from "./components/links/movies";
import TVShows from "./components/links/tvShows";
import Search from "./components/links/search";
import { Container } from "@mui/system";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-shows" element={<TVShows />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
