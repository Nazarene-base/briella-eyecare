import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Briella Eyecare - Professional Optometry Services in Benin City",
    description: "An accredited private healthcare facility that offers quality eye care services. Comprehensive eye examinations, eyeglasses, contact lenses, and more.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${playfair.variable} ${poppins.variable} font-sans antialiased`}>
                <Navbar />
                {children}
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}

