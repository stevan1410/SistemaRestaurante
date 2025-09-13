export default function KpiCard({ title, value, hint }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 bg-white">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="text-3xl font-bold mt-1 text-slate-900">{value}</div>
      {hint && <div className="text-xs text-slate-400 mt-2">{hint}</div>}
    </div>
  );
}
