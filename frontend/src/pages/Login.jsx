// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth.store";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stay, setStay] = useState(false);
  const [err, setErr] = useState("");
  const loading = useAuth((s) => s.loading);
  const login = useAuth((s) => s.login);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const ok = await login(email, password, { persist: stay });
      if (ok) {
        if (stay) localStorage.setItem("remember", "1");
        navigate("/");
      }
    } catch (e) {
      setErr(e.message || "Credenciales inválidas");
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1740&q=80')]">
      {/* Capa oscura + blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl bg-white/10 shadow-2xl backdrop-blur-xl p-8 ring-1 ring-white/20 transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl">
          {/* Título */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
              ERP Restaurante
            </h1>
            <p className="text-sm text-white mt-1">
              Bienvenido de nuevo, inicia sesión.
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="text-sm text-white block mb-1">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md bg-white/20 text-white placeholder-white/70 px-3 py-2 border border-white/30 outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-500 shadow-sm transition"
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="text-sm text-white">
                  Contraseña
                </label>
                <Link
                  to="/forgot"
                  className="text-xs text-cyan-200 hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md bg-white/20 text-white placeholder-white/70 px-3 py-2 border border-white/30 outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-500 shadow-sm transition"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-white">
              <input
                id="stay"
                type="checkbox"
                checked={stay}
                onChange={(e) => setStay(e.target.checked)}
                className="accent-cyan-500"
              />
              <label htmlFor="stay">Mantener sesión por una semana</label>
            </div>

            {err && (
              <p role="alert" className="text-red-300 text-sm text-center">
                {err}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !email || !password}
              className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold text-base tracking-wide py-2 rounded-md transition hover:brightness-110 active:scale-[0.99] disabled:opacity-50"
            >
              {loading ? "Iniciando..." : "Iniciar sesión"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
