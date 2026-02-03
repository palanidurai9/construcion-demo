import { ShieldCheck, Clock, Award, Handshake, Users, HardHat } from 'lucide-react';

const reasons = [
    {
        icon: Clock,
        title: 'On-time Delivery',
        description: 'We respect your timeline and ensure every project is completed as scheduled.'
    },
    {
        icon: ShieldCheck,
        title: 'Quality Materials',
        description: 'Sourcing only the best materials to ensure durability and long-term value.'
    },
    {
        icon: HardHat,
        title: 'Dedicated Supervision',
        description: 'Expert site supervisors ensure safety and quality control at every stage.'
    },
    {
        icon: Users,
        title: 'Experienced Engineers',
        description: 'A team of certified professionals bringing technical expertise to your project.'
    },
    {
        icon: Handshake,
        title: 'Transparent Pricing',
        description: 'Detailed documentation and clear costs with no hidden surprises.'
    },
    {
        icon: Award,
        title: 'End-to-End Execution',
        description: 'From planning to handover, we manage the entire construction lifecycle.'
    }
];

export default function WhyUs() {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Difference</span>
                    <h2 className="heading-lg text-secondary">Why Choose ConstructCorp?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <reason.icon className="h-7 w-7 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-secondary mb-3">{reason.title}</h4>
                                <p className="text-gray-500 leading-relaxed">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
