"use client"
import { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    {name: "Home", href: '/'},
    {name: "Services", href: '/Services'},
    {name: "Resume", href: '/resume'},
    {name: "Work", href: '/work'},
    {name: "Contact", href: '/ReachOut'},
  ];

  return (
    <nav className="w-full transition-all duration-300 navpos">
        <div className="flex justify-between items-center px-[8%] 
        lg:px-[8%] py-6">
            <Link href='/' className="text-3xl font-bold font-unbounded
            text-white logo">
                Jay
                <span className="font-unbounded subcol">Pro.</span>
            </Link>

            <div className="flex items-center gap-14">
              <div className="hidden lg:flex n-menu items-center space-x-5">
                {navLinks.map(link => (
                  <Link
                  className={`text-base font-bold transition-all text-white relative px-2 py-2 rounded
                    hovnav ${pathname === link.href ? 'active-links subcol' : ''}`} 
                    key={link.name}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link href="/contact"
              className="bgnav px-5 py-2 text-xl text-white font-semibold cursor-pointer
              transition-all duration-300 shadow-md shadcol">
                Hire Me
              </Link>
            </div>

            <button
            className='lg:hidden text-2xl cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >

              <i className="ri-menu-fill text-white"></i>
            </button>
        </div>

        <div></div>
    </nav>
  )
}