// src/App.jsx
import { useEffect } from 'react';
import AppRoutes from './router';
import { useAuth } from './store/auth.store';

export default function App() {
  const fetchMe = useAuth((s) => s.fetchMe);
  useEffect(() => { fetchMe(); }, [fetchMe]);
  return <AppRoutes />;
}
