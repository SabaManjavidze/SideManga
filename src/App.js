import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import { Route, Switch } from "react-router";
import Home from "./components/Pages/HomePage/Home";
import ChapterPage from "./components/Pages/ChapterPage/ChapterPage";
import MangaDetails from "./components/Pages/MangaDetails/MangaDetails";
import OAuth from "./components/Pages/OAuthPage/OAuth";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      <Switch>
        <Route path="/Home" component={Home} exact />
        <Route path="/OAuth" component={OAuth} exact />
        <Route exact path="/Manga/:mangaId" component={MangaDetails} />
        <Route exact path="/Manga/:mangaId/:chap" component={ChapterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
