import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/proyectos") // cambia si tu API usa otra ruta
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error al cargar proyectos:", error));
  }, []);

  return (
    <section>
      <h2 className="text-center text-2xl font-bold text-primary mb-2">Proyectos</h2>
      <p className="text-center text-sm text-text mb-6">Proyectos en los que he trabajado 💖</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}