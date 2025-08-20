import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

const Careers = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      message: `New Career Application:\nName: ${name}\nPhone: ${mobile}\nEmail: ${email}\nRole: ${role}\nResume/Portfolio: ${resumeLink}`,
    };

    try {
      const response = await emailjs.send(
        "service_cj3zjnu",
        "template_dxowdcc",
        templateParams,
        "8xd-WGUEaxrhBsGCg"
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
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

      <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-yellow-500 mb-4 mt-10">Join Our Team</h1>
            <p className="text-xl text-gray-300">
              We’re hiring talented professionals — Sales Executives are encouraged to apply.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className={`w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border ${errors.name ? 'border-red-500' : 'border-gray-600'}`} />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input type="tel" placeholder="Your Phone Number" value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))} className={`w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border ${errors.mobile ? 'border-red-500' : 'border-gray-600'}`} />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
            </div>

            <div>
              <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border ${errors.email ? 'border-red-500' : 'border-gray-600'}`} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input type="text" placeholder="Your Role (Sales Executive, Web Developer etc)" value={role} onChange={(e) => setRole(e.target.value)} className={`w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border ${errors.role ? 'border-red-500' : 'border-gray-600'}`} />
              {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
            </div>

            <div>
              <input type="text" placeholder="Resume / Portfolio Link" value={resumeLink} onChange={(e) => setResumeLink(e.target.value)} className={`w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border ${errors.resumeLink ? 'border-red-500' : 'border-gray-600'}`} />
              {errors.resumeLink && <p className="text-red-500 text-sm mt-1">{errors.resumeLink}</p>}
            </div>

            <button type="submit" disabled={submitting} className="w-full bg-blue-600 py-3 rounded-lg font-bold text-lg hover:bg-blue-500 transition disabled:opacity-50">
              {submitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <span className="animate-spin h-5 w-5 border-b-2 border-white rounded-full"></span>
                  <span>Submitting...</span>
                </div>
              ) : "Submit Application"}
            </button>

            {submitted && (
              <p className="text-green-400 text-center font-semibold">
                ✅ Application submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Careers;
