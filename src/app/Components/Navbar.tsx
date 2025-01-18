// app/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-24 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" passHref>
          <Image
            src="/main-logo.png" // Update with your logo path
            alt="Logo"
            width={50} // Adjust size as needed
            height={50} // Adjust size as needed
            className="cursor-pointer" // Makes the logo clickable
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link href="/about" className="text-gray-700 hover:text-purple-600">
          About Me
        </Link>
        <Link href="/projects" className="text-gray-700 hover:text-purple-600">
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
