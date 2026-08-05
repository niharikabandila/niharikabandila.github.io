import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5">
      <div className="max-w-6xl mx-auto glass rounded-2xl py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold position-absolute pl-4">
            Niharika
            <span className="accent-text">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition position-absolute pr-4"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 glass rounded-xl p-5 max-w-6xl mx-auto">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

    </nav>
  
  );
}

export default Navbar;