import { Helmet } from 'react-helmet-async';

const sectors = [
    {
        title: 'IT & Technology Parks',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        desc: 'Specialized infrastructure for the booming IT corridor (OMR) in Chennai. We construct high-tech office spaces with advanced HVAC, server room capabilities, and sustainable energy systems.',
        loc: 'Served in: OMR, Sholinganallur, Siruseri'
    },
    {
        title: 'Industrial & Manufacturing',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        desc: 'Heavy-duty factories and assembly lines for the "Detroit of India". Our industrial constructions are built to withstand heavy machinery loads and vibration.',
        loc: 'Served in: Oragadam, Sriperumbudur, Hosur'
    },
    {
        title: 'Healthcare Facilities',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b9af9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        desc: 'Multi-specialty hospitals and clinics designed for patient safety and operational efficiency. We ensure compliance with medical infrastructure standards.',
        loc: 'Served in: Chennai, Madurai, Coimbatore'
    },
    {
        title: 'Educational Institutions',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        desc: 'Schools, colleges, and university campuses. We create inspiring learning environments with safe structures, auditoriums, and sports facilities.',
        loc: 'Served in: Trichy, Salem, Chennai'
    }
];

export default function SectorsPage() {
    return (
        <>
            <Helmet>
                <title>Sectors & Expertise | ConstructCorp</title>
                <meta name="description" content="Specialized construction expertise in IT Parks, Industrial Manufacturing, Healthcare, and Education sectors across Tamil Nadu." />
            </Helmet>

            <div className="pt-32 pb-20 bg-secondary text-white">
                <div className="container-custom ">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Industry Expertise</span>
                    <h1 className="text-white text-4xl md:text-6xl font-black mb-6 font-heading">
                        Sectors We <span className="text-primary">Serve</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Tailored construction solutions for Tamil Nadu's key economic drivers.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="space-y-24">
                        {sectors.map((sector, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                                <div className="w-full lg:w-1/2">
                                    <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                                        <img
                                            src={sector.image}
                                            alt={sector.title}
                                            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <h2 className="text-3xl font-bold text-secondary mb-4">{sector.title}</h2>
                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed border-l-4 border-primary pl-4">
                                        {sector.desc}
                                    </p>
                                    <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-bold text-gray-700">
                                        📍 {sector.loc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
