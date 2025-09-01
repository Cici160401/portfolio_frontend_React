// src/services/api.js
const BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

if (!BASE) {
  console.error(
    "❌ ERROR: La variable VITE_API_URL no está definida o no se está leyendo.\n" +
    "Asegúrate de tener un archivo .env en la raíz del frontend con:\n" +
    'VITE_API_URL=https://crud-api-rest-with-fastapi.onrender.com'
  );
}

// Adaptador: convierte el objeto del backend a lo que necesita la UI.
function adaptProjects(data) {
  let i = 0;
  return (Array.isArray(data) ? data : []).map((p) => ({
    id: p.id ?? p.proyecto_id ?? ++i,
    title: p.title ?? p.titulo ?? p.nombre ?? "Proyecto",
    description: p.description ?? p.descripcion ?? "",
    image: p.image ?? p.imagen ?? p.image_url ?? "/images/placeholder.jpg",
    link: p.url_demo ?? p.demo_url ?? p.repo_url ?? p.github ?? null,
    raw: p, // por si luego quieres leer más campos en el modal
  }));
}

export async function getProjects({ signal } = {}) {
  console.log("📡 Llamando a:", `${BASE}/proyectos/`);

  const res = await fetch(`${BASE}/proyectos/`, {
    method: "GET",
    headers: { Accept: "application/json" },
    signal,
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`Error ${res.status} al obtener proyectos: ${msg}`);
  }

  const data = await res.json();
  return adaptProjects(data);
}
