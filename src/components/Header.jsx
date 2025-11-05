import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center relative">
      <h1 className="text-xl font-bold">Shamsher Ali | DevOps Engineer</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <a href="#skills" className="hover:text-yellow-400">Skills</a>
        <a href="#projects" className="hover:text-yellow-400">Projects</a>
        <a href="#certifications" className="hover:text-yellow-400">Certifications</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </nav>

      {/* Mobile Menu Toggle */}
      <button onClick={toggleMenu} className="md:hidden text-2xl">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col items-start p-4 space-y-2 z-50 md:hidden">
          <a href="#skills" onClick={toggleMenu} className="hover:text-yellow-400">Skills</a>
          <a href="#projects" onClick={toggleMenu} className="hover:text-yellow-400">Projects</a>
          <a href="#certifications" onClick={toggleMenu} className="hover:text-yellow-400">Certifications</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-yellow-400">Contact</a>
        </div>
      )}
    </header>
  );
}
