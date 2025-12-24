import React from "react";
import { Github, Linkedin, Facebook } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "077ccb2d-fa1c-48d6-a7f9-2357ca1cdead");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
      setResult("");
    } else {
      console.log("Error", data);
      toast.error(`Error: ${data.message}`);
      setResult(data.message);
    }
  };

  return (
    <section className="relative  bg-[#050b14] overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Background glow */}
      <div
        className="absolute inset-0 
        bg-[radial-gradient(circle_at_bottom,#0dd3e015,transparent_45%)]"
      ></div>

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-[#0dd3e0] mb-4">CONTACT</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-[#0dd3e0]">Work</span> Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I’d love to hear from you. Send me a message
            and let’s create something amazing together.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-23 items-start md:pl-25">
          {/* Form */}
          <div
            className="bg-[#0b1320]/80 backdrop-blur-md 
            border border-white/10 rounded-2xl p-8"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="mt-2 w-full px-4 py-3 rounded-lg
                  bg-[#050b14] border border-white/10
                  focus:border-[#0dd3e0]/50 outline-none text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  name="email"
                  className="mt-2 w-full px-4 py-3 rounded-lg
                  bg-[#050b14] border border-white/10
                  focus:border-[#0dd3e0]/50 outline-none text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="mt-2 w-full px-4 py-3 rounded-lg
                  bg-[#050b14] border border-white/10
                  focus:border-[#0dd3e0]/50 outline-none text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-sm font-medium
                bg-[#0dd3e0] text-[#050b14]
                hover:opacity-90 transition cursor-pointer"
              >
                Send Message
              </button>
              <span>{result}</span>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 md:items-start justify-center">
            <div className="flex items-start gap-4 ">
              <div
                className="w-10 h-10 flex items-center justify-center
                rounded-lg bg-[#0b1320]/80 border border-white/10 text-[#0dd3e0]"
              >
                @
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-sm">neerace.sh@gmail.com</p>
              </div>
            </div>



            <div className="flex items-start gap-4">
              <div
                className="w-10 h-12 flex items-center justify-center
                rounded-lg bg-[#0b1320]/80 border border-white/10 text-[#0dd3e0]"
              >
                ⌖
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-sm">Kathmandu, Nepal</p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-gray-400 mb-5">Follow me on</p>
              <div className="flex gap-4 py-3">
                <div
                  className="w-10 h-10 flex items-center justify-center
                  rounded-lg bg-[#0b1320]/80  border-white/10
                  hover:border-[#0dd3e0]/40 hover:text-[#0dd3e0]
                  transition cursor-pointer"
                >
                  <a
                    href="https://github.com/Niresh-sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center
              hover:border-[#0dd3e0] hover:text-[#0dd3e0] transition"
                  >
                    <Github size={18} />
                  </a>
                </div>
                <div
                  className="w-10 h-10 flex items-center justify-center
                  rounded-lg bg-[#0b1320]/80  border-white/10
                  hover:border-[#0dd3e0]/40 hover:text-[#0dd3e0]
                  transition cursor-pointer"
                >
                  <a
                    href="https://www.linkedin.com/in/niresh-shakya-34b362259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center
                hover:border-[#0dd3e0] hover:text-[#0dd3e0] transition"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
