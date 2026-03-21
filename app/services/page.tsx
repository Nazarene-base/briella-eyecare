import Link from "next/link";
import { Eye, Focus, FileText, Glasses, Activity, Baby, Target, MessageCircle, LucideIcon } from "lucide-react";
import { SERVICES, CONTACT_INFO } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
    Eye: Eye,
    Focus: Focus,
    FileText: FileText,
    Glasses: Glasses,
    Activity: Activity,
    Baby: Baby,
    Target: Target,
};

export default function ServicesPage() {
    return (
        <main>
            {/* Page Header */}
            <section className="w-full bg-surface py-16 px-6">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Our Services
                    </h1>
                    <p className="text-xl text-gray-500">
                        Comprehensive eye care solutions for every need
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="w-full bg-white py-20 px-6">
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SERVICES.map((service) => {
                            const Icon = ICON_MAP[service.icon] || Eye;
                            const whatsappMessage = encodeURIComponent(
                                `Hello, I would like to book an appointment for ${service.title}.`
                            );
                            const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`;

                            return (
                                <div
                                    key={service.id}
                                    className="bg-white border border-gray-200 rounded-xl p-10 hover:border-accent hover:shadow-lg transition-all duration-200 flex flex-col gap-6"
                                >
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="flex-shrink-0">
                                            <Icon size={56} className="text-accent" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-2xl font-semibold text-primary mb-3">
                                                {service.title}
                                            </h3>
                                            <p className="text-base text-gray-500 leading-relaxed mb-4">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                    <Link
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors duration-200"
                                    >
                                        <MessageCircle size={20} />
                                        Book This Service
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full bg-surface py-16 px-6">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                        Ready to book your appointment?
                    </h2>
                    <Link
                        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hello, I would like to book an appointment at Briella Eyecare.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-accent text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-accent-dark transition-colors duration-200"
                    >
                        <MessageCircle size={24} />
                        Book Appointment via WhatsApp
                    </Link>
                </div>
            </section>
        </main>
    );
}
