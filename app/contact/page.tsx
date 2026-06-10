import { CONTACT_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/utils";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Page Header */}
            <section className="w-full bg-surface py-16 px-6">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-500">
                        We're here to help with all your eye care needs
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-[1280px] mx-auto py-20 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Form */}
                    <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10 shadow-sm">
                        <h2 className="text-2xl font-bold text-primary mb-6">Send us a message</h2>
                        <p className="text-gray-600 mb-6">
                            For immediate booking, use the WhatsApp button below. For general inquiries, email us at{" "}
                            <a href={`mailto:${CONTACT_INFO.email}`} className="text-secondary hover:underline">
                                {CONTACT_INFO.email}
                            </a>
                        </p>
                        <a
                            href={getWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-accent hover:bg-accent/90 text-white text-center font-semibold py-4 rounded-lg text-lg transition-colors duration-200 mb-6"
                        >
                            Book Appointment via WhatsApp
                        </a>
                        <div className="border-t border-gray-200 pt-6">
                            <p className="text-sm text-gray-500 text-center">
                                Prefer email? Send your message to{" "}
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-secondary hover:underline font-medium">
                                    {CONTACT_INFO.email}
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-surface rounded-xl p-8 md:p-10">
                            <h2 className="text-2xl font-bold text-primary mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Phone className="text-accent flex-shrink-0" size={24} />
                                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="text-gray-700 hover:text-secondary transition-colors">
                                        {CONTACT_INFO.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-accent flex-shrink-0" size={24} />
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-700 hover:text-secondary transition-colors">
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="text-accent flex-shrink-0" size={24} />
                                    <div>
                                        {CONTACT_INFO.hours.map((hour, i) => (
                                            <p key={i} className="text-gray-700">{hour}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {CONTACT_INFO.locations.map((loc, i) => (
                        <div key={i} className="bg-surface rounded-xl p-6">
                            <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                                {loc.label}
                            </span>
                            <div className="flex items-start gap-3 mb-5">
                                <MapPin className="text-accent flex-shrink-0 mt-0.5" size={20} />
                                <p className="text-gray-700 leading-relaxed">{loc.address}</p>
                            </div>
                            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm h-[260px]">
                                <iframe
                                    src={loc.mapsUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
