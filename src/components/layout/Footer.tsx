import { Link } from 'react-router-dom';
import { HardHat, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="p-2 bg-primary rounded">
                                <HardHat className="h-6 w-6 text-secondary" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter uppercase font-heading">
                                    CONSTRUCT<span className="text-primary">CORP</span>
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            We are a full-service construction partner delivering quality craftsmanship, strategic planning, and project leadership. Building structures that last.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="h-10 w-10 rounded bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all transform hover:-translate-y-1"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 font-heading border-l-4 border-primary pl-4">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Projects', 'Careers', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link
                                        to={`/${link.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 font-heading border-l-4 border-primary pl-4">Our Services</h4>
                        <ul className="space-y-4">
                            {['General Contracting', 'Construction Management', 'Design-Build', 'Preconstruction', 'Sustainable Build', 'Safety Consulting'].map((service) => (
                                <li key={service}>
                                    <Link
                                        to="/services"
                                        className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 font-heading border-l-4 border-primary pl-4">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                                <span className="text-gray-400">123 Construction Blvd, Business District, City, ST 12345</span>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-gray-400 font-bold">Call Us 24/7</span>
                                    <a href="tel:+15551234567" className="text-white hover:text-primary transition-colors">(555) 123-4567</a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-gray-400 font-bold">Email Us</span>
                                    <a href="mailto:info@constructcorp.com" className="text-white hover:text-primary transition-colors">info@constructcorp.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} ConstructCorp. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-xs italic">
                            This is a demo website created for presentation purpose.
                        </p>
                    </div>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
