import { Phone, MessageCircle } from 'lucide-react';

export default function ContactCTA() {
    return (
        <section className="py-24 bg-secondary relative overflow-hidden">
            <div className="container-custom relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 font-heading">
                    Planning a Construction Project?
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Let's discuss your vision. Get in touch for a comprehensive quote and expert advice.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                        href="tel:+919876543210"
                        className="btn btn-primary px-10 py-5 text-lg shadow-xl shadow-primary/10"
                    >
                        <Phone className="h-6 w-6" />
                        Call Us Now
                    </a>
                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline px-10 py-5 text-lg hover:bg-[#25D366] hover:border-[#25D366] hover:text-white"
                    >
                        <MessageCircle className="h-6 w-6" />
                        WhatsApp Us
                    </a>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </section>
    );
}
