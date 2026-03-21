import { Shield, Award, Users, Clock, Activity, Heart, Smile } from "lucide-react";

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
                <div className="max-w-[800px] mx-auto">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { name: "Dr. Linda Uwamarin", role: "Principal Optometrist", bio: "Dr. Linda is a licensed optometrist with 15 years of clinical experience and a specialist in Glaucoma and its masquerade. She founded Briella Eyecare in August 2021 with a mission to make quality eye care accessible to every family in Benin City." },
                            { name: "Amayo Salvation Aisosa", role: "Optician", bio: "Aisosa brings enthusiasm and a genuine love for people to every patient interaction. Passionate about the craft of opticianry, she thrives on learning and is always exploring new ideas to improve patient experience." },
                            { name: "Dr. Enock Titus Ehyame", role: "Optometrist", bio: "Dr. Enock combines clinical precision with an eye on the future — passionate about contributing to environmental sustainability through eyecare innovation. Known for being easy to approach and eager to grow." },
                            { name: "Dr. Ozoma Blessing Nwanfor", role: "Optometrist", bio: "Dr. Ozy is driven by innovation, always looking for new ways to solve problems both within and beyond the eyecare profession. Her forward-thinking approach brings fresh perspectives to patient care." }
                        ].map((member, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-32 h-32 rounded-full bg-surface mx-auto mb-6 flex items-center justify-center border-4 border-accent/20">
                                    <Users size={48} className="text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-lg text-secondary font-medium mb-4">{member.role}</p>
                                <p className="text-gray-500 leading-relaxed">
                                    {member.bio}
                                </p>
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
