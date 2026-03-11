import React, { useState, useEffect } from 'react';
import { ExternalLink, TrendingUp, Code, Search, Zap, DollarSign, Users, ChevronRight, CheckCircle2, BarChart3, Globe, Smartphone, Award, Star, ArrowRight, Calendar, Target, Activity, TrendingDown, Eye, MousePointer, PhoneCall, ShoppingCart } from 'lucide-react';
import { Helmet } from "react-helmet";

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [activeTab, setActiveTab] = useState('all');
    const [scrollY, setScrollY] = useState(0);
    const [visibleStats, setVisibleStats] = useState(false);
    const [countUp, setCountUp] = useState({
        projects: 0,
        leads: 0,
        roi: 0,
        satisfaction: 0
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (window.scrollY > 300 && !visibleStats) {
                setVisibleStats(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleStats]);

    // Count up animation for stats
    useEffect(() => {
        if (visibleStats) {
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;
                
                setCountUp({
                    projects: Math.floor(25 * progress),
                    leads: Math.floor(35 * progress),
                    roi: Math.floor(267 * progress),
                    satisfaction: Math.floor(100 * progress)
                });

                if (currentStep >= steps) clearInterval(timer);
            }, interval);

            return () => clearInterval(timer);
        }
    }, [visibleStats]);

    const categories = [
        { id: 'all', label: 'All Projects', icon: Globe },
        { id: 'web', label: 'Web Development', icon: Code },
        { id: 'seo', label: 'SEO Services', icon: Search },
        { id: 'saas', label: 'SaaS Products', icon: Zap },
        { id: 'ads', label: 'Digital Advertising', icon: TrendingUp }
    ];

    const projects = [
        // Web Development
        {
            category: 'web',
            title: 'VAuditors',
            url: 'https://www.vauditors.com/',
            description: 'Professional auditing services platform with comprehensive service showcase and client portal',
            tech: ['React', 'Node.js', 'SEO Optimized'],
            impact: 'Enterprise-grade solution with advanced security features',
            highlight: 'Enterprise',
            stats: { clients: '50+', uptime: '99.9%' }
        },
        {
            category: 'web',
            title: 'AJ Fitness',
            url: 'https://www.ajfitness.in/',
            description: 'Modern fitness & wellness platform with membership management',
            tech: ['Responsive Design', 'Modern UI', 'Booking System'],
            impact: 'Streamlined member onboarding and class scheduling',
            stats: { members: '200+', bookings: '500+/mo' }
        },
        {
            category: 'web',
            title: 'Tamil Harmonic',
            url: 'https://www.tamilharmonic.com/',
            description: 'Cultural music platform with e-commerce integration',
            tech: ['Custom CMS', 'E-commerce', 'Payment Gateway'],
            impact: 'Digital preservation of traditional music',
            stats: { catalog: '1000+', sales: '₹2L+' }
        },
        {
            category: 'web',
            title: 'No1 Tailoring Hub',
            url: 'https://no1tailoringhub.in/',
            description: 'Premium tailoring services with online booking and portfolio gallery',
            tech: ['Booking System', 'Gallery', 'WhatsApp Integration'],
            impact: '40% increase in customer inquiries',
            stats: { orders: '150+/mo', rating: '4.8★' }
        },
        {
            category: 'web',
            title: 'Thangavelu Travels',
            url: 'https://thangavelutravels.com/',
            description: 'Full-featured tour & travel booking platform with payment integration',
            tech: ['Booking Engine', 'Payment Integration', 'Real-time Availability'],
            impact: '4 tours booked within first week of ad campaign',
            highlight: 'High Conversion',
            stats: { tours: '25+', bookings: '120+', convRate: '8.2%' }
        },
        {
            category: 'web',
            title: 'Thumbprint Threadz',
            url: 'https://thumbprintthreadz.com/',
            description: 'Modern fashion e-commerce with advanced cart and inventory management',
            tech: ['E-commerce', 'Cart System', 'Inventory Management'],
            impact: 'Complete online retail transformation',
            stats: { products: '500+', orders: '80+/mo' }
        },
        {
            category: 'web',
            title: 'Mayil Brands SF',
            url: 'https://www.mayilbrandssf.in/',
            description: 'Corporate brand showcase with portfolio management',
            tech: ['Portfolio Design', 'Responsive', 'CMS'],
            impact: 'Enhanced brand visibility and credibility',
            stats: { reach: '10K+', engagement: '15%' }
        },

        // SEO Projects
        {
            category: 'seo',
            title: 'Tanglome SEO',
            url: 'https://tanglome.com',
            description: 'Comprehensive SEO optimization with technical and content strategy',
            tech: ['On-page SEO', 'Technical SEO', 'Link Building'],
            impact: '185% increase in organic traffic within 6 months',
            stats: { traffic: '+185%', keywords: '45 ranked', da: '32' },
            highlight: 'Traffic Boost'
        },
        {
            category: 'seo',
            title: 'VAuditors SEO',
            url: 'https://vauditors.com',
            description: 'Professional services SEO with local and national targeting',
            tech: ['Keyword Strategy', 'Content Optimization', 'Schema Markup'],
            impact: 'Page 1 rankings for 15+ high-value keywords',
            stats: { page1: '15 KW', traffic: '+220%', leads: '+150%' },
            highlight: 'Top Rankings'
        },
        {
            category: 'seo',
            title: 'Thangavelu Travels SEO',
            url: 'https://thangavelutravels.com',
            description: 'Local SEO strategy with Google My Business optimization',
            tech: ['Local SEO', 'GMB Optimization', 'Review Management'],
            impact: '60% increase in booking inquiries from organic search',
            stats: { gmb: 'Top 3', reviews: '4.7★', calls: '+60%' }
        },
        {
            category: 'seo',
            title: 'Aatharvaa Roofings SEO',
            url: 'https://aatharvaroofings.com',
            description: 'Construction industry SEO with citation building',
            tech: ['Industry Keywords', 'Citations', 'Local Listings'],
            impact: 'Dominated local search for roofing services',
            stats: { localRank: '#1', citations: '50+', leads: '+180%' }
        },
        {
            category: 'seo',
            title: 'No1 Tailoring Hub SEO',
            url: 'https://no1tailoringhub.in',
            description: 'E-commerce SEO with product page optimization',
            tech: ['E-commerce SEO', 'Product Pages', 'Image SEO'],
            impact: '140% boost in product page visibility',
            stats: { products: '200+ indexed', traffic: '+140%', ctr: '4.2%' }
        },

        // SaaS Products
        {
            category: 'saas',
            title: 'GenBeta - Facility Management',
            url: 'https://login.matapangtech.com/',
            description: 'Enterprise facility management SaaS with real-time approvals and compliance',
            tech: ['Real-time Approvals', 'Multi-site Management', 'RBAC', 'Audit Trails'],
            impact: 'Reduces approval time by 75%, ensures regulatory compliance',
            features: ['Lightning-fast approvals', 'Role-based access control', 'Compliance monitoring', 'Multi-location support'],
            highlight: 'Enterprise MVP',
            stats: { facilities: '50+', approvals: '1000+/mo', uptime: '99.99%' }
        },
        {
            category: 'saas',
            title: 'Aura Jewellery Billing',
            url: 'https://aurajewellerybillingdemo.netlify.app/login',
            description: 'Specialized billing system for jewellery retail with inventory tracking',
            tech: ['Inventory Management', 'Invoice System', 'GST Compliance'],
            impact: 'Streamlined billing operations for jewellers',
            demo: true,
            stats: { invoices: '500+/mo', accuracy: '99.8%' }
        },
        {
            category: 'saas',
            title: 'CRM Platform',
            url: 'https://customerresourcemanagement.netlify.app/choose-role',
            description: 'Comprehensive customer relationship management system',
            tech: ['Customer Tracking', 'Analytics Dashboard', 'Email Integration'],
            impact: 'Enhanced customer retention and sales tracking',
            demo: true,
            stats: { customers: '1000+', retention: '+35%' }
        },
        {
            category: 'saas',
            title: 'Smart Billing - Mobile Shop',
            url: 'https://smartbilling.netlify.app/choose-role',
            description: 'Point-of-sale system optimized for mobile retail',
            tech: ['POS System', 'Stock Management', 'IMEI Tracking'],
            impact: 'Reduced checkout time by 60%',
            demo: true,
            stats: { transactions: '200+/day', stockAcc: '98%' }
        },

        // Digital Advertising
        {
            category: 'ads',
            title: 'Tamil Harmonic - Google Ads',
            url: 'https://www.tamilharmonic.com/',
            description: 'High-converting Google Search campaign for music services',
            tech: ['Search Ads', 'Lead Generation', 'Call Extensions'],
            impact: '25-35 qualified leads with 5-10 daily phone calls',
            metrics: { 
                budget: '₹1,500', 
                duration: '3 days', 
                leads: '25-35', 
                calls: '5-10/day',
                cpl: '₹42-60',
                convRate: '12.5%'
            },
            highlight: 'High ROI',
            stats: { cpl: '₹50', roas: '450%', convRate: '12.5%' }
        },
        {
            category: 'ads',
            title: 'Deepam Cell Corner - Local Ads',
            url: '#',
            description: 'Location-based search ads driving foot traffic to mobile shop',
            tech: ['Local Search Ads', 'Store Visits', 'Call Tracking'],
            impact: '3-4 verified customer visits per week',
            metrics: { 
                budget: '₹1,500/week', 
                visits: '3-4 customers', 
                strategy: 'Weekly campaigns',
                costPerVisit: '₹375-500'
            },
            stats: { visits: '15+/mo', calls: '25+/mo' }
        },
        {
            category: 'ads',
            title: 'Thangavelu Travels - Conversion Campaign',
            url: 'https://thangavelutravels.com/',
            description: 'Multi-channel campaign optimized for tour bookings',
            tech: ['Conversion Tracking', 'Call Campaigns', 'Remarketing'],
            impact: '10 calls resulting in 4 confirmed bookings',
            metrics: { 
                budget: '₹1,500', 
                calls: '10', 
                bookings: '4', 
                convRate: '40%',
                roi: '267%',
                avgBooking: '₹10,000'
            },
            highlight: '267% ROI',
            stats: { convRate: '40%', roi: '267%', bookings: '4' }
        },
        {
            category: 'ads',
            title: 'Pioneer Equipments - LinkedIn Ads',
            url: 'https://pioneerequipments.com/',
            description: 'B2B LinkedIn advertising targeting decision-makers',
            tech: ['LinkedIn Ads', 'B2B Targeting', 'Lead Gen Forms'],
            impact: 'Quality leads from manufacturing sector professionals',
            stats: { impressions: '25K+', ctr: '2.8%', leads: '18' }
        }
    ];

    // Enhanced stats with detailed metrics
    const overallStats = [
        { 
            label: 'Projects Delivered', 
            value: countUp.projects,
            target: '25+',
            icon: Award, 
            trend: '+15%',
            trendUp: true,
            detail: 'Across web, SEO, SaaS & ads'
        },
        { 
            label: 'Average Leads Generated', 
            value: countUp.leads,
            target: '35+',
            icon: Target, 
            trend: 'Per campaign',
            detail: 'From digital advertising'
        },
        { 
            label: 'Best Campaign ROI', 
            value: countUp.roi,
            target: '267%',
            icon: TrendingUp, 
            trend: '+180%',
            trendUp: true,
            detail: 'Travel booking campaign'
        },
        { 
            label: 'Client Satisfaction', 
            value: countUp.satisfaction,
            target: '100%',
            icon: Star, 
            trend: '5.0★ Rating',
            detail: 'Based on project reviews'
        }
    ];

    // Detailed performance metrics
    const performanceMetrics = [
        {
            category: 'Web Development',
            icon: Code,
            metrics: [
                { label: 'Avg. Load Time', value: '1.2s', icon: Activity },
                { label: 'Mobile Score', value: '95/100', icon: Smartphone },
                { label: 'Conversion Rate', value: '8.5%', icon: TrendingUp },
                { label: 'Client Retention', value: '92%', icon: Users }
            ]
        },
        {
            category: 'SEO Services',
            icon: Search,
            metrics: [
                { label: 'Avg. Traffic Increase', value: '+165%', icon: TrendingUp },
                { label: 'Keywords Ranked', value: '150+', icon: Target },
                { label: 'Page 1 Rankings', value: '45+', icon: Award },
                { label: 'Avg. DA Increase', value: '+18', icon: BarChart3 }
            ]
        },
        {
            category: 'Digital Advertising',
            icon: TrendingUp,
            metrics: [
                { label: 'Avg. CTR', value: '4.2%', icon: MousePointer },
                { label: 'Cost Per Lead', value: '₹50', icon: DollarSign },
                { label: 'Avg. ROAS', value: '380%', icon: BarChart3 },
                { label: 'Conversion Rate', value: '12.5%', icon: ShoppingCart }
            ]
        },
        {
            category: 'SaaS Products',
            icon: Zap,
            metrics: [
                { label: 'System Uptime', value: '99.9%', icon: Activity },
                { label: 'User Satisfaction', value: '4.8★', icon: Star },
                { label: 'Active Users', value: '2000+', icon: Users },
                { label: 'Response Time', value: '<200ms', icon: Zap }
            ]
        }
    ];

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <>
            <Helmet>
                <title>Portfolio | Tanglome - No 1 IT Company in India & Tamil Nadu | Case Studies</title>
                <meta name="description" content="Explore Tanglome's portfolio - No 1 IT Company in India & Tamil Nadu. Web development, app development, AI solutions, cloud services, and digital marketing case studies with proven results." />
                <meta name="keywords" content="Tanglome portfolio, Tanglome case studies, Tanglome projects, web development portfolio India, app development portfolio Tamil Nadu, AI solutions portfolio, digital marketing case studies, cloud services portfolio, software development portfolio, IT company portfolio India, Tanglome success stories, web development case studies, mobile app portfolio, AI implementation examples, digital marketing results, cloud migration case studies, software development examples, IT solutions portfolio, technology projects India, digital transformation case studies, e-commerce development portfolio, SaaS solutions portfolio, enterprise software portfolio, business automation case studies, CRM development portfolio, ERP implementation examples, mobile app development case studies, web application portfolio, custom software portfolio India, technology consulting portfolio, IT services case studies, digital marketing ROI examples, SEO success stories, paid advertising results, social media marketing portfolio, content marketing examples, email marketing case studies, conversion optimization results, landing page optimization portfolio, Google Ads success stories, Facebook Ads case studies, LinkedIn Ads examples, YouTube advertising portfolio, influencer marketing case studies"
            />
            </Helmet>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
                
                * {
                    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
                }
                
                h1, h2, h3, h4, h5, h6 {
                    font-family: 'Crimson Pro', Georgia, serif;
                }
                
                .font-mono {
                    font-family: 'JetBrains Mono', 'Courier New', monospace;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out;
                }
                
                .animate-slideIn {
                    animation: slideIn 0.5s ease-out;
                }
                
                .animate-scaleIn {
                    animation: scaleIn 0.5s ease-out;
                }
                
                .stat-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .stat-card:hover {
                    transform: translateY(-8px);
                }
                
                .project-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .project-card:hover {
                    transform: translateY(-4px);
                }
                
                .metric-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 1rem;
                }
            `}</style>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
                {/* Navigation Bar */}
                <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="text-2xl font-bold text-slate-900">
                                Tanglome
                            </div>
                            <div className="flex items-center gap-6">
                                <a href="#projects" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                                    Portfolio
                                </a>
                                <a href="#stats" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                                    Metrics
                                </a>
                                <a 
                                    href="/contact" 
                                    className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-slate-700">Available for new projects</span>
                            </div>
                            
                            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-[0.95]">
                                Digital Excellence,
                                <br />
                                <span className="text-slate-400">Delivered.</span>
                            </h1>
                            
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                                We craft high-performance websites, execute data-driven SEO strategies, build enterprise SaaS solutions, 
                                and run conversion-focused advertising campaigns that deliver measurable results.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#projects"
                                    className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 transition-all"
                                >
                                    View Our Work
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                
                                <a
                                    href="#stats"
                                    className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition-all"
                                >
                                    <BarChart3 className="w-5 h-5" />
                                    Our Results
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overall Stats Section */}
                <div id="stats" className="py-20 bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                                Performance Overview
                            </h2>
                            <p className="text-xl text-slate-300">
                                Data-driven results across all our services
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                            {overallStats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`stat-card bg-white rounded-2xl p-8 ${
                                            visibleStats ? 'animate-fadeInUp' : 'opacity-0'
                                        }`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="bg-slate-100 p-3 rounded-xl">
                                                <Icon className="w-6 h-6 text-slate-900" />
                                            </div>
                                            {stat.trendUp !== undefined && (
                                                <div className={`flex items-center gap-1 text-sm font-medium ${
                                                    stat.trendUp ? 'text-green-600' : 'text-slate-600'
                                                }`}>
                                                    {stat.trendUp ? <TrendingUp className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
                                                    {stat.trend}
                                                </div>
                                            )}
                                            {stat.trendUp === undefined && (
                                                <div className="text-sm font-medium text-slate-600">
                                                    {stat.trend}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <div className="text-5xl font-bold text-slate-900 font-mono">
                                                {stat.target}
                                            </div>
                                            <div className="text-sm font-semibold text-slate-900">
                                                {stat.label}
                                            </div>
                                            <div className="text-sm text-slate-500">
                                                {stat.detail}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Performance Metrics by Category */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {performanceMetrics.map((category, idx) => {
                                const CategoryIcon = category.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="bg-white/10 p-2 rounded-lg">
                                                <CategoryIcon className="w-5 h-5 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">
                                                {category.category}
                                            </h3>
                                        </div>
                                        
                                        <div className="metric-grid">
                                            {category.metrics.map((metric, i) => {
                                                const MetricIcon = metric.icon;
                                                return (
                                                    <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <MetricIcon className="w-4 h-4 text-slate-400" />
                                                            <div className="text-xs text-slate-400 font-medium">
                                                                {metric.label}
                                                            </div>
                                                        </div>
                                                        <div className="text-2xl font-bold text-white font-mono">
                                                            {metric.value}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                <div id="projects" className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
                                Featured Projects
                            </h2>
                            <p className="text-xl text-slate-600">
                                A selection of our recent work across various domains
                            </p>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-3 mb-16">
                            {categories.map(cat => {
                                const Icon = cat.icon;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveTab(cat.id)}
                                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                                            activeTab === cat.id
                                                ? 'bg-slate-900 text-white'
                                                : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-900'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="hidden sm:inline">{cat.label}</span>
                                        <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="project-card group bg-white rounded-2xl border-2 border-slate-200 overflow-hidden hover:border-slate-900 hover:shadow-xl"
                                >
                                    {/* Highlight Badge */}
                                    {project.highlight && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <div className="bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-current" />
                                                {project.highlight}
                                            </div>
                                        </div>
                                    )}

                                    <div className="p-8">
                                        {/* Category Badge */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`px-3 py-1 rounded-lg text-xs font-bold ${
                                                project.category === 'web' ? 'bg-blue-50 text-blue-700' :
                                                project.category === 'seo' ? 'bg-green-50 text-green-700' :
                                                project.category === 'saas' ? 'bg-purple-50 text-purple-700' :
                                                'bg-orange-50 text-orange-700'
                                            }`}>
                                                {project.category.toUpperCase()}
                                            </div>
                                            
                                            {project.demo && (
                                                <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-bold">
                                                    DEMO
                                                </div>
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-600 mb-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.slice(0, 3).map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-slate-50 text-slate-700 px-3 py-1 rounded-md text-xs font-medium border border-slate-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Impact */}
                                        <div className="bg-slate-50 rounded-lg p-4 mb-4">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <p className="text-sm font-medium text-slate-900">{project.impact}</p>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        {project.stats && (
                                            <div className="grid grid-cols-2 gap-3 mb-4">
                                                {Object.entries(project.stats).slice(0, 4).map(([key, value], i) => (
                                                    <div key={i} className="bg-slate-900 rounded-lg p-3">
                                                        <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                                                            {key}
                                                        </div>
                                                        <div className="text-lg font-bold text-white font-mono">
                                                            {value}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Metrics */}
                                        {project.metrics && (
                                            <div className="bg-slate-900 rounded-lg p-4 mb-4 space-y-2">
                                                {Object.entries(project.metrics).map(([key, value], i) => (
                                                    <div key={i} className="flex justify-between items-center text-sm">
                                                        <span className="text-slate-300 font-medium capitalize">
                                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                                        </span>
                                                        <span className="text-white font-bold font-mono">
                                                            {value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Features */}
                                        {project.features && (
                                            <div className="space-y-2 mb-4">
                                                {project.features.slice(0, 3).map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                                        <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* CTA */}
                                        {project.url !== '#' && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-3 transition-all"
                                            >
                                                View Project
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="py-20 bg-slate-900">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Ready to Start Your Project?
                        </h2>
                        
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Let's discuss how we can help you achieve your digital goals with proven strategies and measurable results.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                            >
                                Get in Touch
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            
                            <a
                                href="tel:+911234567890"
                                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all"
                            >
                                <PhoneCall className="w-5 h-5" />
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="border-t border-slate-200 bg-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="text-2xl font-bold text-slate-900">
                                Tanglome
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
                                <span className="flex items-center gap-2">
                                    <Code className="w-4 h-4" />
                                    Web Development
                                </span>
                                <span className="flex items-center gap-2">
                                    <Search className="w-4 h-4" />
                                    SEO Services
                                </span>
                                <span className="flex items-center gap-2">
                                    <Zap className="w-4 h-4" />
                                    SaaS Solutions
                                </span>
                                <span className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" />
                                    Digital Advertising
                                </span>
                            </div>
                            
                            <p className="text-sm text-slate-500">
                                © 2024 Tanglome. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Portfolio;