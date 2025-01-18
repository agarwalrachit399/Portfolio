// app/layout.tsx
import './globals.css'; // Make sure to import your global styles
import Navbar from './Components/Navbar'; // Import the Navbar component
import Footer from './Components/Footer';

export const metadata = {
  title: 'Rachit Agarwal - Software Developer',
  description: 'Portfolio showcasing my projects and skills.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Include Navbar here */}
        <main>{children}</main>
        <Footer/>
      </body>
     
    </html>
  );
};

export default Layout;
