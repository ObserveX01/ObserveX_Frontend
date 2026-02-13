import React from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-6 lg:px-12 py-6 max-w-7xl mx-auto w-full'>
      {/* Logo: Fixed href to 'to' */}
      <Link to='/' className='flex items-center gap-2'>
        <div className='bg-obs-mint p-1.5 rounded-lg'>
          <ShieldCheck className='text-obs-dark w-6 h-6' />
        </div>
        <span className='text-2xl font-bold tracking-tight text-white'>
          observe<span className='text-obs-mint'>X</span>
        </span>
      </Link>

      <div className='hidden lg:flex items-center gap-10 text-sm font-medium text-white/90'>
        {["Product", "Who it's for", "Use cases", "Pricing", "Resources"].map((item) => (
          <a key={item} href='#' className='hover:text-obs-mint transition'>
            {item}
          </a>
        ))}
      </div>

      <div className='flex items-center gap-4'>
        <button className='hidden sm:block px-6 py-2.5 text-sm font-bold text-white border border-obs-border bg-obs-border/30 rounded-lg'>
          Login
        </button>

        {/* Sign up Link */}
        <Link
          to='/signup'
          className='px-6 py-2.5 text-sm font-bold text-obs-dark bg-obs-yellow rounded-lg shadow-lg hover:bg-yellow-400 transition-colors'>
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
