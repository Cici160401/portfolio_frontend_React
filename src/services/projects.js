import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // viene de .env

export async function getAllProjects() {
  try {
    const response = await axios.get(`${API_URL}/proyectos/`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener proyectos:", error);
    return [];
  }
}

export async function getProjectById(id) {
  try {
    const response = await axios.get(`${API_URL}/proyectos/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el proyecto ${id}:`, error);
    return null;
  }
}
