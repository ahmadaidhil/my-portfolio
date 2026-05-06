"use client";

import Image from "next/image";
import { User, MapPin, Mail, Phone, GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";

const content = {
  EN: {
    hero: {
      tagline: "Transforming through change",
      name: "Achmad Aidhil",
      line1: "Building bridges between design, code, and storytelling.",
      line2: "Sharing what I'm learning as it unfolds.",
      badges: ["Software Engineer", "Product Designer", "Content Creator"],
    },
    about: {
      sectionTitle: "About Me",
      heading: "I'm a Web Developer",
      desc: "I am an enthusiastic web developer with experience in building functional and attractive websites. I specialize in front-end development, UI/UX design, and creating responsive web applications that provide exceptional user experiences.",
      info: [
        { label: "Name", value: "Achmad Aidhil" },
        { label: "Age", value: "20 Years" },
        { label: "Address", value: "Polewali Mandar, West Sulawesi" },
        { label: "Email", value: "achmadaidhil2@gmail.com" },
        { label: "Phone", value: "+62 812 4185 9283" },
        { label: "Education", value: "University of West Sulawesi" },
      ],
      stats: [
        { count: "10+", label: "Projects Done" },
        { count: "5", label: "Happy Clients" },
        { count: "3", label: "Awards Won" },
      ],
      badge: "Years Experience",
    },
    services: {
      sectionTitle: "What I Do",
      items: [
        { title: "UX/UI Design", desc: "Designing intuitive and aesthetic interfaces that create smooth and enjoyable user experiences." },
        { title: "Creative Design", desc: "Delivering creative and innovative designs that professionally reflect brand identity visually." },
        { title: "Web Design", desc: "Building modern, responsive, and fast website layouts that make a strong first impression." },
        { title: "Branding", desc: "Building a strong and memorable brand identity through consistent visual strategies and messaging." },
        { title: "Photography", desc: "Capturing moments with the best composition and lighting for professional and personal purposes." },
        { title: "Mobile App", desc: "Developing responsive, lightweight, and user-friendly mobile applications across devices." },
      ],
    },
    projects: {
      sectionTitle: "Portfolio",
      items: [
        { title: "E-Commerce App", tag: "Web Design", img: "https://picsum.photos/seed/proj1/800/500", url: "#" },
        { title: "Travel Landing Page", tag: "UI/UX", img: "https://picsum.photos/seed/proj2/800/500", url: "#" },
        { title: "Dashboard Analytics", tag: "Web App", img: "https://picsum.photos/seed/proj3/800/500", url: "#" },
        { title: "Mobile Banking UI", tag: "Mobile App", img: "https://picsum.photos/seed/proj4/800/500", url: "#" },
        { title: "Portfolio Website", tag: "Web Design", img: "porto-web.png", url: "https://ahmadaidhil.github.io/portofolio-divisi-web/" },
        { title: "Restaurant App", tag: "Branding", img: "https://picsum.photos/seed/proj6/800/500", url: "#" },
      ],
    },
    skills: {
      sectionTitle: "My Skills",
      technical: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "React / Next.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Node.js", level: 60 },
        { name: "UI/UX Design", level: 70 },
      ],
      soft: ["Problem Solving", "Teamwork", "Communication", "Creativity", "Time Management", "Fast Learner"],
      technicalLabel: "Technical Skills",
      softLabel: "Soft Skills",
    },
  },
  ID: {
    hero: {
      tagline: "Bertransformasi melalui perubahan",
      name: "Achmad Aidhil",
      line1: "Membangun jembatan antara desain, kode, dan cerita.",
      line2: "Berbagi apa yang saya pelajari saat itu berlangsung.",
      badges: ["Software Engineer", "Product Designer", "Content Creator"],
    },
    about: {
      sectionTitle: "Tentang Saya",
      heading: "Saya seorang Web Developer",
      desc: "Saya adalah seorang web developer yang antusias dengan pengalaman dalam membangun website yang fungsional dan menarik. Saya mengkhususkan diri dalam pengembangan front-end, desain UI/UX, dan menciptakan aplikasi web responsif.",
      info: [
        { label: "Nama", value: "Achmad Aidhil" },
        { label: "Usia", value: "20 Tahun" },
        { label: "Alamat", value: "Polewali Mandar, Sulawesi Barat" },
        { label: "Email", value: "achmadaidhil2@gmail.com" },
        { label: "Telepon", value: "+62 812 4185 9283" },
        { label: "Pendidikan", value: "Universitas Sulawesi Barat" },
      ],
      stats: [
        { count: "10+", label: "Proyek Selesai" },
        { count: "5", label: "Klien Puas" },
        { count: "3", label: "Penghargaan" },
      ],
      badge: "Tahun Pengalaman",
    },
    services: {
      sectionTitle: "Yang Saya Lakukan",
      items: [
        { title: "Desain UX/UI", desc: "Merancang antarmuka yang intuitif dan estetis, menciptakan pengalaman pengguna yang mulus dan menyenangkan." },
        { title: "Desain Kreatif", desc: "Menghadirkan desain kreatif dan inovatif yang mencerminkan identitas brand secara visual dan profesional." },
        { title: "Desain Web", desc: "Membangun tampilan website modern, responsif, dan cepat yang memberikan kesan pertama yang kuat." },
        { title: "Branding", desc: "Membangun identitas merek yang kuat dan berkesan melalui strategi visual dan pesan yang konsisten." },
        { title: "Fotografi", desc: "Mengabadikan momen dengan komposisi dan pencahayaan terbaik untuk keperluan profesional maupun personal." },
        { title: "Aplikasi Mobile", desc: "Mengembangkan aplikasi mobile yang responsif, ringan, dan mudah digunakan di berbagai perangkat." },
      ],
    },
    projects: {
      sectionTitle: "Portofolio",
      items: [
        { title: "Aplikasi E-Commerce", tag: "Desain Web", img: "https://picsum.photos/seed/proj1/800/500", url: "#" },
        { title: "Halaman Travel", tag: "UI/UX", img: "https://picsum.photos/seed/proj2/800/500", url: "#" },
        { title: "Dashboard Analitik", tag: "Aplikasi Web", img: "https://picsum.photos/seed/proj3/800/500", url: "#" },
        { title: "UI Mobile Banking", tag: "Aplikasi Mobile", img: "https://picsum.photos/seed/proj4/800/500", url: "#" },
        { title: "Website Portofolio", tag: "Desain Web", img: "porto-web.png", url: "https://ahmadaidhil.github.io/portofolio-divisi-web/" },
        { title: "Aplikasi Restoran", tag: "Branding", img: "https://picsum.photos/seed/proj6/800/500", url: "#" },
      ],
    },
    skills: {
      sectionTitle: "Keahlian Saya",
      technical: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "React / Next.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Node.js", level: 60 },
        { name: "UI/UX Design", level: 70 },
      ],
      soft: ["Pemecahan Masalah", "Kerja Tim", "Komunikasi", "Kreativitas", "Manajemen Waktu", "Cepat Belajar"],
      technicalLabel: "Keahlian Teknis",
      softLabel: "Soft Skills",
    },
  },
};

const serviceIcons = [
  "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
  "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
  "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
];

const infoIcons = [User, Calendar, MapPin, Mail, Phone, GraduationCap];

export default function Home() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <main className="w-full flex flex-col">
      {/* Hero Section */}
      <section id="home" className="min-h-[calc(100vh-100px)] flex items-center justify-center w-full">
        <div className="max-w-6xl mx-auto px-8 w-full flex flex-col md:flex-row items-center justify-between mt-12 md:mt-0">

          <motion.div
            className="flex-1 flex flex-col items-start max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold tracking-widest mb-6 uppercase">{t.hero.tagline}</p>
            <h1 className="text-6xl font-normal tracking-tight mb-8 text-foreground">{t.hero.name}</h1>
            <div className="space-y-1 mb-16 text-lg">
              <p>{t.hero.line1}</p>
              <p>{t.hero.line2}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              {t.hero.badges.map((b) => <span key={b} className="font-medium">{b}</span>)}
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-end mt-16 md:mt-0 bg-white dark:bg-transparent rounded-2xl overflow-hidden p-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/hero.png"
              alt="Illustration of Achmad Aidhil"
              width={400}
              height={400}
              priority
              style={{ height: "auto" }}
              className="w-full max-w-[400px] rounded-3xl object-contain mix-blend-multiply dark:mix-blend-normal"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 w-full">

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-3">{t.about.sectionTitle}</h2>
            <div className="w-12 h-0.5 bg-foreground mx-auto" />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-14 items-center">

            {/* Left Photo */}
            <motion.div
              className="w-full md:w-[300px] flex-shrink-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full">
                <div className="relative w-full aspect-[3/4] rounded-2xl border border-foreground overflow-hidden">
                  <Image
                    src="/about2.png"
                    alt="Foto Profil Achmad Aidhil"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover object-top"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-5 -right-5 w-24 h-24 bg-foreground text-background rounded-2xl flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08 }}
                >
                  <span className="text-2xl font-bold leading-none">2+</span>
                  <span className="text-[10px] font-medium text-center leading-tight mt-1 px-1">{t.about.badge}</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="flex-1 flex flex-col"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t.about.heading}</h3>
              <p className="text-sm md:text-base leading-relaxed text-foreground mb-8">{t.about.desc}</p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {t.about.info.map((item, i) => {
                  const Icon = infoIcons[i];
                  return (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-3 px-4 py-3 border border-foreground rounded-xl"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.08 * i }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0 opacity-60" />
                      <span className="text-xs opacity-60 min-w-[50px]">{item.label}</span>
                      <span className="text-xs font-bold ml-auto text-right">{item.value}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {t.about.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="flex flex-col items-center justify-center p-5 border border-foreground rounded-xl text-center cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * i + 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-2xl font-bold mb-1">{stat.count}</span>
                    <span className="text-xs opacity-60">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 w-full">

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-3">{t.services.sectionTitle}</h2>
            <div className="w-12 h-0.5 bg-foreground mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((service, i) => (
              <motion.div
                key={service.title}
                className="group flex flex-col gap-5 p-7 border border-foreground rounded-2xl cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-foreground rounded-xl group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={serviceIcons[i]} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed opacity-70">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 w-full">

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-3">{t.projects.sectionTitle}</h2>
            <div className="w-12 h-0.5 bg-foreground mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.items.map((project, i) => (
              <a
                key={project.title}
                href={project.url}
                target={project.url !== "#" ? "_blank" : undefined}
                rel={project.url !== "#" ? "noopener noreferrer" : undefined}
                className="block"
              >
                <motion.div
                  className="group relative overflow-hidden rounded-2xl border border-foreground cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                      <span className="text-background text-sm font-semibold px-3 py-1 border border-background rounded-full">{project.tag}</span>
                      <h3 className="text-background text-lg font-bold text-center px-4">{project.title}</h3>
                      {project.url !== "#" && (
                        <span className="text-background text-xs mt-1 opacity-80">↗ Visit Site</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 w-full">

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-3">{t.skills.sectionTitle}</h2>
            <div className="w-12 h-0.5 bg-foreground mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-8">{t.skills.technicalLabel}</h3>
              <div className="flex flex-col gap-6">
                {t.skills.technical.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-foreground rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * i, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-8">{t.skills.softLabel}</h3>
              <div className="flex flex-wrap gap-3">
                {t.skills.soft.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-5 py-2.5 border border-foreground rounded-full text-sm font-medium cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.08 * i }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08, backgroundColor: "var(--foreground)", color: "var(--background)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Tools */}
              <h3 className="text-xl font-bold mt-12 mb-6">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {["VS Code", "Figma", "Git", "GitHub", "Postman", "Laragon", "MySQL"].map((tool, i) => (
                  <motion.span
                    key={tool}
                    className="px-4 py-2 border border-foreground/40 rounded-lg text-sm opacity-70 hover:opacity-100 transition-opacity cursor-default"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.06 * i }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
