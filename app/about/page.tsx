import Image from "next/image";
import { Shield, Users, Activity, Heart, Smile } from "lucide-react";

const outreachPhotos = [
    "outreach-world-sight-day-red-carpet.jpg",
    "outreach-elderly-patient-eye-exam-outdoor.jpg",
    "outreach-eye-exam-community-event.jpg",
    "outreach-pediatric-child-eye-exam-outdoor.jpg",
    "outreach-trial-frame-consultation-table.jpg",
    "outreach-equipment-donation-ceremony.jpg",
    "outreach-your-eyes-at-work-military-event.jpg",
    "outreach-team-group-full-7-people.jpg",
    "outreach-team-group-5-people.jpg",
    "outreach-bp-check-green-uniforms-busy-clinic.jpg",
    "outreach-clinic-trial-lens-desk-event.jpg",
    "outreach-team-group-3-males.jpg",
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Page Header */}
            <section className="w-full bg-surface py-16 px-6">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        About Briella Eyecare
                    </h1>
                    <p className="text-xl text-gray-500">
                        Your trusted partner in eye care
                    </p>
                </div>
            </section>

            {/* Section 1 - Our Story */}
            <section className="w-full bg-white py-20 px-6">
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                                <p>
                                    Briella Eyecare was founded on August 5th, 2021, by Dr. Ogbebor Linda Uwamarin, a licensed optometrist with 15 years of experience. Her vision was simple: to bring quality eye care closer to people — creating a space where patients feel heard, respected, and supported.
                                </p>
                                <p>
                                    What began as a commitment to accessible optometry in Benin City has grown into a full-service clinic offering everything from routine eye examinations to specialized pediatric care and disease management.
                                </p>
                                <p>
                                    At Briella Eyecare, we believe that clear vision changes lives. Every patient who walks through our doors receives the same standard of care we would give our own family.
                                </p>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[400px]">
                            <Image
                                src="/clinic/interior.jpg"
                                alt="Inside Briella Eyecare clinic, Benin City"
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 2 - Mission Statement */}
            <section className="w-full bg-surface py-20 px-6">
                <div className="max-w-[1000px] mx-auto border-l-8 border-accent pl-10">
                    <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                    <p className="text-2xl italic leading-relaxed text-gray-600">
                        "To provide exceptional, compassionate eye care services that enhance
                        the vision and quality of life for every patient we serve, through continuous
                        innovation and clinical excellence."
                    </p>
                </div>
            </section>

            {/* Section 3 - Team */}
            <section className="w-full bg-white py-20 px-6">
                <div className="max-w-[1280px] mx-auto">
                    <h2 className="text-4xl font-bold text-primary text-center mb-16">
                        Meet Our Team
                    </h2>

                    <div className="flex flex-wrap justify-center gap-10">
                        {[
                            { name: "Dr. Enock Titus Ehyame", role: "Optometrist", bio: "Dr. Enock is driven by excellence and compassion, always striving to improve eye health and patient outcomes. His dedication to professional growth and quality eye care enables him to provide innovative solutions while making a positive impact in the lives of his patients and community.", photo: "/team/Dr. Enock Titus Ehyame.jpg" },
                            { name: "Dr. Ozioma Blessing Nwafor", role: "Optometrist", bio: "Dr. Ozy is driven by innovation, always looking for new ways to solve problems both within and beyond the eyecare profession. Her forward-thinking approach brings fresh perspectives to patient care.", photo: "/team/Dr. Ozioma Blessing Nwafor.jpg" },
                            { name: "Dr. Ikeri Chigozie Ikechukwu", role: "Optometrist", bio: "Dr. Chigozie is a dedicated optometrist who believes that the best eye care outcomes are achieved through a strong partnership between doctor and patient. Combining clinical expertise with deep compassion, clear communication, and a commitment to your long-term eye health.", photo: "/team/Dr. Ikeri Chigozie Ikechukwu.jpg" },
                            { name: "Dr. Philip Oseyomon", role: "Optometrist", bio: "Dr. Philip is passionate about helping people achieve and maintain healthy vision with compassionate, patient-centered eye care — through attentive listening, thorough examinations, and modern clinical practices.", photo: "/team/Dr. Philip Oseyomon.jpg" },
                            { name: "Dr. Onwudiwe Chike Paul", role: "HMO Manager / Optometrist", bio: "Doc Chyke is driven by innovation, always looking for new ways to solve problems both within and beyond the eyecare profession. His forward-thinking approach brings fresh perspectives to patient care.", photo: "/team/Dr. Onwudiwe Chike Paul.jpg" },
                        ].map((member, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
                            >
                                <div className="relative w-36 h-36 rounded-full overflow-hidden mx-auto mb-6 border-4 border-accent/30 shadow-md">
                                    <Image
                                        src={member.photo}
                                        alt={`Photo of ${member.name}`}
                                        fill
                                        sizes="144px"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-base text-secondary font-medium mb-3">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3.5 - Outreach Gallery */}
            <section className="w-full bg-surface py-20 px-6">
                <div className="max-w-[1280px] mx-auto">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-primary mb-4">
                            Beyond the Clinic
                        </h2>
                        <p className="text-xl text-secondary font-medium mb-6">
                            Bringing quality eye care to communities across Benin City
                        </p>
                        <p className="text-lg text-gray-600 max-w-[680px] mx-auto leading-relaxed">
                            At Briella Eyecare, our commitment to vision health doesn't stop at our doors. From World Sight Day outreaches to free community screenings, we take eye care to where the need is.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {outreachPhotos.map((photo, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                                style={{ aspectRatio: '4/3' }}
                            >
                                <Image
                                    src={`/outreach/${photo}`}
                                    alt="Briella Eyecare community outreach, Benin City"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Section 4 - Why Choose Us */}
            <section className="w-full bg-primary text-white py-20 px-6">
                <div className="max-w-[1280px] mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Why Choose Briella Eyecare?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Activity size={48} className="text-accent mb-6" />
                            <h3 className="text-xl font-bold mb-3">
                                Cutting-Edge Technology
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                We invest in modern diagnostic equipment for accurate, thorough assessments.
                            </p>
                        </div>

                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Users size={48} className="text-accent mb-6" />
                            <h3 className="text-xl font-bold mb-3">
                                Accessible, Community-Focused Care
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                Quality eye care should be available to everyone. We make that happen.
                            </p>
                        </div>

                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Heart size={48} className="text-accent mb-6" />
                            <h3 className="text-xl font-bold mb-3">
                                Patient-Centered Approach
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                You're not a number here. We listen, we explain, and we support.
                            </p>
                        </div>

                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Shield size={48} className="text-accent mb-6" />
                            <h3 className="text-xl font-bold mb-3">
                                Holistic Eye Health Management
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                We treat the whole condition, not just the symptom.
                            </p>
                        </div>

                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Smile size={48} className="text-accent mb-6" />
                            <h3 className="text-xl font-bold mb-3">
                                Serene, Welcoming Environment
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                Walk in and feel at ease. Our clinic is designed for comfort.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
