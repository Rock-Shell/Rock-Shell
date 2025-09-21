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
  <main className="pt-12 md:pt-16 max-w-5xl mx-auto px-2">
        {/* Hero Section */}
  <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-6 min-h-[60vh] py-6 md:py-10 animate-fade-in">
          <div className="flex-1 flex flex-col items-start justify-center gap-4">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-700 to-slate-700 bg-clip-text text-transparent drop-shadow-lg tracking-tight animate-slide-in-up">
              {profileData.name}
            </h1>
            <span className="block text-sm md:text-base text-slate-500 font-light mt-1 animate-fade-in delay-100">
              GenAI Developer | Data Scientist | Machine Learning Engineer
            </span>
            <div className="flex flex-row justify-center gap-6 mt-4 animate-fade-in delay-200">
              {/* LinkedIn */}
              <a
                href={profileData.references.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full p-2 transition-transform duration-200 hover:scale-110"
                title="LinkedIn"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="inline drop-shadow-md">
                  <circle cx="16" cy="16" r="16" fill="#0A66C2" className="transition-colors duration-300 group-hover:fill-[#004182]"/>
                  <path d="M12.5 13.5h2.1v1.1c.3-.5 1.1-1.2 2.3-1.2 2.4 0 2.8 1.6 2.8 3.6v4h-2.2v-3.5c0-.8 0-1.8-1.1-1.8s-1.3.9-1.3 1.8v3.5h-2.2v-7zM10.5 10.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-1.1 3h2.2v7h-2.2v-7z" fill="#fff" className="transition-colors duration-300 group-hover:fill-yellow-300"/>
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/ayushgpt"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full p-2 transition-transform duration-200 hover:scale-110"
                title="GitHub"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="inline drop-shadow-md">
                  <circle cx="16" cy="16" r="16" fill="#181717" className="transition-colors duration-300 group-hover:fill-[#6e40c9]"/>
                  <path d="M22 23.5v-2.1c0-.6-.2-1-.7-1.3 2.3-.3 4.7-1.1 4.7-5 0-1.1-.4-2-1-2.7.1-.3.4-1.3-.1-2.7 0 0-.9-.3-2.8 1a9.6 9.6 0 00-5.1 0c-1.9-1.3-2.8-1-2.8-1-.5 1.4-.2 2.4-.1 2.7-.6.7-1 1.6-1 2.7 0 3.9 2.4 4.7 4.7 5-.3.2-.6.7-.6 1.3v2.1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300 group-hover:stroke-yellow-300"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href={`mailto:${profileData.references.email}`}
                className="group rounded-full p-2 transition-transform duration-200 hover:scale-110"
                title="Email"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="inline drop-shadow-md">
                  <circle cx="16" cy="16" r="16" fill="#EA4335" className="transition-colors duration-300 group-hover:fill-[#c5221f]"/>
                  <path d="M8 12l8 6 8-6" stroke="#fff" strokeWidth="2" className="transition-colors duration-300 group-hover:stroke-yellow-300"/>
                  <rect x="8" y="12" width="16" height="8" rx="2" fill="#fff" className="transition-colors duration-300 group-hover:fill-yellow-300"/>
                </svg>
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
        <section id="about" className="py-10 md:py-16 animate-fade-in flex justify-center items-center w-full">
          <div
            className="w-full max-w-[900px] bg-white/95 rounded-2xl shadow-lg px-4 md:px-10 py-8 mx-auto flex flex-col items-center"
            style={{ boxShadow: '0 4px 32px 0 rgba(60,60,120,0.08)' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4 tracking-wide text-center w-full">About Me</h2>
            <p
              className="text-base md:text-lg text-slate-800 leading-relaxed mb-2 w-full text-center md:text-left"
              style={{ lineHeight: '1.9', wordBreak: 'break-word' }}
            >
              {profileData.summary}
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-8 md:py-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 tracking-wide text-center">Experience</h2>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 rounded-full -translate-x-1/2 z-0 opacity-70" />
            <ol className="relative z-10">
              {profileData.experience.map((exp, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <li
                    key={exp.company + exp.role}
                    className={`mb-12 flex flex-col md:flex-row items-center group animate-slide-in-up ${isLeft ? '' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline dot */}
                    <div className={`w-full md:w-1/2 flex justify-center ${isLeft ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'} relative`}>
                      <span className="flex items-center justify-center w-20 h-8 bg-gradient-to-tr from-slate-200 to-slate-400 rounded-full ring-2 ring-slate-200 text-slate-700 font-semibold text-xs z-10 shadow group-hover:scale-105 transition-transform opacity-90">
                        {(() => {
                          // Extract start and end date from exp.duration (e.g., "Jan 2025 - Present")
                          const match = exp.duration.match(/([A-Za-z]+ \d{4}) ?- ?([A-Za-z]+ \d{4}|Present)/);
                          if (match) {
                            return (
                              <>
                                <span>{match[1]}</span>
                                <span className="mx-1">→</span>
                                <span>{match[2]}</span>
                              </>
                            );
                          }
                          return exp.duration;
                        })()}
                      </span>
                    </div>
                    {/* Card (no timeline inside) */}
                    <div className="w-full md:w-1/2 mt-4 md:mt-0 flex flex-col items-center md:items-start">
                      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-4 transition-shadow duration-200 hover:shadow-2xl hover:scale-[1.025] cursor-pointer w-full max-w-md">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                          <span className="font-bold text-slate-900 text-lg">{exp.role}</span>
                          {/* Duration is already shown on the timeline dot above, so remove from card */}
                        </div>
                        <div className="text-indigo-700 font-semibold">{exp.company}</div>
                        <div className="text-slate-700 text-base mt-1">{exp.description}</div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-8 md:py-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-slate-700 mb-6 tracking-wide text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {profileData.projects.map((proj) => (
              <div
                key={proj.name}
                className="group bg-white/90 backdrop-blur rounded-2xl shadow-xl p-4 flex flex-col items-start hover:scale-105 hover:shadow-2xl transition-transform duration-300 border border-slate-200 relative overflow-hidden animate-slide-in-up"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-slate-200 via-slate-100 to-white z-0" />
                <div className="z-10 relative">
                  <h3 className="font-bold text-base text-slate-900 mb-1 group-hover:text-indigo-700 transition-colors">{proj.name}</h3>
                  <p className="text-slate-700 text-sm mb-2">{proj.description}</p>
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

        

        {/* Education Section */}
        <section id="education" className="py-8 md:py-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-slate-700 mb-6 tracking-wide text-center">Education</h2>
          <div className="max-w-2xl mx-auto">
            <ol className="relative border-l-4 border-indigo-300 ml-2">
              {profileData.education.map((edu, idx) => (
                <li key={edu.institute + edu.degree} className="mb-8 ml-4 animate-slide-in-up">
                  <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-gradient-to-tr from-indigo-400 to-slate-400 rounded-full ring-4 ring-white text-white font-bold text-base">{idx + 1}</span>
                  <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                      <span className="font-bold text-slate-900 text-base">{edu.degree}</span>
                      <span className="text-xs text-slate-500 font-mono">{edu.duration}</span>
                    </div>
                    <div className="text-indigo-700 font-semibold">{edu.institute}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-8 md:py-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 tracking-wide text-center">Publications & Achievements</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="list-disc list-inside text-base text-slate-800 space-y-2">
              {profileData.publications && profileData.publications.map((pub, idx) => (
                <li key={idx} className="animate-slide-in-up">{pub}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 md:py-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 tracking-wide text-center">Contact</h2>
          <div className="max-w-xl mx-auto bg-white/90 backdrop-blur rounded-2xl shadow-xl p-4">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" name="name" placeholder="Your Name" className="flex-1 px-2 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-400 outline-none" required />
                <input type="email" name="email" placeholder="Your Email" className="flex-1 px-2 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-400 outline-none" required />
              </div>
              <textarea name="message" placeholder="Your Message" rows={3} className="px-2 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-400 outline-none resize-none" required />
              <button type="submit" className="w-full md:w-auto px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-slate-600 text-white font-bold shadow hover:scale-105 transition-transform">Send Message</button>
            </form>
            <div className="flex gap-4 justify-center mt-4">
              <a href={profileData.references.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition"><svg width="28" height="28" fill="currentColor" className="inline"><path d="M16 16h-3v-4c0-1-.5-2-2-2s-2 1-2 2v4H6V6h3v1c.5-.7 1.5-1 2.5-1C15 6 16 8 16 10.5V16zM4 4a2 2 0 11.001 3.999A2 2 0 014 4zm-1.5 12h3V6h-3v10z"/></svg></a>
              <a href={`mailto:${profileData.references.email}`} className="text-slate-600 hover:text-slate-800 transition"><svg width="28" height="28" fill="currentColor" className="inline"><path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2-.5a.5.5 0 00-.5.5v.217l7 4.2 7-4.2V4a.5.5 0 00-.5-.5H4zm13 2.383l-6.646 3.987a1 1 0 01-1.08 0L2 5.883V14a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V5.883z"/></svg></a>
              <a href={`tel:${profileData.references.phone.replace(/\s+/g, '')}`} className="text-slate-700 hover:text-slate-900 transition"><svg width="28" height="28" fill="currentColor" className="inline"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M10 14a6 6 0 006 6v2a8 8 0 01-8-8h2z" fill="currentColor"/></svg></a>
            </div>
          </div>
        </section>

        {/* Footer */}
  <footer className="w-full text-center py-4 text-sm text-slate-500 italic opacity-80">
          &copy; {new Date().getFullYear()} {profileData.name}. Crafted with Next.js & Tailwind CSS.
        </footer>
      </main>
      {/* Animations */}
      {/* Animations moved to globals.css */}
    </div>
  );
}
