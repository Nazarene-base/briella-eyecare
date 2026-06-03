import { ShieldCheck, Stethoscope, Users } from "lucide-react";

const REASONS = [
    {
        icon: ShieldCheck,
        title: "Accredited Facility",
        description:
            "A registered private healthcare clinic, held to national standards of professional eye care.",
    },
    {
        icon: Stethoscope,
        title: "Expert Optometrists",
        description:
            "Qualified, caring professionals dedicated to protecting and improving your vision health.",
    },
    {
        icon: Users,
        title: "Whole-Family Care",
        description:
            "Serving infants, children, adults and seniors with compassion across Benin City.",
    },
];

export default function WhyChooseBriella() {
    return (
        <section className="w-full py-20 px-6 bg-white">
            <div className="max-w-[1280px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-3">
                        Our Commitment
                    </p>
                    <h2 className="text-3xl md:text-[40px] font-bold text-primary">
                        Why Choose Briella Eyecare
                    </h2>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
                    {REASONS.map(({ icon: Icon, title, description }) => (
                        <div key={title} className="flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                                <Icon size={28} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
                                <p className="text-base text-gray-500 leading-relaxed">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
