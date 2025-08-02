import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function BaseLayout() {
  return (
    <div className="bg-background min-h-screen text-text font-sans">
      <Navbar />
      <main className="pt-20 px-4 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}