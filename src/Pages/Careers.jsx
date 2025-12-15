import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  Sparkles, 
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
  Building,
  Rocket,
  Star,
  Target,
  Calendar,
  Briefcase,
  GraduationCap,
  DollarSign
} from 'lucide-react';

const Careers = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [activeJob, setActiveJob] = useState(0);

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
      gradient: "from-pink-500 to-rose-500",
      description: salesJob.description,
      skills: salesJob.requirements,
      type: `${salesJob.type} • ${salesJob.location}`,
      urgent: salesJob.urgent,
      experience: salesJob.experience,
      salary: salesJob.salary,
      benefits: salesJob.benefits,
      location: salesJob.location,
      responsibilities: salesJob.responsibilities
    },
  ];

  const companyStats = [
    { number: "50+", label: "Projects Completed", icon: Rocket },
    { number: "25+", label: "Happy Clients", icon: Heart },
    { number: "15+", label: "Team Members", icon: Users },
    { number: "3+", label: "Years Experience", icon: Award }
  ];

  const cultureFeatures = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "Work with cutting-edge technologies and modern development practices",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Join a supportive team that values collaboration and knowledge sharing",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options for optimal work-life balance",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: Target,
      title: "Growth Focused",
      description: "Continuous learning opportunities and career advancement paths",
      color: "from-green-400 to-emerald-500"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent border-t-cyan-400 border-r-pink-400"></div>
            <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-cyan-400 opacity-20"></div>
          </div>
          <p className="text-gray-400 mt-4">Loading Careers...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Careers - Join Tanglome Team</title>
        <meta name="description" content="Join Tanglome and be part of a dynamic team. We are hiring Sales Executives, Web Developers, App Developers, Software Developers. Apply now!" />
        <meta name="keywords" content="Careers, Tanglome Jobs, Sales Executive Jobs, Web Developer, App Developer, Software Developer, Apply Online" />
        <meta name="author" content="Tanglome" />
        <meta property="og:title" content="Careers - Join Tanglome Team" />
        <meta property="og:description" content="We are hiring! Join Tanglome and start your career with us." />
        <meta property="og:url" content="https://tanglome.com/careers" />
        <meta property="og:image" content="https://tanglome.com/careers-preview-image.png" />
        <meta name="twitter:title" content="Careers at Tanglome" />
        <meta name="twitter:description" content="Join Tanglome team - Sales Executives, Web Developers, App Developers, Software Developers." />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10">
          {!showForm ? (
            <>
              {/* Hero Section */}
              <section className="px-6 py-20">
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                  >
                   

                    <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 text-transparent bg-clip-text">
                      Join Our Team
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                      Build your career with Tanglome and be part of innovative solutions that shape the future of technology. 
                      We're looking for passionate individuals ready to make an impact.
                    </p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        onClick={() => setShowForm(true)}
                        className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Apply Now
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                      <motion.button
                        onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
                        className="group relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl text-lg border border-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Open Positions
                      </motion.button>
                    </motion.div>
                  </motion.div>

                  {/* Company Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                  >
                    {companyStats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                          className="text-center group"
                        >
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                          <div className="text-gray-400 text-sm">{stat.label}</div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </section>

              {/* Open Positions Section */}
              <section id="open-positions" className="px-6 py-16">
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                      Open Positions
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                      Explore our current openings and find the perfect role for your skills and ambitions.
                    </p>
                  </motion.div>

                  {/* Job Cards */}
                  <div className="space-y-8">
                    {jobPositions.map((job, index) => {
                      const IconComponent = job.icon;
                      return (
                        <motion.div
                          key={job.title}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
                        >
                          {/* Background Glow */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${job.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                          
                          <div className="relative z-10">
                            {/* Header */}
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                              <div className="flex items-start gap-4">
                                <div className={`p-4 bg-gradient-to-r ${job.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                                  <IconComponent className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-3xl font-bold text-white">{job.title}</h3>
                                    {job.urgent && (
                                      <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                                        URGENT HIRING
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex flex-wrap gap-4 text-gray-400">
                                    <div className="flex items-center gap-2">
                                      <MapPin className="w-4 h-4" />
                                      <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Clock className="w-4 h-4" />
                                      <span>{job.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <GraduationCap className="w-4 h-4" />
                                      <span>{job.experience}</span>
                                    </div>
                                    {job.salary && (
                                      <div className="flex items-center gap-2">
                                        <DollarSign className="w-4 h-4" />
                                        <span>{job.salary}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowForm(true)}
                                className="group/btn bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-2"
                              >
                                Apply Now
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                              </motion.button>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                              {job.description}
                            </p>

                            {/* Requirements & Benefits Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              {/* Requirements */}
                              <div>
                                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                  <Target className="w-5 h-5 text-cyan-400" />
                                  Key Requirements
                                </h4>
                                <div className="space-y-2">
                                  {job.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="flex items-center gap-3 text-gray-300">
                                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                      {skill}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Benefits */}
                              {job.benefits && (
                                <div>
                                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-purple-400" />
                                    Benefits & Perks
                                  </h4>
                                  <div className="space-y-2">
                                    {job.benefits.map((benefit, benefitIndex) => (
                                      <div key={benefitIndex} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                        {benefit}
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

              {/* Culture & Benefits Section */}
              <section className="px-6 py-20">
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
                      Why Choose Tanglome?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                      We're building more than just software - we're building an amazing workplace culture.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cultureFeatures.map((feature, index) => {
                      const IconComponent = feature.icon;
                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-500 text-center"
                        >
                          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </>
          ) : (
            /* Application Form */
            <section className="px-6 py-16">
              <div className="max-w-2xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700"
                >
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6">
                      <Send className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Apply Now
                    </h2>
                    <p className="text-gray-300 text-lg">
                      Ready to join our amazing team? Let's get started!
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-center py-12"
                      >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-6">
                          <CheckCircle2 className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-green-400 mb-4">Application Submitted!</h3>
                        <p className="text-gray-300 mb-8">
                          Thank you for your interest! We'll review your application and get back to you soon.
                        </p>
                        <motion.button
                          onClick={() => {
                            setSubmitted(false);
                            setShowForm(false);
                          }}
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Back to Careers
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        {[
                          { label: "Your Full Name", value: name, onChange: setName, error: errors.name, type: "text" },
                          { label: "Your Phone Number", value: mobile, onChange: setMobile, error: errors.mobile, type: "tel" },
                          { label: "Your Email Address", value: email, onChange: setEmail, error: errors.email, type: "email" },
                          { label: "Position you're applying for", value: role, onChange: setRole, error: errors.role, type: "text" },
                          { label: "Resume / Portfolio Link", value: resumeLink, onChange: setResumeLink, error: errors.resumeLink, type: "url" }
                        ].map((field, index) => (
                          <motion.div
                            key={field.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <input
                              type={field.type}
                              placeholder={field.label}
                              value={field.value}
                              onChange={(e) => field.onChange(field.type === 'tel' ? e.target.value.replace(/\D/g, '') : e.target.value)}
                              className={`w-full p-4 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 border-2 ${
                                field.error ? 'border-red-500' : 'border-gray-600'
                              } focus:border-cyan-500 focus:outline-none transition-all duration-300`}
                            />
                            {field.error && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="text-red-400 text-sm mt-2 flex items-center gap-2"
                              >
                                <X className="w-4 h-4" />
                                {field.error}
                              </motion.p>
                            )}
                          </motion.div>
                        ))}

                        {/* Submit Buttons */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex gap-4 pt-4"
                        >
                          <motion.button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="flex-1 bg-gray-600/50 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Back
                          </motion.button>
                          <motion.button
                            type="submit"
                            disabled={submitting}
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
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
                        </motion.div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Careers;