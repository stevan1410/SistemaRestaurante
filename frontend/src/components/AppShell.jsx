import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../store/auth.store";

export default function AppShell({ children }) {
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[240px_1fr] bg-[#E0E1DD] text-[#0D1B2A]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col justify-between p-4 bg-[#0D1B2A] text-[#E0E1DD]">
        <div>
          <Link to="/" className="block text-lg font-semibold mb-6">
            ERP Restaurante
          </Link>
          <nav className="space-y-1 text-sm">
            <Item to="/" label="Salpicadero" />
            <Item to="/orders" label="Órdenes" />
            <Item to="/inventory" label="Inventario" />
            <Item to="/reports" label="Reportes" />
          </nav>
        </div>

        <button
          onClick={logout}
          className="mt-4 w-full border border-[#415A77] text-[#E0E1DD] py-2 rounded-md text-sm hover:bg-[#415A77] transition"
        >
          Cerrar sesión
        </button>
      </aside>

      {/* Main content */}
      <div className="flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-14 flex items-center justify-between px-6 bg-[#0D1B2A] text-[#E0E1DD] sticky top-0 z-10 shadow-sm border-b border-[#1B263B]/60">
          <div className="text-sm">
            Hola, <span className="font-semibold">{user?.name || "Usuario"}</span>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 md:p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}

function Item({ to, label }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `block rounded-lg px-3 py-2 transition font-medium ${
          isActive
            ? "bg-[#415A77] text-white"
            : "hover:bg-[#1B263B] text-[#E0E1DD]"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
