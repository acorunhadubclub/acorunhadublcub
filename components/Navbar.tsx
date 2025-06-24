
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-4">
      <Link href="/">Inicio</Link>
      <Link href="/quienes-somos">¿Qué somos?</Link>
      <Link href="/entradas">Entradas</Link>
      <Link href="/noticias">Noticias</Link>
      <Link href="/eventos">Eventos</Link>
    </nav>
  );
}
