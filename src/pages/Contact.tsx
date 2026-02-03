import { Helmet } from 'react-helmet-async';
import ContactSection from '../components/contact/ContactSection';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <>
            <Helmet>
                <title>Contact Us | ConstructCorp</title>
                <meta name="description" content="Get in touch with ConstructCorp for your next construction project in Chennai or Tamil Nadu. Call, email or visit us." />
            </Helmet>

            <div className="pt-32 pb-20 bg-secondary text-white">
                <div className="container-custom ">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Let's Talk</span>
                    <h1 className="text-white text-4xl md:text-6xl font-black mb-6 font-heading">
                        Get in <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Ready to start your dream project? We are here to help you every step of the way.
                    </p>
                </div>
            </div>

            <ContactSection />

            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-primary shadow-md">
                                <Phone className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-secondary">Phone</h3>
                            <p className="text-gray-500 mb-4">Monday to Saturday, 9am to 6pm</p>
                            <a href="tel:+919876543210" className="text-lg font-bold text-gray-800 hover:text-primary transition-colors">+91 98765 43210</a>
                        </div>

                        <div className="p-8 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-primary shadow-md">
                                <Mail className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-secondary">Email</h3>
                            <p className="text-gray-500 mb-4">We reply within 24 hours</p>
                            <a href="mailto:info@constructcorp.com" className="text-lg font-bold text-gray-800 hover:text-primary transition-colors">info@constructcorp.com</a>
                        </div>

                        <div className="p-8 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-primary shadow-md">
                                <MapPin className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-secondary">Office</h3>
                            <p className="text-gray-500 mb-4">Main Headquarters</p>
                            <p className="text-lg font-bold text-gray-800">123, Anna Salai, Chennai, TN</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
