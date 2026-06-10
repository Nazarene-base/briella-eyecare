import Image from "next/image";
import { Shield, Users, Activity, Heart, Smile } from "lucide-react";

const outreachPhotos = [
    // Row 1 — new photos lead
    "new/WhatsApp Image 2026-06-04 at 9.26.17 AM.jpeg",
    "new/WhatsApp Image 2026-06-04 at 9.26.16 AM.jpeg",
    "new/WhatsApp Image 2026-06-04 at 9.26.22 AM.jpeg",
    // Row 2
    "outreach-world-sight-day-red-carpet.jpg",
    "new/WhatsApp Image 2026-06-04 at 9.26.04 AM (1).jpeg",
    "outreach-elderly-patient-eye-exam-outdoor.jpg",
    // Row 3
    "new/WhatsApp Image 2026-06-04 at 9.26.15 AM.jpeg",
    "outreach-eye-exam-community-event.jpg",
    "new/WhatsApp Image 2026-06-04 at 9.26.04 AM.jpeg",
    // Row 4
    "outreach-pediatric-child-eye-exam-outdoor.jpg",
    "new/WhatsApp Image 2026-06-04 at 9.26.04 AM (2).jpeg",
    "outreach-trial-frame-consultation-table.jpg",
    // Row 5
    "new/WhatsApp Image 2026-06-04 at 9.26.15 AM (1).jpeg",
    "outreach-equipment-donation-ceremony.jpg",
    "new/WhatsApp Image 2026-06-04 at 9.26.16 AM (1).jpeg",
    // Row 6
    "outreach-your-eyes-at-work-military-event.jpg",
    "new/WhatsApp Image 2026-06-04 at 9.26.17 AM (1).jpeg",
    "outreach-team-group-full-7-people.jpg",
    // Row 7
    "new/WhatsApp Image 2026-06-04 at 9.26.15 AM (2).jpeg",
    "outreach-team-group-5-people.jpg",
    "new/WhatsApp Image 2026-06-04 at 9.26.17 AM (2).jpeg",
    // Row 8
    "outreach-bp-check-green-uniforms-busy-clinic.jpg",
    "new/WhatsApp Image 2026-06-04 at 9.26.11 AM (1).jpeg",
    "outreach-clinic-trial-lens-desk-event.jpg",
    // Row 9
    "new/WhatsApp Image 2026-06-04 at 9.26.15 AM (3).jpeg",
    "outreach-team-group-3-males.jpg",
    "new/WhatsApp Image 2026-06-04 at 9.26.18 AM.jpeg",
    // Row 10
    "new/WhatsApp Image 2026-06-04 at 9.26.16 AM (2).jpeg",
    "new/WhatsApp Image 2026-06-04 at 9.26.18 AM (1).jpeg",
    "new/WhatsApp Image 2026-06-04 at 9.26.23 AM.jpeg",
    // Row 11
    "new/WhatsApp Image 2026-06-04 at 9.26.16 AM (3).jpeg",
    "new/WhatsApp Image 2026-06-04 at 9.26.23 AM (1).jpeg",
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

            {/* Section 2 - Meet the Founder */}
            <section className="w-full bg-surface py-20 px-6">
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        <div className="relative rounded-2xl overflow-hidden shadow-xl w-full" style={{ aspectRatio: '3/4', maxHeight: '580px' }}>
                            <Image
                                src="/Dr Uwa.jpeg"
                                alt="Dr. Ogbebor Linda Uwamarin, Founder and Lead Optometrist at Briella Eyecare"
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover object-top"
                            />
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Meet the Founder</p>
                            <h2 className="text-4xl font-bold text-primary mb-2">Dr. Ogbebor Linda Uwamarin</h2>
                            <p className="text-secondary font-medium text-lg mb-10">Founder &amp; Lead Optometrist</p>

                            <div className="flex gap-12 mb-10">
                                <div>
                                    <p className="text-3xl font-bold text-primary">15+</p>
                                    <p className="text-sm text-gray-500 mt-1">Years of Experience</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-primary">2021</p>
                                    <p className="text-sm text-gray-500 mt-1">Year Founded</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-primary">7</p>
                                    <p className="text-sm text-gray-500 mt-1">Clinical Services</p>
                                </div>
                            </div>

                            <div className="space-y-5 text-lg leading-relaxed text-gray-700 mb-10">
                                <p>
                                    Dr. Linda Uwamarin is a licensed optometrist whose career has been defined by one unwavering belief: that quality eye care should not be a privilege — it should be accessible to every person, in every community.
                                </p>
                                <p>
                                    With over 15 years of clinical experience, she founded Briella Eyecare on August 5th, 2021, with a clear purpose — to build a clinic where patients feel genuinely heard, respected, and cared for, not just examined and sent home.
                                </p>
                                <p>
                                    Under her leadership, Briella has grown from a single-service practice into a full-service eye care centre, and her commitment to community outreach has taken the clinic's work far beyond its four walls.
                                </p>
                            </div>

                            <blockquote className="border-l-4 border-accent pl-6 italic text-gray-600 text-lg leading-relaxed">
                                "Clear vision changes lives. My goal has always been simple — to give every patient the same standard of care I would give my own family."
                            </blockquote>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 3 - Mission Statement */}
            <section className="w-full bg-white py-20 px-6">
                <div className="max-w-[1000px] mx-auto border-l-8 border-accent pl-10">
                    <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                    <p className="text-2xl italic leading-relaxed text-gray-600">
                        "To provide exceptional, compassionate eye care services that enhance
                        the vision and quality of life for every patient we serve, through continuous
                        innovation and clinical excellence."
                    </p>
                </div>
            </section>

            {/* Section 4 - Team */}
            <section className="w-full bg-surface py-20 px-6">
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
                            { name: "Dr. Onwudiwe Chike Paul", role: "HMO Manager / Optometrist", bio: "Doc Chike brings a rare blend of clinical expertise and healthcare management to Briella Eyecare. As HMO Manager, he bridges quality patient care with seamless insurance coordination — making sure every patient gets the attention they deserve, without the administrative friction.", photo: "/team/Dr. Onwudiwe Chike Paul.jpg" },
                            { name: "Dr. Uka Obasi Uka", role: "Optometrist", bio: "Dr. Uka is passionate about the intersection of technology and eye care — always exploring cutting-edge solutions to deliver more precise, efficient, and modern clinical experiences. He believes that the future of optometry lies in innovation, and brings that mindset to every patient he sees.", photo: "/team/Dr.Uka Obasi Uka.jpg" },
                            { name: "Ikhiuwu Osasumwen Mercy", role: "Secretary", bio: "Mercy is often the first voice and face patients encounter at Briella Eyecare — and she takes that role seriously. As clinic secretary, she keeps appointments organised, enquiries answered, and the day running smoothly, all while making sure every patient feels welcome and at ease from the moment they arrive.", photo: "/Secretary.jpg" },
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
            <section className="w-full bg-white py-20 px-6">
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
