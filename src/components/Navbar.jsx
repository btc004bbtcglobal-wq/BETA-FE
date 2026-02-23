import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, ChevronDown, Database, ShieldCheck, BarChart3, Fingerprint } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const productsList = [
    {
        name: 'Nexus Auth',
        path: '#',
        desc: 'Seamless passwordless identity management and enterprise SSO.',
        icon: <Fingerprint size={24} className="text-brand-blue" />
    },
    {
        name: 'Nexus DB',
        path: '#',
        desc: 'Distributed serverless database built for global scale and zero latency.',
        icon: <Database size={24} className="text-brand-blue" />
    },
    {
        name: 'Nexus Shield',
        path: '#',
        desc: 'Real-time threat mitigation and automated penetration testing.',
        icon: <ShieldCheck size={24} className="text-brand-blue" />
    },
    {
        name: 'Nexus Analytics',
        path: '#',
        desc: 'AI-driven dashboards to understand your active users in real-time.',
        icon: <BarChart3 size={24} className="text-brand-blue" />
    }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Why Us', path: '/why-us' },
        { name: 'Technology', path: '/technology' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
                } border-b border-slate-100`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center shrink-0">
                        <Code2 size={20} className="text-white" />
                    </div>
                    <span className="font-bold text-xl text-brand-dark tracking-tight">TechStart</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center h-full">
                    <Link
                        to="/"
                        className={`font-medium transition-colors ${location.pathname === '/' ? 'text-brand-blue' : 'text-brand-text hover:text-brand-blue'}`}
                    >
                        Home
                    </Link>

                    {/* Products Mega Menu Trigger */}
                    <div
                        className="relative h-full flex items-center"
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                    >
                        <button className="flex items-center gap-1 font-medium text-brand-text hover:text-brand-blue transition-colors py-4">
                            Products <ChevronDown size={16} className={`transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Mega Dropdown */}
                        <AnimatePresence>
                            {productsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden pt-2"
                                >
                                    <div className="p-6 grid grid-cols-2 gap-x-8 gap-y-6 relative z-10 bg-white">
                                        {productsList.map((product, idx) => (
                                            <a href={product.path} key={idx} className="group flex items-start gap-4 p-3 -m-3 rounded-xl hover:bg-slate-50 transition-colors">
                                                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors duration-300">
                                                    <div className="group-hover:text-white transition-colors duration-300">
                                                        {product.icon}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-brand-dark mb-1 group-hover:text-brand-blue transition-colors">{product.name}</h4>
                                                    <p className="text-sm text-slate-500 leading-relaxed">{product.desc}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="bg-slate-50 p-6 border-t border-slate-100 flex justify-between items-center relative z-10">
                                        <div>
                                            <h4 className="font-bold text-brand-dark">Enterprise Solutions</h4>
                                            <p className="text-sm text-slate-500 mt-1">Need a custom product suite?</p>
                                        </div>
                                        <button className="btn-secondary py-2 px-4 shadow-none">Contact Sales</button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        to="/about"
                        className={`font-medium transition-colors ${location.pathname === '/about' ? 'text-brand-blue' : 'text-brand-text hover:text-brand-blue'}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/why-us"
                        className={`font-medium transition-colors ${location.pathname === '/why-us' ? 'text-brand-blue' : 'text-brand-text hover:text-brand-blue'}`}
                    >
                        Why Us
                    </Link>
                    <Link
                        to="/technology"
                        className={`font-medium transition-colors ${location.pathname === '/technology' ? 'text-brand-blue' : 'text-brand-text hover:text-brand-blue'}`}
                    >
                        Technology
                    </Link>

                    <div className="ml-4 flex items-center gap-4">
                        <Link to="/contact">
                            <button className="btn-primary py-2.5 px-6">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-brand-dark p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-white border-b border-slate-100 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`text-lg font-medium py-2 border-b border-slate-50 ${location.pathname === '/' ? 'text-brand-blue' : 'text-brand-dark'}`}>Home</Link>

                            <div className="border-b border-slate-50 pb-2">
                                <div className="text-lg font-medium py-2 text-brand-dark">Products</div>
                                <div className="grid grid-cols-1 gap-2 pl-4">
                                    {productsList.map(p => (
                                        <a key={p.name} href={p.path} className="text-slate-500 py-1" onClick={() => setMobileMenuOpen(false)}>
                                            • {p.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`text-lg font-medium py-2 border-b border-slate-50 ${location.pathname === '/about' ? 'text-brand-blue' : 'text-brand-dark'}`}>About</Link>
                            <Link to="/why-us" onClick={() => setMobileMenuOpen(false)} className={`text-lg font-medium py-2 border-b border-slate-50 ${location.pathname === '/why-us' ? 'text-brand-blue' : 'text-brand-dark'}`}>Why Us</Link>
                            <Link to="/technology" onClick={() => setMobileMenuOpen(false)} className={`text-lg font-medium py-2 border-b border-slate-50 ${location.pathname === '/technology' ? 'text-brand-blue' : 'text-brand-dark'}`}>Technology</Link>

                            <div className="flex flex-col gap-3 mt-4 pt-4">
                                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                                    <button className="btn-primary w-full">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
