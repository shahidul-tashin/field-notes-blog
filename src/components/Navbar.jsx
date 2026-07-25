import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `font-mono text-xs uppercase tracking-widest ${
    isActive ? 'text-primary border-b-2 border-primary' : 'text-base-content/70 hover:text-primary'
  } pb-1`

export default function Navbar() {
  return (
    <div className="px-4 border-b navbar bg-base-100 border-base-300 md:px-10">
      <div className="flex-1">
        <NavLink to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-semibold">Field Notes</span>
          <span className="hidden stamp text-primary sm:inline-block">est. 2026</span>
        </NavLink>
      </div>

      {/* Desktop nav */}
      <div className="items-center hidden gap-6 md:flex">
        <NavLink to="/" end className={linkClass}>Home new</NavLink>
        <NavLink to="/blog" className={linkClass}>Blog</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
      </div>

      {/* Mobile dropdown */}
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 border border-base-300 rounded-box w-40 font-mono text-xs uppercase tracking-widest">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
