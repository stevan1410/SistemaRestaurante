export default function Table({ headers = [], rows = [] }) {
  if (!rows.length) {
    return (
      <div className="rounded-2xl border border-slate-200 p-6 text-sm text-slate-500 bg-white flex items-center gap-3 shadow-sm">
        <span className="text-xl">🚫</span>
        Sin datos por ahora. Conecta esta sección a la API cuando el backend esté listo.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-sm text-slate-700">
        <thead>
          <tr className="bg-slate-100 text-slate-600 text-xs uppercase tracking-wide">
            {headers.map((header) => (
              <th
                key={header}
                className="px-5 py-4 text-left border-b border-slate-200"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-slate-50 transition-colors duration-150"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-5 py-4 border-b border-slate-100 text-slate-800"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
