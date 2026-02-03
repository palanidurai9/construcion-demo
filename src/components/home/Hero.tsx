import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image Parallax Effect */}
            <motion.div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                }}
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80")',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
            </motion.div>

            <div className="container-custom relative z-10 text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl relative"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-secondary font-bold uppercase tracking-widest text-xs mb-8 rounded-none border border-white/20">
                        <CheckCircle className="h-4 w-4" />
                        <span>Award Winning Construction Services</span>
                    </div>

                    <div className="relative isolate">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 font-heading text-white relative z-10 tracking-tight">
                            Build with <br />
                            <span className="text-primary relative inline-block">
                                Confidence
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-white/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>
                        <span className="absolute -top-24 -left-12 text-[10rem] md:text-[14rem] lg:text-[18rem] font-black text-white/5 pointer-events-none select-none -z-10 hidden md:block tracking-tighter mix-blend-overlay">
                            Precision
                        </span>
                    </div>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-md">
                        Premier construction company serving Chennai and Tamil Nadu. We deliver quality craftsmanship, strategic planning, and on-time project execution.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 mb-16">
                        <Link
                            to="/quote"
                            className="btn btn-primary text-base px-10 py-5 shadow-2xl shadow-primary/20 hover:scale-105"
                        >
                            Get a Free Consultation
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <a
                            href="tel:+919876543210"
                            className="btn btn-outline text-base px-10 py-5 border-white/40 hover:bg-white hover:text-black hover:border-white"
                        >
                            <Phone className="h-5 w-5" />
                            Call Us Today
                        </a>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                        {[
                            { label: 'Projects Completed', value: '100+' },
                            { label: 'Years Experience', value: '25+' },
                            { label: 'Client Satisfaction', value: '100%' },
                            { label: 'Industry Awards', value: '15+' },
                        ].map((stat, index) => (
                            <div key={index} className="group cursor-default">
                                <div className="text-4xl font-black text-white mb-1 group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest group-hover:text-gray-200 transition-colors">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 right-10 z-10 hidden md:flex items-center gap-4 text-white/50 text-xs font-bold uppercase tracking-widest rotate-90 origin-right translate-x-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <span>Scroll Down</span>
                <div className="w-12 h-px bg-white/50"></div>
            </motion.div>
        </div>
    );
}
