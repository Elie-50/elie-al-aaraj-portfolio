import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="relative min-h-screen font-sans bg-white dark:bg-black overflow-x-hidden">
			<div className="fixed inset-0 pointer-events-none">
				<div className="absolute w-[600px] h-[600px] bg-indigo-500/10 blur-3xl rounded-full top-1/3 left-1/2 -translate-x-1/2" />
			</div>

			<Navbar />

			<main className="relative z-10">{children}</main>

			<Footer />
		</div>
	);
};

export default Layout;
