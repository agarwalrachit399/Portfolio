import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-24 py-4">
      <div className="text-purple-600 font-bold">
        &copy; 2025 Rachit Agarwal
      </div>
      <div className="flex space-x-6">
        <a
          href="https://github.com/agarwalrachit399"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rachit-agarwal-90266918b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Image
            src="/linkedin.svg"
            alt="LinkedIn"
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://public.tableau.com/app/profile/rachit.agarwal3124/vizzes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Image
            src="/tableau.svg"
            alt="Tableau"
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://instagram.com/_.rachit.agarwal._"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Image
            src="/instagram.svg"
            alt="Instagram"
            width={32}
            height={32}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

