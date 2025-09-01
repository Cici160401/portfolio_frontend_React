// src/pages/proyectos.jsx
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { getProjects } from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const ctrl = new AbortController();

    (async () => {
      try {
        setLoading(true);
        const data = await getProjects({ signal: ctrl.signal });
        setProjects(data);
      } catch (e) {
        // Ignorar aborts de React.StrictMode
        if (e?.name === "AbortError") return;
        setError(e?.message || "Error al cargar proyectos");
      } finally {
        setLoading(false);
      }
    })();

    return () => ctrl.abort();
  }, []);

  if (loading) return <div className="p-8 text-center">Cargando…</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <section>
      <h2 className="text-center text-2xl font-bold text-primary mb-2">
        Proyectos
      </h2>
      <p className="text-center text-sm text-text mb-6">
        Proyectos en los que he trabajado 💖
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onClick={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}