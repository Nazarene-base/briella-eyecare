import Link from "next/link";
import { Eye, Focus, FileText, Glasses, Activity, Baby, Target, LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/constants";

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
                            return (
                                <div
                                    key={service.id}
                                    className="bg-white border border-gray-200 rounded-xl p-10 hover:border-accent hover:shadow-lg transition-all duration-200 flex flex-col md:flex-row gap-6 items-start"
                                >
                                    <div className="flex-shrink-0">
                                        <Icon size={56} className="text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-primary mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-base text-gray-500 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
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
                        href="/contact"
                        className="inline-block bg-accent text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-[#3A9D3B] transition-colors duration-200"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
