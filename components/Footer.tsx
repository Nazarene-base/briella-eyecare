import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-primary text-white">
            <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-6 md:pt-16 md:pb-6">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
                    {/* Column 1 - Contact Information */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                                <p className="leading-relaxed">{CONTACT_INFO.address}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={20} className="text-accent flex-shrink-0" />
                                <a
                                    href={`tel:+${CONTACT_INFO.whatsapp}`}
                                    className="hover:text-accent transition-colors"
                                >
                                    {CONTACT_INFO.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={20} className="text-accent flex-shrink-0" />
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="hover:text-accent transition-colors"
                                >
                                    {CONTACT_INFO.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-white/80 hover:text-white hover:underline transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 3 - Hours & Social Media */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <Clock size={20} className="text-accent flex-shrink-0" />
                                <p>9am - 5pm</p>
                            </div>
                            <p className="text-white/80">Monday to Saturday</p>
                        </div>

                        <h3 className="text-xl font-bold mb-3">Follow Us</h3>
                        <div className="flex gap-3">
                            <a
                                href={CONTACT_INFO.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={24} />
                            </a>
                            <a
                                href={CONTACT_INFO.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-6 text-center">
                    <p className="text-sm text-white/70">
                        © {currentYear} Briella Eyecare. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
