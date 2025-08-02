import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md fixed top-0 w-full shadow-md px-6 py-3 z-50 border-b border-primary">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-lg font-bold text-primary">Cici160401 / Karla Aguilar</h1>
      <div className="space-x-6 text-sm font-semibold">
        <Link to="/" className="hover:text-secondary">Inicio</Link>
        <Link to="/about" className="hover:text-secondary">Sobre mí</Link>
        <Link to="/projects" className="hover:text-secondary">Proyectos</Link>
        <Link to="/categorias" className="hover:text-secondary">Categorías</Link>
    </div>
  </div>
</nav>
  );
}