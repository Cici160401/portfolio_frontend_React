import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About_me from './pages/About_me';
import Projects from './pages/proyectos';
import Categories from './pages/categorias';
import BaseLayout from './layouts/layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About_me />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/categorias" element={<Categories />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;