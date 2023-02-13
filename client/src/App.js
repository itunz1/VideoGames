import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from './components/Home/Home.js';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';
import Carousel from './components/Carousel/Carousel';
import Layout from './components/Layout/Layout';

function App() {

  const location = useLocation()

  return (
    <Layout location={location}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/videogame/:id" element={<VideogameDetail/>} />
        <Route path="/car" element={<Carousel/>} />
      </Routes>
  </Layout>
  );
}

export default App;
