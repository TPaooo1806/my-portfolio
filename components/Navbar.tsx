import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-tight text-white transition-colors hover:text-blue-400"
          >
            ThaiBao
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-gray-400">
            <Link href="#projects" className="transition-colors hover:text-white">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}