import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api", // Ajusta para producción
});

export default API;
