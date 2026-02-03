import { Helmet } from 'react-helmet-async';
import { Home, Building2, PaintBucket, PencilRuler, Hammer, Truck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
    {
        icon: Home,
        title: 'Residential Construction',
        desc: 'From luxury villas in ECR to apartment complexes in OMR, we build homes that last generations. We handle everything from foundation to finish.',
        features: ['Custom Home Design', 'Duplex & Triplex', 'Multi-Storey Apartments', 'Villa Communities']
    },
    {
        icon: Building2,
        title: 'Commercial Construction',
        desc: 'State-of-the-art office spaces, retail outlets, and shopping complexes designed for modern businesses in Chennai & Coimbatore.',
        features: ['Office Buildings', 'Retail Showrooms', 'Hotels & Restaurants', 'Mixed-Use Developments']
    },
    {
        icon: Truck,
        title: 'Industrial Projects',
        desc: 'Heavy-duty industrial sheds, warehouses, and factories in industrial hubs like Hosur, Sriperumbudur, and Oragadam.',
        features: ['PEB Structures', 'Warehouses', 'Manufacturing Plants', 'Industrial Flooring']
    },
    {
        icon: PaintBucket,
        title: 'Renovation & Remodeling',
        desc: 'Give your old property a new life. We specialize in structural strengthening, modern facade updates, and complete interior makeovers.',
        features: ['Kitchen & Bath Remodels', 'Structural Strengthening', 'Facade Facelifts', 'Floor additions']
    },
    {
        icon: PencilRuler,
        title: 'Architectural Planning',
        desc: 'CMDA and DTCP approved plan drawings, 3D elevations, and structural drawings by certified architects and engineers.',
        features: ['CMDA/DTCP Approvals', '3D Elevations', 'Structural Consulting', 'Vastu Consultation']
    },
    {
        icon: Hammer,
        title: 'Turnkey Contracts',
        desc: 'Experience peace of mind with our material + labor contracts. We manage procurement, execution, and finishing.',
        features: ['End-to-End Management', 'Material Procurement', 'Quality Control', 'Handover Guarantee']
    }
];

export default function ServicesPage() {
    return (
        <>
            <Helmet>
                <title>Our Services | ConstructCorp - Residential & Commercial Construction</title>
                <meta name="description" content="Comprehensive construction services in Tamil Nadu including residential, commercial, industrial, and layout planning." />
            </Helmet>

            <div className="pt-32 pb-20 bg-secondary text-white">
                <div className="container-custom text-center">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">What We Do</span>
                    <h1 className="text-white text-4xl md:text-6xl font-black mb-6 font-heading">
                        World-Class <span className="text-primary">Construction</span> Services
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Delivering engineering excellence across every sector.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-secondary">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                    {service.desc}
                                </p>
                                <ul className="space-y-2 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                            <CheckCircle2 className="h-4 w-4 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="text-primary font-bold uppercase text-xs tracking-widest hover:text-secondary transition-colors flex items-center gap-2">
                                    Get a Quote <span className="text-lg">→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="heading-lg text-secondary">How We Work</h2>
                        <p className="text-gray-600">Our proven 4-step process to bring your vision to life.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { num: "01", title: "Consultation", desc: "We meet to understand your requirements, budget, and site conditions." },
                            { num: "02", title: "Planning & Design", desc: "Our architects create blueprints and 3D models for your approval." },
                            { num: "03", title: "Construction", desc: "Our skilled workforce executes the project with premium materials." },
                            { num: "04", title: "Handover", desc: "Final quality checks and key handover ceremony for your new space." }
                        ].map((step, i) => (
                            <div key={i} className="text-center relative">
                                <div className="text-6xl font-black text-gray-100 absolute top-0 left-1/2 -translate-x-1/2 -z-10">{step.num}</div>
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold mb-3 text-secondary">{step.title}</h3>
                                    <p className="text-gray-500 text-sm">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
