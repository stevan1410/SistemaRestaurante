const BASE_URL = import.meta.env.VITE_API_URL;

// lee token de localStorage o, si no, de sessionStorage
function getToken() {
  return localStorage.getItem('token') ?? sessionStorage.getItem('token');
}

export async function http(path, { method = 'GET', body, headers } = {}) {
  const token = getToken();
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  let data = null;
  try { data = await res.json(); } catch {}

  if (!res.ok) {
    const message = (data && (data.message || data.error)) || `HTTP ${res.status}`;
    throw { status: res.status, message, data };
  }
  return data ?? {};
}
