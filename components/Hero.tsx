import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Hero() {
    const whatsappMessage = encodeURIComponent(
        "Hello, I would like to book an appointment at Briella Eyecare."
    );
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`;

    return (
        <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center">
            {/* Background Image */}
            <Image
                src="/hero-banner.jpg"
                alt="Professional eye care at Briella Eyecare"
                fill
                className="object-cover"
                priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-primary/60" />

            {/* Content */}
            <div className="relative z-10 max-w-[800px] mx-auto text-center px-6 py-20">
                {/* Brand Name - Primary */}
                <h1 className="font-display text-5xl md:text-[64px] font-bold text-white tracking-wide mb-4 drop-shadow-lg">
                    Briella Eyecare
                </h1>

                {/* Tagline - Secondary */}
                <p className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-4 drop-shadow-lg">
                    See the World Clearly
                </p>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
                    An accredited private healthcare facility that offers quality eye care services.
                </p>

                {/* Book Appointment Button */}
                <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-accent text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-[#3A9D3B] hover:scale-105 transition-all duration-300 shadow-xl"
                >
                    <MessageCircle size={24} />
                    Book Appointment
                </Link>
            </div>
        </section>
    );
}
