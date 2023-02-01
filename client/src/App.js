import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home/Home.js';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
      <Route path="/videogames/:id" component={Nav}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/videogames/:id" component={VideogameDetail}/>
    </BrowserRouter>
  );
}

export default App;
