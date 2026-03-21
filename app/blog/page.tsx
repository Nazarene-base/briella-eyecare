import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Page Header */}
            <section className="w-full bg-surface py-16 px-6">
                <div className="max-w-[1280px] mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Blog & Resources
                    </h1>
                    <p className="text-xl text-gray-500">
                        Eye care tips and clinic updates
                    </p>
                </div>
            </section>

            {/* Content Area */}
            <section className="max-w-[800px] mx-auto py-32 px-6 text-center">
                <div className="flex justify-center mb-8">
                    <div className="bg-surface p-6 rounded-full">
                        <FileText size={64} className="text-accent" />
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">Eye Care Insights — Coming Soon</h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-12">
                    We're preparing helpful articles on eye health, vision care tips, and what to expect during your visit. Check back soon.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="https://wa.me/2349090368786?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors duration-200"
                    >
                        Book an Appointment
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline transition-all"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}
