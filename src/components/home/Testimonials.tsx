import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Robert Fox',
        role: 'CEO, Skyline Developers',
        content: 'ConstructCorp delivered our office complex on time and under budget. Their attention to detail and safety protocols are unmatched in the industry.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        role: 'Homeowner',
        content: 'The team was professional, clean, and communicative throughout our entire home renovation. The final result exceeded our expectations absolutely.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
        id: 3,
        name: 'Michael Chen',
        role: 'Project Manager, City Infrastructure',
        content: 'We rely on ConstructCorp for their engineering expertise and reliable fleet. A true partner in civil construction projects.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
];

export default function Testimonials() {
    return (
        <section className="section-padding bg-secondary relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Testimonials</span>
                    <h2 className="heading-lg text-white">What Our Clients Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white/5 backdrop-blur-sm p-8 rounded border border-white/10 relative">
                            <Quote className="absolute top-8 right-8 text-primary/20 h-12 w-12" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed italic">"{t.content}"</p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                                />
                                <div>
                                    <h4 className="text-white font-bold">{t.name}</h4>
                                    <p className="text-primary text-sm">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
