import Image from 'next/image';
import GithubSVG from './SVG/GithubSVG';
import InstaSvg from './SVG/InstaSVG';
import LinkedinSvg from './SVG/LinkedInSVG';
import TableauSVG from './SVG/TableauSVG';


const Footer = () => {
  return (
<footer className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12 lg:px-24 py-4 space-y-4 sm:space-y-0">
  <div className="text-primary font-bold text-center sm:text-left">
    &copy; 2025 Rachit Agarwal
  </div>

  <div className="flex space-x-4 sm:space-x-6">
    <a
      href="https://github.com/agarwalrachit399"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80"
    >
      <GithubSVG width={32} height={32} className='text-primary' />

    </a>
    <a
      href="https://www.linkedin.com/in/rachit-agarwal-90266918b/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80"
    >
      <InstaSvg width={32} height={32} className='text-primary' />
    </a>
    <a
      href="https://public.tableau.com/app/profile/rachit.agarwal3124/vizzes"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80"
    >
      <TableauSVG width={32} height={32} className='text-primary' />
    </a>
    <a
      href="https://instagram.com/_.rachit.agarwal._"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80"
    >
      <LinkedinSvg width={32} height={32} className='text-primary' />
    </a>
  </div>
</footer>

  );
};

export default Footer;

