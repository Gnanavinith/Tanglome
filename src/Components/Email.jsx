import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Email = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!name.trim() || name.length < 3) newErrors.name = "Name must be at least 3 characters.";
    if (!mobile || mobile.length < 8) newErrors.mobile = "Enter a valid mobile number.";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email address.";
    if (!message.trim() || message.length < 10) newErrors.message = "Message must be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const serviceId = "service_fredf0g";
    const templateId = "template_bsxc4d9";
    const publicKey = "GtNsxnCfPpksIv9yY";

    const templateParams = { from_name: name, from_email: email, from_number: mobile, message: message };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("Email Sent Successfully:", response);
      setSuccess("Your message has been successfully sent, We will get back to you as soon as possible, Thank you!");
  
      // Clear form fields
      setName("");
      setMobile("");
      setEmail("");
      setMessage("");
      setErrors({});
  
      // Remove the success message after 5 seconds
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    })
    .catch((error) => {
      console.error("Error Sending Email:", error);
      setSuccess("Failed to send message, Please try again!");
  
      // Remove error message after 5 seconds
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return (

    <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700  px-6 py-16">
    {/* Left Side Content */}
    <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 px-4">
      <h2 className="text-6xl font-bold text-gray-300 ">Let’s talk!</h2>
      <p className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
           text-transparent bg-clip-text text-lg font-semibold  mt-5">
  Got a project in mind? Let’s collaborate and bring your ideas to life!  
  Fill out the form, and we’ll get back to you Soon.
</p>

    </div>
  
    {/* Right Side Form */}
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-gray-800 rounded-2xl  max-w-lg w-full md:w-1/2 text-gray-300 text-sm">
  <div>
    <input
      type="text"
      placeholder="Enter Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className={`border border-gray-500 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 placeholder:text-white ${
        errors.name ? "border-red-500" : ""
      }`}
    />
    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
  </div>

  <div>
    <PhoneInput
      country={"in"}
      value={mobile}
      onChange={(phone) => setMobile(phone)}
      inputClass="!w-full !border-gray-100 !rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-white"
    />
    {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
  </div>

  <div>
    <input
      type="email"
      placeholder="Enter Your Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className={`border border-gray-500 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 placeholder:text-white ${
        errors.email ? "border-red-500" : ""
      }`}
    />
    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
  </div>

  <div>
    <textarea
      cols="30"
      rows="5"
      placeholder="Enter Your Message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className={`border border-gray-500 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 placeholder:text-white ${
        errors.message ? "border-red-500" : ""
      }`}
    ></textarea>
    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
  </div>

  <button
    type="submit"
    disabled={loading}
    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition duration-300 disabled:bg-gray-400"
  >
    {loading ? "Sending..." : "Send Email"}
  </button>

  {success && <p className="text-center font-semibold mt-2">{success}</p>}
</form>

  </div>
  
  );
};

export default Email;
