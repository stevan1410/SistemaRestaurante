import AppShell from "../components/AppShell";
import Table from "../components/Table";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const kpis = [
    {
      title: "Ventas hoy",
      value: "$0",
      hint: "Conecta /reports/sales?range=today",
      color: "border-l-[4px] border-teal-400",
      emoji: "💰",
    },
    {
      title: "Órdenes abiertas",
      value: "0",
      hint: "Conecta /orders?status=open",
      color: "border-l-[4px] border-cyan-400",
      emoji: "📦",
    },
    {
      title: "Artículos con stock bajo",
      value: "0",
      hint: "Conecta /inventory?low=true",
      color: "border-l-[4px] border-rose-400",
      emoji: "⚠️",
    },
  ];

  const headers = ["Orden", "Cliente", "Estado", "Total", "Fecha"];
  const rows = [];

  return (
    <AppShell>
      {/* Header con estilo moderno y colores personalizados */}
      <div className="mb-8 rounded-xl shadow-md p-6 bg-gradient-to-r from-deep-blue to-mid-blue text-white">
        <div className="flex items-center gap-3">
          <span className="text-white text-2xl">🧑‍💼</span>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Panel Principal
            </h1>
            <p className="text-xs sm:text-sm text-light-blue">
              Resumen general del sistema
            </p>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-6 md:grid-cols-3 mb-10">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl shadow-md p-5 flex items-start gap-4 ${kpi.color}`}
          >
            <div className="text-3xl">{kpi.emoji}</div>
            <div className="flex-1">
              <p className="text-xs uppercase text-slate-500 font-semibold">
                {kpi.title}
              </p>
              <p className="text-xl font-bold text-slate-900">{kpi.value}</p>
              <p className="text-sm text-slate-500">{kpi.hint}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Acciones rápidas */}
      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <Link
          to="/orders/new"
          className="rounded-xl p-5 border border-slate-200 bg-white hover:shadow-xl transition-transform hover:scale-[1.02] flex gap-4 items-start"
        >
          <div className="text-purple-600 text-2xl">➕</div>
          <div>
            <div className="font-semibold text-slate-800">Nueva orden</div>
            <div className="text-sm text-slate-500">
              Crear pedido al instante
            </div>
          </div>
        </Link>

        <Link
          to="/inventory"
          className="rounded-xl p-5 border border-slate-200 bg-white hover:shadow-xl transition-transform hover:scale-[1.02] flex gap-4 items-start"
        >
          <div className="text-emerald-600 text-2xl">🧾</div>
          <div>
            <div className="font-semibold text-slate-800">Ver inventario</div>
            <div className="text-sm text-slate-500">Stock y productos</div>
          </div>
        </Link>

        <Link
          to="/reports"
          className="rounded-xl p-5 border border-slate-200 bg-white hover:shadow-xl transition-transform hover:scale-[1.02] flex gap-4 items-start"
        >
          <div className="text-fuchsia-600 text-2xl">📊</div>
          <div>
            <div className="font-semibold text-slate-800">Reportes</div>
            <div className="text-sm text-slate-500">Ventas y desempeño</div>
          </div>
        </Link>
      </div>

      {/* Tabla de Órdenes recientes */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Órdenes recientes
          </h2>
          <Link
            to="/orders"
            className="text-sm text-indigo-600 hover:underline"
          >
            Ver todas
          </Link>
        </div>
        <Table headers={headers} rows={rows} />
      </section>
    </AppShell>
  );
}
