import { CONTACT_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
                            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hello, I would like to book an appointment at Briella Eyecare.")}`}
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
                        <form style={{display: 'none'}} action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    placeholder="0803 218 4887"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 rounded-lg text-lg transition-colors duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Column - Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-surface rounded-xl p-8 md:p-10">
                            <h2 className="text-2xl font-bold text-primary mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-accent flex-shrink-0" size={24} />
                                    <div>
                                        {CONTACT_INFO.address.map((addr, i) => (
                                            <p key={i} className="text-gray-700 leading-relaxed">
                                                {addr}
                                            </p>
                                        ))}
                                    </div>
                                </div>
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

                            {/* Google Maps Embed */}
                            <div className="mt-10 rounded-lg overflow-hidden border border-gray-200 shadow-sm h-[300px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8697!2d5.6244!3d6.3387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnMTkuMyJOIDXCsDM3JzI3LjgiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
