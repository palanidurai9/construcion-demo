import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import WhyUs from '../components/home/WhyUs';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';
import AboutSummary from '../components/home/AboutSummary';
import Sectors from '../components/home/Sectors';
import ContactSection from '../components/contact/ContactSection';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>ConstructCorp | Professional Construction Services</title>
                <meta name="description" content="Leading construction company delivering residential and commercial projects with quality and precision. Get a free consultation today." />
            </Helmet>
            <Hero />
            <AboutSummary />
            <Services />
            <Sectors />
            <Projects />
            <WhyUs />
            <Testimonials />
            <ContactCTA />
            <ContactSection />
        </>
    );
}
