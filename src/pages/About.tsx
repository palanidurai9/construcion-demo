import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Calendar, Building } from 'lucide-react';

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us | ConstructCorp - Building Tamil Nadu Since 1998</title>
                <meta name="description" content="Leading construction company in Chennai, serving Tamil Nadu for over 25 years. Excellence in residential and commercial projects." />
            </Helmet>

            {/* Header Section */}
            <div className="pt-32 pb-20 bg-secondary text-white">
                <div className="container-custom text-center">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                    <h1 className="text-white text-4xl md:text-6xl font-black mb-6 font-heading">
                        Building the Future of <span className="text-primary">Tamil Nadu</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        From a small contracting firm in Chennai to one of the state's most trusted construction partners.
                        We combine traditional values with modern engineering.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1541976544383-304d9a157e7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Chennai Office"
                                className="rounded-lg shadow-2xl relative z-10"
                            />
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-lg -z-0 hidden md:block"></div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-secondary">A Legacy of Trust in Chennai</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Established in 1998 on Anna Salai, ConstructCorp began with a vision to redefine infrastructure quality in Tamil Nadu.
                                Over the last two decades, we have successfully delivered over 500+ projects ranging from luxury villas in ECR
                                to industrial warehouses in Hosur and Oragadam.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our deep understanding of local soil conditions (from the clay of T. Nagar to the rocky terrain of Coimbatore),
                                regulatory landscapes (CMDA, DTCP), and material sourcing makes us the preferred choice for complex projects.
                            </p>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {[
                            { icon: ShieldCheck, title: "Quality Assurance", desc: "We use only premium cement (Ramco, UltraTech) and TMT steel for lasting strength." },
                            { icon: Calendar, title: "On-Time Delivery", desc: "Our strict project management ensures you get your keys exactly when promised." },
                            { icon: Building, title: "Transparent Pricing", desc: "No hidden costs. Detailed BOQ provided before we start any work." }
                        ].map((item, i) => (
                            <div key={i} className="bg-light p-8 rounded-lg hover:-translate-y-2 transition-transform duration-300">
                                <item.icon className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-secondary">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="bg-secondary rounded-2xl p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { number: "25+", label: "Years in Business" },
                                { number: "500+", label: "Projects Completed" },
                                { number: "1M+", label: "Sq. Ft. Built" },
                                { number: "50+", label: "Expert Engineers" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.number}</div>
                                    <div className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        {/* Background Pattern */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
