import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, HardHat } from 'lucide-react';
import { cn } from '../../utils/cn';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Sectors', href: '/sectors' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={cn(
                'fixed w-full z-50 transition-all duration-500 border-b',
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-gray-100'
                    : 'bg-transparent py-6 border-transparent'
            )}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className={cn("p-2.5 rounded transition-colors", isScrolled ? "bg-primary text-secondary" : "bg-primary text-secondary")}>
                        <HardHat className="h-7 w-7" />
                    </div>
                    <div className="flex flex-col">
                        <span className={cn("text-2xl font-black tracking-tighter uppercase font-heading leading-none whitespace-nowrap", isScrolled ? "text-secondary" : "text-white")}>
                            CONSTRUCT<span className="text-primary">CORP</span>
                        </span>
                        <span className={cn("text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 whitespace-nowrap", isScrolled ? "text-gray-500" : "text-white")}>
                            Build with Confidence
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav - Centered */}
                <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                                "font-bold uppercase text-[13px] tracking-widest hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-2 after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap",
                                isScrolled ? "text-secondary" : "text-white/90"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side - Quote Button */}
                <div className="hidden lg:flex items-center">
                    <Link
                        to="/quote"
                        className="btn btn-primary px-10 py-3 text-xs min-w-[180px]"
                    >
                        Get a Quote
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className={cn("h-8 w-8", isScrolled ? "text-secondary" : "text-white")} />
                    ) : (
                        <Menu className={cn("h-8 w-8", isScrolled ? "text-secondary" : "text-white")} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-2xl lg:hidden p-6 flex flex-col gap-1 border-t border-gray-100 animate-in slide-in-from-top-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-lg font-bold text-secondary py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-primary flex items-center justify-between group"
                        >
                            {item.name}
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                        </Link>
                    ))}
                    <div className="h-px bg-gray-100 my-2"></div>
                    <Link
                        to="/quote"
                        className="btn btn-primary w-full justify-center"
                    >
                        Get a Quote
                    </Link>
                </div>
            )}
        </nav>
    );
}
