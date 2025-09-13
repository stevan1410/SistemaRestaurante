// src/router/guards.jsx

// ⚠️ Modo desarrollo: el guard siempre deja pasar
// Cuando tengas backend + login real, vuelve a activar la validación de token.

export function PrivateRoute({ children }) {
  return children;
}
