import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  TrendingUp,
  Users,
  Heart,
  Zap,
  ArrowRight,
  Send,
  CheckCircle2,
  Loader,
  X,
  MapPin,
  Clock,
  Award,
  Rocket,
  Star,
  Target,
  GraduationCap,
  DollarSign,
  Building2,
  Briefcase,
  TrendingDown,
  BarChart3,
  Globe,
  Lightbulb,
  Coffee,
  Code
} from 'lucide-react';

const Careers = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const salesJob = {
    title: "Sales Executive",
    urgent: true,
    location: "Coimbatore, Tamil Nadu",
    type: "Full-time",
    experience: "0-1 years",
    salary: "₹6,000 - ₹10,000 + Incentives",
    description: "We're looking for an energetic Sales Executive to drive revenue growth and build long-term client relationships. You'll be working with a passionate team to promote our IT solutions and services.",
    requirements: [
      "Strong communication and negotiation skills",
      "Experience in IT Sales / Business Development (preferred)",
      "Ability to identify leads and convert them into customers",
      "Good understanding of client relationship management",
      "Self-motivated with target-oriented mindset",
      "Team collaboration and presentation skills"
    ],
    benefits: [
      "Competitive salary + Incentives",
      "Health insurance coverage",
      "Flexible working hours",
      "Professional development and growth opportunities",
      "Team building activities",
      "Performance bonuses"
    ],
    responsibilities: [
      "Generate new business opportunities",
      "Build and maintain client relationships",
      "Achieve sales targets and KPIs",
      "Collaborate with technical teams",
      "Participate in sales strategy planning"
    ]
  };

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setLoading(false);
    window.scrollTo(0, 0);
    if (performance.navigation.type === 1) {
      navigate("/careers");
    }
    return () => setLoading(true);
  }, [navigate]);

  const validateForm = () => {
    let newErrors = {};
    if (!name.trim() || name.length < 3) newErrors.name = "Name must be at least 3 characters.";
    if (!mobile || mobile.length < 8) newErrors.mobile = "Enter a valid mobile number.";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email address.";
    if (!role.trim()) newErrors.role = "Please enter your role (Sales Executive, Web Developer, etc).";
    if (!resumeLink || !resumeLink.startsWith("http")) newErrors.resumeLink = "Please enter a valid link.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setSubmitted(false);

    const templateParams = {
      from_name: name,
      from_email: email,
      from_number: mobile,
      role: role,
      resumeLink: resumeLink,
      message: "",
    };

    try {
      const response = await emailjs.send(
        "service_fredf0g",
        "template_b3llrk4",
        templateParams,
        "GtNsxnCfPpksIv9yY"
      );

      console.log("SUCCESS!", response.status, response.text);
      setSubmitted(true);
      setName("");
      setMobile("");
      setEmail("");
      setRole("");
      setResumeLink("");
      setErrors({});
    } catch (error) {
      console.error("FAILED...", error);
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const jobPositions = [
    {
      title: "Sales Executive",
      icon: TrendingUp,
      description: salesJob.description,
      skills: salesJob.requirements,
      type: salesJob.type,
      urgent: salesJob.urgent,
      experience: salesJob.experience,
      salary: salesJob.salary,
      benefits: salesJob.benefits,
      location: salesJob.location,
      responsibilities: salesJob.responsibilities
    },
  ];

  const companyStats = [
    { number: "50+", label: "Projects Delivered", icon: Rocket, detail: "Across all services" },
    { number: "25+", label: "Happy Clients", icon: Heart, detail: "And growing" },
    { number: "15+", label: "Team Members", icon: Users, detail: "Talented professionals" },
    { number: "3+", label: "Years Experience", icon: Award, detail: "In the industry" }
  ];

  const cultureFeatures = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Work with cutting-edge technologies and modern development practices that push boundaries"
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Join a supportive team that values collaboration, knowledge sharing, and mutual growth"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options to maintain a healthy work-life balance"
    },
    {
      icon: Target,
      title: "Growth Focused",
      description: "Continuous learning opportunities, mentorship, and clear career advancement paths"
    }
  ];

  const perks = [
    { icon: DollarSign, title: "Competitive Salary", description: "Market-leading compensation packages" },
    { icon: Heart, title: "Health Benefits", description: "Comprehensive health insurance coverage" },
    { icon: GraduationCap, title: "Learning Budget", description: "Annual budget for courses and conferences" },
    { icon: Clock, title: "Flexible Hours", description: "Work when you're most productive" },
    { icon: Globe, title: "Remote Options", description: "Hybrid and remote work possibilities" },
    { icon: Award, title: "Performance Bonus", description: "Rewarding excellence and achievement" }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-12 h-12 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading careers...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Careers | Tanglome - No 1 IT Company in India & Tamil Nadu | Join Our Team</title>
        <meta name="description" content="Careers at Tanglome - No 1 IT Company in India & Tamil Nadu. Join our dynamic team. We are hiring Sales Executives, Web Developers, App Developers, AI Engineers, Cloud Architects, Digital Marketing Specialists. Apply now for exciting opportunities!" />
        <meta name="keywords" content="Tanglome careers, Tanglome jobs, Tanglome employment, Tanglome openings, IT jobs India, software jobs Tamil Nadu, web developer jobs India, mobile app developer jobs, AI engineer jobs, cloud architect jobs, digital marketing jobs, SEO specialist jobs, software engineer jobs, IT company jobs India, tech jobs Coimbatore, software developer jobs India, freshers jobs India, experienced professionals jobs, remote jobs India, hybrid work jobs, full stack developer jobs, frontend developer jobs, backend developer jobs, React developer jobs, Node.js developer jobs, Python developer jobs, Java developer jobs, mobile app developer jobs, Android developer jobs, iOS developer jobs, Flutter developer jobs, React Native developer jobs, UI UX designer jobs, graphic designer jobs, digital marketing specialist jobs, SEO jobs, SEM jobs, social media marketing jobs, content writer jobs, sales executive jobs, business development jobs, project manager jobs, scrum master jobs, devops engineer jobs, database administrator jobs, system administrator jobs, cybersecurity specialist jobs, data scientist jobs, machine learning engineer jobs, AI developer jobs, cloud engineer jobs, AWS architect jobs, software testing jobs, QA engineer jobs, product manager jobs, technical consultant jobs, IT consulting jobs, software solutions jobs, startup jobs India, tech startup jobs, SaaS jobs India, e-commerce jobs India, fintech jobs India, healthtech jobs India" />
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
                <a href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                  Home
                </a>
                <a href="/portfolio" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                  Portfolio
                </a>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="relative">
          {!showForm ? (
            <>
              {/* Hero Section */}
              <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                  >
                    <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-slate-700">We're hiring</span>
                    </div>
                    
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-[0.95]">
                      Build Your Career
                      <br />
                      <span className="text-slate-400">With Us.</span>
                    </h1>
                    
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                      Join a team where innovation meets execution. We're building exceptional digital 
                      solutions and looking for talented individuals to grow with us.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <motion.button
                        onClick={() => setShowForm(true)}
                        className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Apply Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                      
                      <motion.button
                        onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Openings
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Company Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
                  >
                    {companyStats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                          className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-slate-900 hover:shadow-lg transition-all"
                        >
                          <div className="bg-slate-100 p-3 rounded-xl inline-flex mb-4">
                            <Icon className="w-6 h-6 text-slate-900" />
                          </div>
                          <div className="text-4xl font-bold text-slate-900 mb-2 font-mono">{stat.number}</div>
                          <div className="text-sm font-semibold text-slate-900 mb-1">{stat.label}</div>
                          <div className="text-xs text-slate-500">{stat.detail}</div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </section>

              {/* Culture Section */}
              <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
                      Why Tanglome?
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                      We're building more than software—we're creating an environment where talent thrives
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cultureFeatures.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:bg-slate-750 transition-all"
                        >
                          <div className="bg-white/10 p-3 rounded-xl inline-flex mb-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                          <p className="text-slate-300 leading-relaxed text-sm">{feature.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Open Positions */}
              <section id="open-positions" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
                      Open Positions
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                      Find your next opportunity and join our growing team
                    </p>
                  </div>

                  <div className="space-y-6">
                    {jobPositions.map((job, index) => {
                      const Icon = job.icon;
                      return (
                        <motion.div
                          key={job.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="group bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-slate-900 hover:shadow-xl transition-all"
                        >
                          <div className="p-8">
                            {/* Header */}
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                              <div className="flex items-start gap-4">
                                <div className="bg-slate-900 p-4 rounded-xl">
                                  <Icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-3 mb-3">
                                    <h3 className="text-3xl font-bold text-slate-900">{job.title}</h3>
                                    {job.urgent && (
                                      <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                                        URGENT HIRING
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex flex-wrap gap-4 text-slate-600 text-sm">
                                    <div className="flex items-center gap-2">
                                      <MapPin className="w-4 h-4" />
                                      <span className="font-medium">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Clock className="w-4 h-4" />
                                      <span className="font-medium">{job.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <GraduationCap className="w-4 h-4" />
                                      <span className="font-medium">{job.experience}</span>
                                    </div>
                                    {job.salary && (
                                      <div className="flex items-center gap-2">
                                        <DollarSign className="w-4 h-4" />
                                        <span className="font-medium">{job.salary}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowForm(true)}
                                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg transition-all inline-flex items-center gap-2"
                              >
                                Apply Now
                                <ArrowRight className="w-4 h-4" />
                              </motion.button>
                            </div>

                            {/* Description */}
                            <p className="text-slate-600 leading-relaxed mb-8">
                              {job.description}
                            </p>

                            {/* Requirements & Benefits Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              {/* Requirements */}
                              <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                  <Target className="w-5 h-5" />
                                  Key Requirements
                                </h4>
                                <div className="space-y-2">
                                  {job.skills.map((skill, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-slate-700">
                                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0" />
                                      <span className="text-sm">{skill}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Benefits */}
                              {job.benefits && (
                                <div>
                                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5" />
                                    Benefits & Perks
                                  </h4>
                                  <div className="space-y-2">
                                    {job.benefits.map((benefit, idx) => (
                                      <div key={idx} className="flex items-start gap-3 text-slate-700">
                                        <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-sm">{benefit}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Perks & Benefits */}
              <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                      Perks & Benefits
                    </h2>
                    <p className="text-xl text-slate-600">
                      We invest in our team's success and well-being
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {perks.map((perk, index) => {
                      const Icon = perk.icon;
                      return (
                        <motion.div
                          key={perk.title}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-slate-100 transition-all"
                        >
                          <div className="bg-slate-900 p-3 rounded-lg inline-flex mb-4">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{perk.title}</h3>
                          <p className="text-sm text-slate-600">{perk.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </>
          ) : (
            /* Application Form */
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border-2 border-slate-200 rounded-2xl p-8 md:p-12 shadow-lg"
                >
                  {/* Form Header */}
                  <div className="mb-8">
                    <button
                      onClick={() => setShowForm(false)}
                      className="text-slate-600 hover:text-slate-900 font-medium mb-6 inline-flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      Back to Careers
                    </button>
                    
                    <div className="bg-slate-900 p-4 rounded-xl inline-flex mb-6">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-3">
                      Apply Now
                    </h2>
                    <p className="text-slate-600 text-lg">
                      Ready to join our team? Fill out the form below and we'll get back to you soon.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="text-center py-12"
                      >
                        <div className="bg-green-100 p-4 rounded-xl inline-flex mb-6">
                          <CheckCircle2 className="w-12 h-12 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Application Submitted!</h3>
                        <p className="text-slate-600 mb-8 max-w-md mx-auto">
                          Thank you for your interest in joining Tanglome. We'll review your application and contact you soon.
                        </p>
                        <motion.button
                          onClick={() => {
                            setSubmitted(false);
                            setShowForm(false);
                          }}
                          className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Back to Careers
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        {[
                          { label: "Full Name", value: name, onChange: setName, error: errors.name, type: "text", placeholder: "John Doe" },
                          { label: "Phone Number", value: mobile, onChange: setMobile, error: errors.mobile, type: "tel", placeholder: "+91 98765 43210" },
                          { label: "Email Address", value: email, onChange: setEmail, error: errors.email, type: "email", placeholder: "john@example.com" },
                          { label: "Position", value: role, onChange: setRole, error: errors.role, type: "text", placeholder: "Sales Executive" },
                          { label: "Resume / Portfolio Link", value: resumeLink, onChange: setResumeLink, error: errors.resumeLink, type: "url", placeholder: "https://drive.google.com/..." }
                        ].map((field, index) => (
                          <motion.div
                            key={field.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <label className="block text-sm font-semibold text-slate-900 mb-2">
                              {field.label}
                            </label>
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                              value={field.value}
                              onChange={(e) => field.onChange(field.type === 'tel' ? e.target.value.replace(/\D/g, '') : e.target.value)}
                              className={`w-full px-4 py-3 rounded-lg bg-slate-50 text-slate-900 border-2 ${
                                field.error ? 'border-red-500' : 'border-slate-200'
                              } focus:border-slate-900 focus:outline-none transition-all`}
                            />
                            {field.error && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="text-red-600 text-sm mt-2 flex items-center gap-2"
                              >
                                <X className="w-4 h-4" />
                                {field.error}
                              </motion.p>
                            )}
                          </motion.div>
                        ))}

                        <motion.button
                          type="submit"
                          disabled={submitting}
                          className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-3 mt-8"
                          whileHover={{ scale: submitting ? 1 : 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {submitting ? (
                            <>
                              <Loader className="w-5 h-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Application
                              <Send className="w-5 h-5" />
                            </>
                          )}
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>
          )}
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
                  <BarChart3 className="w-4 h-4" />
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

export default Careers;