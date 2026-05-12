import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export default function MainLayout() {
  return (
    <div className="font-display min-h-screen text-zinc-100 pt-10">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
