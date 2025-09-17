


import Image from "next/image";
import { profileData } from "../data/profileData";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  return (
  <div className="font-sans bg-gradient-to-br from-slate-200 via-slate-100 to-white min-h-screen w-full">
      {/* Sticky Navbar */}
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-700 to-slate-700 bg-clip-text text-transparent tracking-tight">{profileData.name}</span>
          <ul className="flex gap-2 md:gap-6 text-sm md:text-base font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-3 py-2 rounded hover:bg-slate-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 md:pt-24 max-w-6xl mx-auto px-4">
        {/* Hero Section */}
  <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-10 min-h-[80vh] py-12 md:py-24 animate-fade-in">
          <div className="flex-1 flex flex-col items-start justify-center gap-6">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-700 to-slate-700 bg-clip-text text-transparent drop-shadow-lg tracking-tight animate-slide-in-up">
              {profileData.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 font-medium italic animate-fade-in delay-100">
              GenAI Developer | Data Scientist | Machine Learning Engineer
            </p>
            <div className="flex gap-4 mt-2 animate-fade-in delay-200">
              <a
                href={profileData.references.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-lg text-indigo-600 hover:text-indigo-800 transition flex items-center justify-center"
                title="LinkedIn"
                style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
              >
                <svg width="28" height="28" fill="currentColor" className="inline"><path d="M16 16h-3v-4c0-1-.5-2-2-2s-2 1-2 2v4H6V6h3v1c.5-.7 1.5-1 2.5-1C15 6 16 8 16 10.5V16zM4 4a2 2 0 11.001 3.999A2 2 0 014 4zm-1.5 12h3V6h-3v10z"/></svg>
              </a>
              <a
                href={`mailto:${profileData.references.email}`}
                className="bg-white p-2 rounded-full shadow-lg text-slate-600 hover:text-slate-800 transition flex items-center justify-center"
                title="Email"
                style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
              >
                <svg width="28" height="28" fill="currentColor" className="inline"><path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2-.5a.5.5 0 00-.5.5v.217l7 4.2 7-4.2V4a.5.5 0 00-.5-.5H4zm13 2.383l-6.646 3.987a1 1 0 01-1.08 0L2 5.883V14a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V5.883z"/></svg>
              </a>
              <a
                href={`tel:${profileData.references.phone.replace(/\s+/g, '')}`}
                className="bg-white p-2 rounded-full shadow-lg text-slate-700 hover:text-slate-900 transition flex items-center justify-center"
                title="Call"
                style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
              >
                <svg width="28" height="28" fill="currentColor" className="inline"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M10 14a6 6 0 006 6v2a8 8 0 01-8-8h2z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center animate-fade-in delay-300">
            <div className="relative group">
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-slate-300 via-indigo-200 to-white blur-lg opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500"></span>
              <Image
                src="/me.jpg"
                alt={profileData.name}
                width={340}
                height={340}
                className="relative rounded-full border-4 border-white shadow-xl object-cover z-10 w-64 h-64 md:w-80 md:h-80"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-indigo-700 mb-4 tracking-wide">About Me</h2>
              <p className="text-lg text-slate-800 leading-relaxed mb-4">{profileData.summary}</p>
              <div className="flex gap-4 mt-4">
                <a href={profileData.references.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition"><svg width="28" height="28" fill="currentColor" className="inline"><path d="M16 16h-3v-4c0-1-.5-2-2-2s-2 1-2 2v4H6V6h3v1c.5-.7 1.5-1 2.5-1C15 6 16 8 16 10.5V16zM4 4a2 2 0 11.001 3.999A2 2 0 014 4zm-1.5 12h3V6h-3v10z"/></svg></a>
                <a href={`mailto:${profileData.references.email}`} className="text-slate-600 hover:text-slate-800 transition"><svg width="28" height="28" fill="currentColor" className="inline"><path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2-.5a.5.5 0 00-.5.5v.217l7 4.2 7-4.2V4a.5.5 0 00-.5-.5H4zm13 2.383l-6.646 3.987a1 1 0 01-1.08 0L2 5.883V14a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V5.883z"/></svg></a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 animate-fade-in">
        <h2 className="text-3xl font-bold text-indigo-700 mb-10 tracking-wide text-center">Experience</h2>
      <ol className="relative border-l-4 border-indigo-300 ml-4">
            {profileData.experience.map((exp, idx) => (
              <li key={exp.company + exp.role} className="mb-12 ml-6 animate-slide-in-up">
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-gradient-to-tr from-indigo-400 to-slate-400 rounded-full ring-4 ring-white text-white font-bold text-lg">{idx + 1}</span>
                <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <span className="font-bold text-slate-900 text-lg">{exp.role}</span>
                    <span className="text-xs text-slate-500 font-mono">{exp.duration}</span>
                  </div>
                  <div className="text-indigo-700 font-semibold">{exp.company}</div>
                  <div className="text-slate-700 text-base mt-1">{exp.description}</div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 animate-fade-in">
          <h2 className="text-3xl font-bold text-slate-700 mb-10 tracking-wide text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {profileData.projects.map((proj) => (
              <div
                key={proj.name}
                className="group bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6 flex flex-col items-start hover:scale-105 hover:shadow-2xl transition-transform duration-300 border border-slate-200 relative overflow-hidden animate-slide-in-up"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-slate-200 via-slate-100 to-white z-0" />
                <div className="z-10 relative">
                  <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{proj.name}</h3>
                  <p className="text-slate-700 text-base mb-4">{proj.description}</p>
                  {proj.link && proj.link !== "#" && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-slate-400 text-white font-semibold text-xs shadow hover:scale-105 transition-transform mt-1"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 animate-fade-in">
          <h2 className="text-3xl font-bold text-indigo-700 mb-10 tracking-wide text-center">Contact</h2>
          <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <input type="text" name="name" placeholder="Your Name" className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-400 outline-none" required />
                <input type="email" name="email" placeholder="Your Email" className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-400 outline-none" required />
              </div>
              <textarea name="message" placeholder="Your Message" rows={4} className="px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-400 outline-none resize-none" required />
              <button type="submit" className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-slate-600 text-white font-bold shadow hover:scale-105 transition-transform">Send Message</button>
            </form>
            <div className="flex gap-6 justify-center mt-8">
              <a href={profileData.references.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition"><svg width="32" height="32" fill="currentColor" className="inline"><path d="M16 16h-3v-4c0-1-.5-2-2-2s-2 1-2 2v4H6V6h3v1c.5-.7 1.5-1 2.5-1C15 6 16 8 16 10.5V16zM4 4a2 2 0 11.001 3.999A2 2 0 014 4zm-1.5 12h3V6h-3v10z"/></svg></a>
              <a href={`mailto:${profileData.references.email}`} className="text-slate-600 hover:text-slate-800 transition"><svg width="32" height="32" fill="currentColor" className="inline"><path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2-.5a.5.5 0 00-.5.5v.217l7 4.2 7-4.2V4a.5.5 0 00-.5-.5H4zm13 2.383l-6.646 3.987a1 1 0 01-1.08 0L2 5.883V14a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V5.883z"/></svg></a>
              <a href={`tel:${profileData.references.phone.replace(/\s+/g, '')}`} className="text-slate-700 hover:text-slate-900 transition"><svg width="32" height="32" fill="currentColor" className="inline"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M10 14a6 6 0 006 6v2a8 8 0 01-8-8h2z" fill="currentColor"/></svg></a>
            </div>
          </div>
        </section>

        {/* Footer */}
  <footer className="w-full text-center py-8 text-sm text-slate-500 italic opacity-80">
          &copy; {new Date().getFullYear()} {profileData.name}. Crafted with Next.js & Tailwind CSS.
        </footer>
      </main>
      {/* Animations */}
      {/* Animations moved to globals.css */}
    </div>
  );
}
