'use client';

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <ul className="flex justify-center flex-wrap gap-4">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 bg-white shadow hover:bg-purple-100 hover:text-purple-600 transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
