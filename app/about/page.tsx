import { Shield, Award, Users, Clock } from "lucide-react";

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
                            Briella Eyecare is an accredited private healthcare facility dedicated to providing
                            exceptional optometry services in Benin City. Our clinic was established with a
                            vision to make quality eye care accessible and affordable for everyone in our community.
                        </p>
                        <p>
                            Led by experienced professionals, we combine clinical expertise with state-of-the-art
                            technology to ensure our patients receive the best possible care for their vision and eye health.
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { name: "Dr. Linda Uwamarin", role: "Principal Optometrist", bio: "With years of experience in clinical optometry, Dr. Linda leads our team with a passion for pediatric eye care." },
                            { name: "Staff Member 1", role: "Optometrist", bio: "Specializing in disease diagnosis and management, ensuring our patients receive comprehensive eye health checkups." },
                            { name: "Staff Member 2", role: "Clinical Assistant", bio: "Providing dedicated support to our patients and ensuring a seamless experience at Briella Eyecare." }
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Shield size={48} className="text-accent mb-6" />
                            <h3 className="text-xl font-bold mb-3">
                                Accredited Facility
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                We are a fully licensed and accredited private healthcare provider.
                            </p>
                        </div>

                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Award size={48} className="text-accent mb-6" />
                            <h3 className="text-xl font-bold mb-3">
                                Professional Care
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                Our optometrists bring years of clinical experience and expertise.
                            </p>
                        </div>

                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Users size={48} className="text-accent mb-6" />
                            <h3 className="text-xl font-bold mb-3">
                                Family Focused
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                We offer specialized eye care services for both children and adults.
                            </p>
                        </div>

                        <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Clock size={48} className="text-accent mb-6" />
                            <h3 className="text-xl font-bold mb-3">
                                Flexible Hours
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                Open from 9am to 5pm, Monday to Saturday for your convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
