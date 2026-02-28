import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "Truong Tin Ecommerce Website",
      description:
        "Fullstack ecommerce website with authentication, admin dashboard, and PayOS payment integration.",
      stack: ["NextJS", "NodeJS", "Prisma", "PostgreSQL", "PayOS"],
      demoLink: "https://truongtin-frontend.vercel.app",
      githubFrontend: "https://github.com/TPaooo1806/truongtin-frontend",
      githubBackend: "https://github.com/TPaooo1806/truongtin-backend",
    },
    {
      title: "Cinema Booking Mobile App",
      description:
        "Mobile movie ticket booking application with Firebase authentication and real-time database.",
      stack: ["Flutter", "Firebase"],
      githubLink: "https://github.com/TPaooo1806/TBT_Cinema", 
    },
    {
      title: "Resort Booking Website",
      description:
        "Resort booking platform with VNPay payment integration and PostgreSQL database.",
      stack: ["NodeJS", "Express", "PostgreSQL", "VNPay"],
      githubLink: "https://github.com/TPaooo1806/Manage-Resorts", 
    },
  ];

  return (
    <div className="relative overflow-hidden pb-24">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <Container>
        {/* Hero Section */}
        <section className="flex flex-col items-start pt-24 pb-28 animate-[fadeIn_0.8s_ease]">
          <div className="mb-8 overflow-hidden rounded-full border border-white/20 bg-white/5 p-1">
            {/* Replace this div with an actual <Image /> tag when you have your avatar */}
            <Image
  src="/avatar.jpg"
  alt="ThaiBao"
  width={80}
  height={80}
  sizes="80px"
  className="rounded-full"
/>
          </div>
          
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
  ThaiBao
</h1>
          <h2 className="mb-6 text-xl font-medium text-blue-400">
            Software Engineer
          </h2>
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Software engineer focused on building scalable backend systems, modern
            web applications, and mobile apps.
          </p>
          <p className="text-sm font-medium tracking-wide text-gray-500">
            NodeJS • Flutter • PostgreSQL • Firebase • VNPay • PayOS
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="pb-28">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">Projects</h2>
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                stack={project.stack}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
                githubFrontend={project.githubFrontend} 
                githubBackend={project.githubBackend}   
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-white/10 pt-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Let&apos;s Connect</h2>
          <p className="mb-8 max-w-md text-gray-400">
            I&apos;m currently open to new opportunities. Whether you have a question
            or just want to say hi, feel free to reach out.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/TPaooo1806"
              className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              GitHub
            </Link>
            <Link
              href="mailto:ben0903989096@gmail.com"
              className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              Email
            </Link>
            <Link
              href="https://truongtin-frontend.vercel.app/"
              className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              Website by me
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}