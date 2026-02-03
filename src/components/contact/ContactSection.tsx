import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="section-padding bg-white" id="contact">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Get in Touch</span>
                    <h2 className="heading-lg text-secondary">Start Your Project Today</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Form Side */}
                    <div className="bg-gray-50 p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6 font-heading text-secondary">Request a Quote</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="(555) 000-0000" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">City / Location</label>
                                    <input type="text" className="w-full px-4 py-3 rounded bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="New York, NY" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Project Type</label>
                                    <select className="w-full px-4 py-3 rounded bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer">
                                        <option>Residential Construction</option>
                                        <option>Commercial Building</option>
                                        <option>Renovation / Remodel</option>
                                        <option>Industrial Project</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Project Details</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Describe your project requirements..."></textarea>
                            </div>

                            <button type="button" className="btn btn-primary w-full py-4 text-base">
                                Submit Request
                                <Send className="h-4 w-4" />
                            </button>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                We respect your privacy. Your information is safe with us.
                            </p>
                        </form>
                    </div>

                    {/* Info Side */}
                    <div className="space-y-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-secondary text-white rounded-lg">
                                <Phone className="h-8 w-8 text-primary mb-4" />
                                <h4 className="text-lg font-bold mb-2">Call Us</h4>
                                <p className="text-gray-400 text-sm mb-2">Mon-Sat from 8am to 6pm</p>
                                <a href="tel:+15551234567" className="text-xl font-black hover:text-primary transition-colors block">(555) 123-4567</a>
                            </div>
                            <div className="p-6 bg-primary text-secondary rounded-lg">
                                <Mail className="h-8 w-8 text-secondary mb-4" />
                                <h4 className="text-lg font-bold mb-2">Email Us</h4>
                                <p className="text-secondary/80 text-sm mb-2">Online support 24/7</p>
                                <a href="mailto:info@constructcorp.com" className="text-xl font-black hover:text-white transition-colors block text-ellipsis overflow-hidden">info@constructcorp.com</a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-secondary mb-1">Main Office</h4>
                                    <p className="text-gray-600">
                                        123 Construction Blvd, Business District<br />
                                        New York, NY 10001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-secondary mb-1">Working Hours</h4>
                                    <p className="text-gray-600">
                                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                                        Saturday: 9:00 AM - 2:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed Placeholder */}
                        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1645437817088!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
