import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  demoLink?: string;
  githubLink?: string;
  githubFrontend?: string;
  githubBackend?: string;
}

export default function ProjectCard({
  title,
  description,
  stack,
  demoLink,
  githubLink,
  githubFrontend,
  githubBackend,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.07]">
      <div className="flex flex-col gap-4">
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-400">
          {description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap gap-3">

          {demoLink && (
            <Link
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              Live Demo
            </Link>
          )}

          {githubFrontend && (
            <Link
              href={githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:border-blue-500/50 hover:text-blue-400"
            >
              Frontend
            </Link>
          )}

          {githubBackend && (
            <Link
              href={githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:border-blue-500/50 hover:text-blue-400"
            >
              Backend
            </Link>
          )}

          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:border-blue-500/50 hover:text-blue-400"
            >
              GitHub
            </Link>
          )}

        </div>

      </div>
    </div>
  );
}