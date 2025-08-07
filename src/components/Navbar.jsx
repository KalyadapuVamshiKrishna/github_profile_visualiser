import { NavLink } from 'react-router-dom';



const Header = () => {
  

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
     <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
  {/* Logo/Title */}
  <h1 className="text-2xl font-bold text-white">
    GitHub Profile Visualizer
  </h1>

  {/* Nav Links */}
  <nav className="flex gap-6 text-sm sm:text-base">
    <NavLink
      to="/"
      className={({ isActive }) =>
        `transition-colors duration-200 hover:text-blue-400 ${
          isActive ? 'text-blue-500 font-semibold' : 'text-white'
        }`
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/repositories"
      className={({ isActive }) =>
        `transition-colors duration-200 hover:text-blue-400 ${
          isActive ? 'text-blue-500 font-semibold' : 'text-white'
        }`
      }
    >
      Repositories
    </NavLink>
    <NavLink
      to="/analysis"
      className={({ isActive }) =>
        `transition-colors duration-200 hover:text-blue-400 ${
          isActive ? 'text-blue-500 font-semibold' : 'text-white'
        }`
      }
    >
      Analysis
    </NavLink>
  </nav>
</div>

    </nav>
  );
};

export default Header;
