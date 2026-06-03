import Link from "next/link";
import Image from "next/image";
import { Eye, Focus, FileText, Glasses, Activity, Baby, Target, LucideIcon } from "lucide-react";
import { SERVICES, TOP_SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
    Eye: Eye,
    Focus: Focus,
    FileText: FileText,
    Glasses: Glasses,
    Activity: Activity,
    Baby: Baby,
    Target: Target,
};

export default function ServicesPreview() {
    const featured = SERVICES.filter((s) => TOP_SERVICES.includes(s.id));

    return (
        <section className="relative w-full py-20 px-6 bg-surface overflow-hidden">
            <div className="max-w-[1280px] mx-auto">
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
                    {featured.map((service) => {
                        const Icon = ICON_MAP[service.icon] || Eye;
                        return (
                            <div
                                key={service.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                            >
                                {/* Photo */}
                                <div className="relative w-full h-56 overflow-hidden">
                                    {service.image && (
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    )}

                                    {/* Floating icon chip */}
                                    <div className="absolute bottom-4 left-4 z-10 bg-accent rounded-full p-2.5 shadow-md">
                                        <Icon size={20} className="text-white" />
                                    </div>
                                </div>

                                {/* Text content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-primary mb-3">
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
