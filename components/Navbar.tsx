"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${isScrolled ? "shadow-md" : ""
                }`}
        >
            <div className="max-w-[1280px] mx-auto px-6 h-20 md:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/logo.jpg"
                        alt="Briella Eyecare Logo"
                        width={120}
                        height={48}
                        className="h-12 w-auto md:h-12"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-base font-medium transition-colors duration-200 ${pathname === link.href
                                    ? "text-primary border-b-2 border-primary pb-1"
                                    : "text-gray-700 hover:text-secondary"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Call Us Button (Desktop) */}
                <Link
                    href="/contact"
                    className="hidden md:block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3A9D3B] transition-colors duration-200"
                >
                    Call Us
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 text-gray-700"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <div className="px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block text-base font-medium py-2 ${pathname === link.href
                                        ? "text-primary border-l-4 border-primary pl-4"
                                        : "text-gray-700"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full bg-accent text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-[#3A9D3B] transition-colors duration-200"
                        >
                            Call Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
