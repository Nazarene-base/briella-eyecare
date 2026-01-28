"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function WhatsAppButton() {
    const whatsappMessage = encodeURIComponent(
        "Hello, I have a question about Briella Eyecare."
    );
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 md:bottom-6 md:right-6 w-14 h-14 md:w-[60px] md:h-[60px] bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 z-[100] animate-pulse"
            style={{
                boxShadow: "0 4px 12px rgba(68, 184, 70, 0.4)",
            }}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} className="text-white" />
        </Link>
    );
}
