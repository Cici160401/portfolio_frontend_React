import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-11/12 max-w-xl rounded-2xl bg-white p-5 shadow-2xl"
      >
        <button
          className="absolute right-3 top-3 rounded-full bg-gray-100 px-2 py-1 text-sm hover:bg-gray-200"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full rounded-lg object-cover"
        />

        <h2 className="mt-4 text-2xl font-bold">{project.title}</h2>
        <p className="mt-2 text-gray-700">{project.description}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Ver proyecto
          </a>
        )}
      </motion.div>
    </div>
  );
}
