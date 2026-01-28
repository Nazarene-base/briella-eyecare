import Link from "next/link";
import { Eye, Glasses, Baby, LucideIcon } from "lucide-react";
import { SERVICES, TOP_SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
    Eye: Eye,
    Glasses: Glasses,
    Baby: Baby,
};

export default function ServicesPreview() {
    return (
        <section className="relative w-full py-20 md:py-20 px-6 bg-surface overflow-hidden">
            {/* Subtle Background Image - Very Low Opacity */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: "url('/services-background.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="relative z-10 max-w-[1280px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-[40px] font-bold text-primary mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-500">
                        Comprehensive eye care for your whole family
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {SERVICES.filter((s) => TOP_SERVICES.includes(s.id)).map((service) => {
                        const Icon = ICON_MAP[service.icon] || Eye;
                        return (
                            <div
                                key={service.id}
                                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    <Icon size={48} className="text-accent" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-base text-gray-500 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* View All Link */}
                <div className="text-center">
                    <Link
                        href="/services"
                        className="text-lg text-secondary hover:underline inline-block"
                    >
                        View All Services →
                    </Link>
                </div>
            </div>
        </section>
    );
}

