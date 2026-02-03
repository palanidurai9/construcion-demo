import { Routes, Route, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/Services';
import SectorsPage from './pages/Sectors';
import InsightsPage from './pages/Insights';
import ContactPage from './pages/Contact';

const Placeholder = ({ title }: { title: string }) => (
  <>
    <Helmet>
      <title>{title} | ConstructCorp</title>
    </Helmet>
    <div className="pt-32 pb-20 container-custom min-h-[60vh]">
      <div className="h-1 w-20 bg-primary mb-6"></div>
      <h1 className="text-4xl md:text-5xl font-black text-secondary mb-6 font-heading">{title}</h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        This section is currently being updated with our latest projects and information.
        Please contact us directly for more details.
      </p>
    </div>
  </>
);

import FloatingActionButtons from './components/layout/FloatingActionButtons';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<Placeholder title="Service Details" />} />
        <Route path="/sectors" element={<SectorsPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/quote" element={<ContactPage />} />
        <Route path="*" element={<Placeholder title="404 - Page Not Found" />} />
      </Route>
    </Routes>
  );
}
