import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-15">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
