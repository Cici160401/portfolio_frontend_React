import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, nombre, descripcion, imagen }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      <Link to={`/proyectos/${id}`}>
        <img
          src={imagen || "https://via.placeholder.com/400x200?text=No+Image"}
          alt={nombre}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{nombre}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{descripcion}</p>
        </div>
      </Link>
    </motion.div>
  );
}