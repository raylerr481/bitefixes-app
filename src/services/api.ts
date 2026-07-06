import axios from "axios";

// Usamos la URL de tu backend en Render
const api = axios.create({
  baseURL: "https://bitefixes-backend.onrender.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
