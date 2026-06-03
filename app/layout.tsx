import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT_INFO } from "@/lib/constants";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Briella Eyecare",
    "url": "https://briella-eyecare.vercel.app",
    "telephone": `+${CONTACT_INFO.whatsapp}`,
    "email": CONTACT_INFO.email,
    "image": "https://briella-eyecare.vercel.app/hero-banner.jpg",
    "address": [
        {
            "@type": "PostalAddress",
            "streetAddress": "1, Eheneden Street, off Ekehuan Road",
            "addressLocality": "Benin City",
            "addressRegion": "Edo State",
            "addressCountry": "NG"
        },
        {
            "@type": "PostalAddress",
            "streetAddress": "31, Akenzua Street, off Airport Road",
            "addressLocality": "Benin City",
            "addressRegion": "Edo State",
            "addressCountry": "NG"
        }
    ],
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "6.3387",
        "longitude": "5.6244"
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "10:00",
            "closes": "14:00"
        }
    ],
    "sameAs": [
        CONTACT_INFO.socials.facebook,
        CONTACT_INFO.socials.instagram
    ]
};

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
    metadataBase: new URL('https://briella-eyecare.vercel.app'),
    title: "Briella Eyecare - Professional Optometry Services in Benin City",
    description: "An accredited private healthcare facility that offers quality eye care services. Comprehensive eye examinations, eyeglasses, contact lenses, and more.",
    icons: {
        icon: '/logo.jpg',
        apple: '/logo.jpg',
    },
    openGraph: {
        title: "Briella Eyecare - Professional Optometry Services in Benin City",
        description: "Expert eye care for your whole family. Comprehensive exams, eyeglasses, contact lenses, pediatric optometry, and disease management in Benin City.",
        url: "https://briella-eyecare.vercel.app",
        siteName: "Briella Eyecare",
        images: [
            {
                url: '/hero-banner.jpg',
                width: 1200,
                height: 630,
                alt: 'Briella Eyecare - Professional Eye Care',
            },
        ],
        locale: 'en_NG',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Briella Eyecare - Professional Optometry Services in Benin City",
        description: "Expert eye care for your whole family. Comprehensive exams, eyeglasses, contact lenses, and more.",
        images: ['/hero-banner.jpg'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${playfair.variable} ${poppins.variable} font-sans antialiased`}>
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:shadow-lg"
                >
                    Skip to content
                </a>
                <Navbar />
                <div id="main-content">
                    {children}
                </div>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}

