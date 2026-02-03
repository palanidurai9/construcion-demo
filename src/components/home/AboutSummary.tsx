import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSummary() {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Construction Team"
                                className="w-full h-auto rounded shadow-2xl"
                            />
                        </div>
                        {/* Outline Text Decoration */}
                        <div className="absolute -top-10 -left-10 text-9xl font-black text-gray-100 -z-10 font-heading select-none hidden md:block">
                            SINCE 1998
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 -z-10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Who We Are</span>
                        <h2 className="heading-lg text-secondary mb-6">Building Excellence Across Tamil Nadu</h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Based in Chennai, we are a full-service construction company delivering residential and commercial projects across the state with precision, transparency, and experienced leadership.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                            <div className="border-l-4 border-primary pl-4">
                                <div className="text-4xl font-black text-secondary mb-1">25+</div>
                                <div className="text-sm text-gray-500 font-bold uppercase">Years Experience</div>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <div className="text-4xl font-black text-secondary mb-1">100+</div>
                                <div className="text-sm text-gray-500 font-bold uppercase">Projects</div>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <div className="text-4xl font-black text-secondary mb-1">50+</div>
                                <div className="text-sm text-gray-500 font-bold uppercase">Team Members</div>
                            </div>
                        </div>

                        <Link
                            to="/about"
                            className="btn btn-secondary"
                        >
                            Learn More About Us
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
