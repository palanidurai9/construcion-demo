import { Home, Building2, PaintBucket, PencilRuler, Hammer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: Home,
        title: 'Residential Construction',
        description: 'Custom homes, villas, apartments built to perfection.',
        link: '/services/residential'
    },
    {
        icon: Building2,
        title: 'Commercial Construction',
        description: 'Office buildings, retail spaces, and warehouses.',
        link: '/services/commercial'
    },
    {
        icon: PaintBucket,
        title: 'Renovation & Remodeling',
        description: 'Interior & exterior upgrades for modern living.',
        link: '/services/renovation'
    },
    {
        icon: PencilRuler,
        title: 'Design & Planning',
        description: 'Precise estimation, architectural drawings, and approvals.',
        link: '/services/design'
    },
    {
        icon: Hammer,
        title: 'Structural Works',
        description: 'Foundations, concrete, and heavy steel structures.',
        link: '/services/structural'
    },
];

export default function Services() {
    return (
        <section className="section-padding bg-light relative" id="services">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Expertise</span>
                    <h2 className="heading-lg text-secondary">Our Construction Services</h2>
                    <p className="text-gray-600 text-lg">Delivering comprehensive construction solutions tailored to your unique requirements.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white p-10 rounded shadow-sm hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-primary transform hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <service.icon className="h-8 w-8 text-secondary group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors font-heading">{service.title}</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                                {service.description}
                            </p>

                            <Link
                                to={service.link}
                                className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-secondary transition-colors uppercase tracking-wider"
                            >
                                Enquire Now <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
