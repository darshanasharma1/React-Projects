import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const basicValidate = ({ name, email }) => {
    if (!name.trim()) return { ok: false, msg: "Please enter your name" };
    if (!/^\S+@\S+\.\S+$/.test(email)) return { ok: false, msg: "Please enter a valid email" };
    return { ok: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = basicValidate(form);
    if (!valid.ok) {
      alert(valid.msg);
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      alert("Thanks — your message was submitted!");
      setForm({ name: "", email: "", phone: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="w-full min-h-screen flex items-center justify-center py-12 px-6 bg-transparent">
        <div className="max-w-6xl w-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left card */}
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h2 className="text-3xl font-extrabold text-gray-800">Get in touch:</h2>
              <p className="mt-2 text-gray-600">Fill the form to start a conversation</p>

              <div className="mt-6 space-y-5 text-gray-700">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📍</span>
                  <div className="font-semibold">Acme Inc, Street, State, Postal Code</div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  <div className="font-semibold">+44 1234567890</div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✉️</span>
                  <div className="font-semibold">info@acme.org</div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <form onSubmit={handleSubmit} className="flex flex-col justify-center space-y-4 p-2">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="py-3 px-4 rounded-lg bg-white border border-gray-300 text-gray-800"
                required
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                className="py-3 px-4 rounded-lg bg-white border border-gray-300 text-gray-800"
                required
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Telephone Number"
                className="py-3 px-4 rounded-lg bg-white border border-gray-300 text-gray-800"
              />

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 py-3 text-white font-bold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
