import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight, MdBarChart, MdTrendingUp, MdInsights, MdDashboard, MdShowChart, MdTimeline, MdDataUsage, MdPieChart, MdAreaChart, MdGroups, MdRocketLaunch } from "react-icons/md";
import { Link } from "react-router-dom";
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DataVisualization = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Simulate loading for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Chart data
  const chartData = [
    { name: "Jan", revenue: 4000, users: 2400 },
    { name: "Feb", revenue: 3000, users: 1398 },
    { name: "Mar", revenue: 2000, users: 9800 },
    { name: "Apr", revenue: 2780, users: 3908 },
    { name: "May", revenue: 1890, users: 4800 },
    { name: "Jun", revenue: 2390, users: 3800 }
  ];

  // Skeleton components
  const SkeletonCard = () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
    </div>
  );

  if (isLoading) {
    return (
      <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-10 text-gray-900 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* LEFT SKELETON */}
            <div className="space-y-6 md:space-y-8">
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
              <div>
                <div className="h-12 sm:h-16 bg-gray-200 rounded w-4/5 mb-4"></div>
                <div className="h-12 sm:h-16 bg-gray-200 rounded w-3/5"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5 mb-6"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="p-4 bg-black/5 rounded-xl border border-[#A556F8]/40">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-200 rounded"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="h-12 bg-gray-200 rounded w-full sm:w-64"></div>
            </div>
            
            {/* RIGHT SKELETON */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="p-6 bg-black/5 rounded-2xl border border-[#A556F8]/40">
                  <div className="h-12 w-12 bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-5 bg-gray-200 rounded w-4/5 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <Helmet>
        <title>Tanglome – Data Visualization & Business Insights</title>
        <meta
          name="description"
          content="Discover how Tanglome helps businesses make smarter decisions through data visualization and actionable insights. Book your Web & App eCommerce project and get 3 months free access."
        />
      </Helmet>

      <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-10 text-gray-900 relative">

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

        {/* Soft purple blobs - constrained to prevent horizontal overflow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#A556F8]/20 rounded-full blur-3xl max-w-[100vw] max-h-[100vh]" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4922E5]/20 rounded-full blur-3xl max-w-[100vw] max-h-[100vh]" />

        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

            {/* LEFT - Content First Approach (Psychology) */}
            <div className="order-1">
              <motion.div className="space-y-6 md:space-y-8" variants={itemVariants}>

              {/* Badge - Social Proof & Trust */}
              <div className="inline-flex items-center gap-2 bg-[#A556F8]/10 px-3 sm:px-4 py-2 rounded-full border border-[#A556F8]/40 backdrop-blur-sm">
                <MdInsights className="text-[#A556F8] text-lg sm:text-xl" />
                <span className="text-[#4922E5] font-semibold font-['Space Grotesk'] text-sm sm:text-base">
                  Tanglome Smart Analytics
                </span>
              </div>

              {/* Headline - Clear Value Proposition */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#020202] leading-tight">
                Transform <span className="text-[#A556F8]">Data</span> Into{" "}
                <span className="text-[#4922E5]">Action</span>
              </h1>

              {/* Subheadline - Benefit-Focused */}
              <p className="text-base sm:text-lg md:text-xl text-[#4922E5]/80 leading-relaxed">
                Turn raw numbers into real business decisions using interactive dashboards and real-time insights.
              </p>

              {/* Feature Grid - Scannable Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {
                  [
                    { icon: MdBarChart, text: "Revenue Analytics", desc: "Track your income" },
                    { icon: MdTrendingUp, text: "Growth Tracking", desc: "Monitor progress" },
                    { icon: MdInsights, text: "Customer Insights", desc: "Know your users" },
                    { icon: MdShowChart, text: "Live Dashboards", desc: "Real-time data" }
                  ].map((f,i)=>(
                    <div 
                      key={i} 
                      className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-[#A556F8]/30 hover:border-[#A556F8]/60 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#A556F8]/10 to-[#4922E5]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <f.icon className="text-[#A556F8] text-xl sm:text-2xl"/>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-[#020202] text-base sm:text-lg mb-1">
                            {f.text}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#4922E5]/60">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>

              {/* Special Offer - Urgency & Scarcity */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-[#A556F8]/10 to-[#4922E5]/10 rounded-2xl border border-[#A556F8]/40 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#A556F8] to-[#4922E5] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    🎁
                  </div>
                  <div className="flex-1">
                    <p className="text-[#4922E5]/90 text-sm sm:text-base leading-relaxed">
                      Get <span className="text-[#020202] font-bold text-base sm:text-lg">3 months free analytics</span>{" "}
                      with any Web or App project. Limited time offer!
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA - Clear Action with Low Friction */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://wa.me/919585458794" target="_blank" rel="noopener noreferrer" className="block">
                    <button className="w-full px-6 py-4 bg-white text-[#4922E5] font-bold rounded-2xl shadow-lg border-2 border-[#4922E5] hover:bg-[#4922E5] hover:text-white transition-colors">
                      <span className="flex items-center justify-center gap-2">
                        <MdRocketLaunch className="text-xl" />
                        <span>WhatsApp Us</span>
                      </span>
                    </button>
                  </a>
                  <Link to="/schedule-meeting" className="block">
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95">
                      <span className="flex items-center justify-center gap-2">
                        <MdRocketLaunch className="text-xl" />
                        <span>Claim Free Access</span>
                        <MdKeyboardArrowRight className="text-xl" />
                      </span>
                    </button>
                  </Link>
                </div>
                <p className="text-xs sm:text-sm text-[#4922E5]/60 text-center sm:text-left">
                  No credit card required • Cancel anytime
                </p>
              </div>

            </motion.div>
          </div>

            {/* RIGHT - Interactive Dashboard (Shows on Desktop, Simplified on Mobile) */}
            <div className="space-y-4 md:space-y-6 order-2">
              
              {/* Mobile: Tabbed Interface for Better UX */}
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {['overview', 'sources', 'conversion'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white shadow-md'
                        : 'bg-white/80 text-[#4922E5] border border-[#A556F8]/40'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Main Dashboard Card */}
              <div className={`bg-white rounded-2xl sm:rounded-3xl border shadow-xl p-4 sm:p-6 md:p-8 ${activeTab === 'overview' ? 'block' : 'hidden lg:block'}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
                  <div className="flex items-center gap-2">
                    <MdDashboard className="text-[#A556F8] text-xl sm:text-2xl" />
                    <span className="font-bold text-[#020202] text-lg sm:text-xl">Analytics Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 text-xs sm:text-sm font-medium">Live Data</span>
                  </div>
                </div>

                {/* Chart Visualization - Responsive Height */}
                <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-r from-[#A556F8]/5 to-[#4922E5]/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 border border-[#A556F8]/40">
                  <Bar 
                    data={{
                      labels: chartData.map(item => item.name),
                      datasets: [
                        {
                          label: 'Revenue',
                          data: chartData.map(item => item.revenue),
                          backgroundColor: 'rgba(165, 86, 248, 0.6)',
                          borderColor: 'rgba(165, 86, 248, 1)',
                          borderWidth: 1,
                          borderRadius: 4,
                        },
                        {
                          label: 'Users',
                          data: chartData.map(item => item.users),
                          backgroundColor: 'rgba(73, 34, 229, 0.6)',
                          borderColor: 'rgba(73, 34, 229, 1)',
                          borderWidth: 1,
                          borderRadius: 4,
                        }
                      ]
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'top',
                          labels: {
                            usePointStyle: true,
                            padding: 10,
                            font: {
                              size: 12
                            }
                          }
                        },
                        title: {
                          display: true,
                          text: 'Revenue & Users Analysis',
                          font: {
                            size: 14,
                            weight: 'bold'
                          }
                        }
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            color: 'rgba(165, 86, 248, 0.1)'
                          },
                          ticks: {
                            font: {
                              size: 11
                            }
                          }
                        },
                        x: {
                          grid: {
                            color: 'rgba(165, 86, 248, 0.1)'
                          },
                          ticks: {
                            font: {
                              size: 11
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>

                {/* Metrics Grid - Progressive Disclosure */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#A556F8]/5 to-transparent rounded-lg sm:rounded-xl border border-[#A556F8]/40 hover:border-[#A556F8]/60 hover:shadow-md transition-all duration-300 group">
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <MdTrendingUp className="text-[#A556F8] text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-[#A556F8] text-xl sm:text-2xl md:text-3xl font-bold">+42%</p>
                      <p className="text-xs sm:text-sm text-[#4922E5]/70 font-medium">Revenue</p>
                    </div>
                  </div>

                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#4922E5]/5 to-transparent rounded-lg sm:rounded-xl border border-[#4922E5]/40 hover:border-[#4922E5]/60 hover:shadow-md transition-all duration-300 group">
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <MdGroups className="text-[#4922E5] text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-[#4922E5] text-xl sm:text-2xl md:text-3xl font-bold">1.2K</p>
                      <p className="text-xs sm:text-sm text-[#4922E5]/70 font-medium">Users</p>
                    </div>
                  </div>

                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#A556F8]/5 to-transparent rounded-lg sm:rounded-xl border border-[#A556F8]/40 hover:border-[#A556F8]/60 hover:shadow-md transition-all duration-300 group">
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <MdInsights className="text-[#A556F8] text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-[#A556F8] text-xl sm:text-2xl md:text-3xl font-bold">87%</p>
                      <p className="text-xs sm:text-sm text-[#4922E5]/70 font-medium">Engaged</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Charts - Desktop: Grid, Mobile: Tabs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                
                {/* Traffic Sources */}
                <div className={`bg-white rounded-xl sm:rounded-2xl border p-4 sm:p-6 shadow-lg ${activeTab === 'sources' ? 'block' : 'hidden lg:block'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <MdPieChart className="text-[#A556F8] text-xl sm:text-2xl" />
                    <h3 className="font-bold text-[#020202] text-base sm:text-lg">Traffic Sources</h3>
                  </div>
                  <div className="h-48 sm:h-56">
                    <Pie 
                      data={{
                        labels: ['Direct', 'Social', 'Referral', 'Organic'],
                        datasets: [{
                          data: [35, 25, 20, 20],
                          backgroundColor: [
                            '#A556F8',
                            '#4922E5',
                            '#7C3AED',
                            '#8B5CF6'
                          ],
                          borderColor: '#ffffff',
                          borderWidth: 2
                        }]
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'bottom',
                            labels: {
                              usePointStyle: true,
                              padding: 8,
                              font: {
                                size: 12
                              }
                            }
                          },
                          tooltip: {
                            callbacks: {
                              label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${percentage}%`;
                              }
                            }
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Conversion Rate */}
                <div className={`bg-white rounded-xl sm:rounded-2xl border p-4 sm:p-6 shadow-lg ${activeTab === 'conversion' ? 'block' : 'hidden lg:block'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <MdAreaChart className="text-[#4922E5] text-xl sm:text-2xl" />
                    <h3 className="font-bold text-[#020202] text-base sm:text-lg">Conversion Rate</h3>
                  </div>
                  <div className="h-48 sm:h-56">
                    <Line
                      data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [
                          {
                            label: 'Conversion Rate %',
                            data: [2.1, 2.4, 2.8, 3.0, 3.1, 3.2],
                            fill: true,
                            borderColor: '#4922E5',
                            backgroundColor: 'rgba(73, 34, 229, 0.1)',
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 4,
                            pointHoverRadius: 6,
                            pointBackgroundColor: '#4922E5',
                            pointBorderColor: '#ffffff',
                            pointBorderWidth: 2,
                          }
                        ]
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false
                          },
                          tooltip: {
                            callbacks: {
                              label: function(context) {
                                return `${context.parsed.y}%`;
                              }
                            }
                          }
                        },
                        scales: {
                          y: {
                            min: 1,
                            max: 4,
                            grid: {
                              color: 'rgba(73, 34, 229, 0.1)'
                            },
                            ticks: {
                              callback: function(value) {
                                return value + '%';
                              },
                              font: {
                                size: 11
                              }
                            }
                          },
                          x: {
                            grid: {
                              color: 'rgba(73, 34, 229, 0.1)'
                            },
                            ticks: {
                              font: {
                                size: 11
                              }
                            }
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Social Proof - Trust Building */}
              <div className="lg:hidden bg-white/80 backdrop-blur-sm rounded-xl border border-[#A556F8]/20 p-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A556F8] to-[#4922E5] border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#4922E5]/80">
                  <span className="font-bold text-[#020202]">500+</span> businesses trust our analytics
                </p>
              </div>

            </div>

          </div>
        </motion.div>
    </section>
  </>
  );
};

export default DataVisualization;