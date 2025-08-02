import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Asegúrate que coincida con tu backend

export async function getAllProjects() {
  try {
    const response = await axios.get(`${API_URL}/proyectos`);
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
