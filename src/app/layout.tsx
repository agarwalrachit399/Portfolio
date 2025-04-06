// app/layout.tsx
'use client';
import './globals.css'; // Make sure to import your global styles
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './Components/Navbar'; // Import the Navbar component
import Footer from './Components/Footer';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
      <ThemeProvider> 
        <Navbar /> {/* Include Navbar here */}
        <main>{children}</main>
        <Footer/>
      </ThemeProvider> 
      </body>
     
    </html>
  );
};

export default Layout;
