import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

const projects = [
    {
        id: 1,
        title: 'Modern Office Complex',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'OMR, Chennai'
    },
    {
        id: 2,
        title: 'Luxury Villa Estimate',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'ECR, Chennai'
    },
    {
        id: 3,
        title: 'Industrial Warehouse',
        category: 'Industrial',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'Oragadam, Tamil Nadu'
    },
    {
        id: 4,
        title: 'Urban High-Rise',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'Gandhipuram, Coimbatore'
    },
    {
        id: 5,
        title: 'Suburban Family Home',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'R.S. Puram, Coimbatore'
    },
    {
        id: 6,
        title: 'Manufacturing Plant',
        category: 'Industrial',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'Industrial Zone'
    },
];

export default function Projects() {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className="section-padding bg-white" id="projects">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Portfolio</span>
                        <h2 className="heading-lg text-secondary mb-0">Featured Projects</h2>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${filter === cat
                                    ? 'bg-secondary text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative overflow-hidden rounded-lg cursor-pointer h-[400px]"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2 block">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4 flex items-center gap-2">
                                        {project.location}
                                    </p>

                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-secondary text-white">
                                        <ArrowUpRight className="h-6 w-6" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
