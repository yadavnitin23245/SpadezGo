import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Globe, HelpCircle, UserCircle2, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold">SpadezGo</Link>
          <div className="hidden md:flex space-x-6">
            <button className="hover:opacity-80 flex items-center">
              Ride <ChevronDown className="ml-1" size={16} />
            </button>
            <button className="hover:opacity-80">Drive</button>
            <button className="hover:opacity-80 flex items-center">
              Business <ChevronDown className="ml-1" size={16} />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="hidden md:flex items-center space-x-2 hover:opacity-80">
            <Globe size={20} />
            <span>EN</span>
          </button>
          <button className="hidden md:flex items-center space-x-2 hover:opacity-80">
            <HelpCircle size={20} />
            <span>Help</span>
          </button>
          <Link to="/login" className="flex items-center space-x-2 hover:opacity-80">
            <UserCircle2 size={20} />
            <span>Login</span>
          </Link>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}