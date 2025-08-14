import React, { useState } from "react";
import GetInTouch from "../components/common/GetInTouch";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const validatePhone = (v) => /^[0-9+\-\s()]{7,15}$/.test(v.trim());

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validations
    if (!form.name.trim())
      return setStatus({
        loading: false,
        success: null,
        error: "Please enter your name.",
      });
    if (!validateEmail(form.email))
      return setStatus({
        loading: false,
        success: null,
        error: "Please enter a valid email.",
      });
    if (form.phone && !validatePhone(form.phone))
      return setStatus({
        loading: false,
        success: null,
        error: "Please enter a valid phone.",
      });
    if (!form.message.trim())
      return setStatus({
        loading: false,
        success: null,
        error: "Please enter your message.",
      });
    if (!form.consent)
      return setStatus({
        loading: false,
        success: null,
        error: "Please accept terms/consent.",
      });

    try {
      setStatus({ loading: true, success: null, error: null });

      // TODO: Replace with your API endpoint or email service
      // Example fetch:
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Failed to submit");
      // await res.json();

      // Simulate network
      await new Promise((r) => setTimeout(r, 900));

      setStatus({
        loading: false,
        success: "Thanks! We’ll get back to you shortly.",
        error: null,
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/23545.jpg"
            alt="Contact Pillfox Pharma"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-white/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-gray-900 uppercase text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Contact <span className="text-[#399a8c]">Us</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-800">
              R&D partnerships, contract manufacturing ya regulatory queries—hum
              aapki madad ke liye yahan hain.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "ri-mail-send-line",
              title: "Email",
              value: "pillfoxpharma@gmail.com",
              sub: "General Inquiries",
            },
            {
              icon: "ri-phone-line",
              title: "Phone",
              value: "0135-3132190",
              sub: "Mon–Fri, 10:30 AM – 6:00 PM",
            },
            {
              icon: "ri-map-pin-line",
              title: "Address",
              value:
                "Pillfox Pharma Pvt Ltd, H.in. Kh-293 S/T, Western Marg, Saidulajab, Gadaipur, South West Delhi, New Delhi, India, 110030",
              sub: "",
            },
          ].map((c, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(57,154,140,0.12)" }}
              >
                <i
                  className={`${c.icon} text-2xl`}
                  style={{ color: "#399a8c" }}
                ></i>
              </div>
              <div className="font-bold text-gray-900 text-xl">{c.title}</div>
              <div className="text-gray-800 mt-1">{c.value}</div>
              <div className="text-gray-600 text-sm">{c.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <GetInTouch />

      {/* Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            {/* Replace iframe src with your actual Google Maps embed link */}
            <div className="w-full h-72 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">
                Map Embed Placeholder (Add Google Maps iframe here)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        className="py-16"
        style={{ backgroundColor: "rgba(57,154,140,0.05)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            FAQs
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Kya NDA sign karke discuss kar sakte hain?",
                a: "Haan, hum NDA ke saath initial discovery calls arrange karte hain.",
              },
              {
                q: "Minimum order quantity (MOQ) kya hai?",
                a: "Product aur formulation ke hisaab se MOQ vary karta hai—please details share karein.",
              },
              {
                q: "Regulatory support milta hai?",
                a: "Dossier prep, submissions, labeling compliance aur audits tak full support milta hai.",
              },
              {
                q: "Cold-chain products handle karte hain?",
                a: "Haan, cold-chain handling and tracking processes available hain.",
              },
            ].map((f, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="font-semibold text-gray-900">{f.q}</div>
                <div className="text-gray-700 mt-2 text-sm">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl shadow-lg bg-white">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#399a8c" }}
              >
                <i className="ri-rocket-line text-white text-2xl"></i>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">
                  Ready to Collaborate?
                </h4>
                <p className="text-gray-600">
                  Let’s build high-quality, affordable therapies together.
                </p>
              </div>
            </div>
            <a
              href="mailto:hello@pillfoxpharma.com"
              className="px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#399a8c" }}
            >
              <i className="ri-mail-send-line mr-2"></i>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
