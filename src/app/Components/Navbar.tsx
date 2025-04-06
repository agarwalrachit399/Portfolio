// app/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext'; 
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const { theme } = useTheme();
  const logoSrc = theme === 'usc' ? '/USC-main-logo.png' : '/main-logo.png';
  return (
<nav className="flex flex-wrap justify-between items-center px-6 sm:px-12 lg:px-24 py-4 bg-white shadow-md">
  {/* Logo */}
  <div className="flex items-center">
    <Link href="/" passHref>
      <Image
        src={logoSrc}
        alt="Logo"
        width={50}
        height={50}
        className="cursor-pointer"
      />
    </Link>
  </div>

  {/* Navigation Links */}
  <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-0 items-center">
    <Link href="/about" className="text-gray-700 hover:text-primary">
      About Me
    </Link>
    <Link href="/projects" className="text-gray-700 hover:text-primary">
      Projects
    </Link>
    <ThemeSwitcher />

  </div>
</nav>

  );
};

export default Navbar;
