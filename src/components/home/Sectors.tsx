import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectors = [
    {
        title: 'Residential',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'High-end villas and multi-family housing.'
    },
    {
        title: 'Commercial',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Office complexes and retail centers.'
    },
    {
        title: 'Infrastructure',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Roads, bridges, and public utilities.'
    },
    {
        title: 'Specialized',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Industrial plants and unique structures.'
    }
];

export default function Sectors() {
    return (
        <section className="section-padding bg-secondary text-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Scope</span>
                        <h2 className="heading-lg text-white mb-0">Industries We Serve</h2>
                    </div>
                    <Link to="/sectors" className="btn btn-outline mt-6 md:mt-0">View All Sectors</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer"
                        >
                            <img
                                src={sector.image}
                                alt={sector.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>

                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="w-12 h-1 bg-primary mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                <h3 className="text-2xl font-bold mb-2 font-heading text-white">{sector.title}</h3>
                                <p className="text-gray-300 transform opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 text-sm">
                                    {sector.description}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                    Explore <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
