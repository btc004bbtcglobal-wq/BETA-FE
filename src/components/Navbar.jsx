import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Database, ShieldCheck, Mail, Wallet, BarChart3, Fingerprint, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
// import logo from '../assets/beta-logo.png';
import logo from '../assets/beta.png';

const publicProducts = [
    {
        name: 'BNX Mail',
        path: '#bnxmail',
        desc: 'Enterprise mail ecosystem.',
        icon: <Mail size={18} />
    },
    {
        name: 'B2Auth',
        path: '#b2auth',
        desc: 'Identity & access management.',
        icon: <ShieldCheck size={18} />
    },
    {
        name: 'Cliks',
        path: '#cliks',
        desc: 'Personal financial companion.',
        icon: <Wallet size={18} />
    }
];

const businessProducts = [
    {
        name: 'Cliks Business',
        path: '#cliks-business',
        desc: 'Financial ecosystem for teams.',
        icon: <Database size={18} />
    }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Resources', path: '/resources' },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-[100] px-4 py-6 md:px-8">
            <header
                className={`mx-auto max-w-7xl transition-all duration-500 rounded-full border border-white/20 ${
                    scrolled 
                    ? 'bg-white/80 backdrop-blur-xl shadow-2xl shadow-brand-blue/10 py-3 px-6' 
                    : 'bg-transparent py-4 px-8'
                }`}
            >
                <div className="flex justify-between items-center">
                    {/* Logo & Brand */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src={logo} alt="Beta Softnet Logo" className="h-16 w-auto transition-transform group-hover:scale-110 duration-300" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                                    location.pathname === link.path 
                                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' 
                                    : 'text-brand-text hover:bg-slate-100 hover:text-brand-blue'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Products Dropdown Trigger */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            <button className={`flex items-center gap-1.5 px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                                productsOpen ? 'bg-slate-100 text-brand-blue' : 'text-brand-text hover:bg-slate-100 hover:text-brand-blue'
                            }`}>
                                Products <ChevronDown size={14} className={`transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {productsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full right-0 mt-3 w-[560px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden"
                                    >
                                        <div className="flex h-full min-h-[300px]">
                                            {/* Left side: Category */}
                                            <div className="w-1/3 bg-slate-50 p-6 flex flex-col justify-between">
                                                <div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-2 block">Category</span>
                                                    <h3 className="text-2xl font-black text-brand-dark mb-2">Base</h3>
                                                    <p className="text-xs text-slate-500 leading-relaxed">
                                                        The foundational layer of the Beta ecosystem, providing essential services for individuals and enterprises.
                                                    </p>
                                                </div>
                                                <div className="mt-8">
                                                    <div className="p-3 rounded-xl bg-brand-blue/5 border border-brand-blue/10">
                                                        <p className="text-[10px] text-brand-blue font-bold italic">More categories coming soon...</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right side: Product List */}
                                            <div className="w-2/3 p-6 overflow-y-auto max-h-[450px]">
                                                {/* Public Division */}
                                                <div className="mb-8">
                                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 px-2">Public</h4>
                                                    <div className="grid gap-2">
                                                        {publicProducts.map((product) => (
                                                            <a href={product.path} key={product.name} className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group">
                                                                <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                                                                    {product.icon}
                                                                </div>
                                                                <div>
                                                                    <h5 className="font-bold text-xs text-brand-dark group-hover:text-brand-blue transition-colors">{product.name}</h5>
                                                                    <p className="text-[10px] text-slate-500 line-clamp-1">{product.desc}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Business Division */}
                                                <div>
                                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 px-2">Business</h4>
                                                    <div className="grid gap-2">
                                                        {businessProducts.map((product) => (
                                                            <a href={product.path} key={product.name} className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group">
                                                                <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                                                                    {product.icon}
                                                                </div>
                                                                <div>
                                                                    <h5 className="font-bold text-xs text-brand-dark group-hover:text-brand-blue transition-colors">{product.name}</h5>
                                                                    <p className="text-[10px] text-slate-500 line-clamp-1">{product.desc}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/contact">
                            <button className="btn-primary py-2.5 px-6 text-sm">
                                Get Started
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? 'bg-slate-100 text-brand-dark' : 'bg-slate-100/50 text-brand-dark'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full px-4 mt-2 lg:hidden"
                    >
                        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-lg font-bold p-4 rounded-2xl transition-colors ${
                                        location.pathname === link.path ? 'bg-brand-blue-light text-brand-blue' : 'text-brand-dark hover:bg-slate-50'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-slate-100 my-2"></div>
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <button className="btn-primary w-full py-4">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
