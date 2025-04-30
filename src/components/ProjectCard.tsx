type ProjectCardProps = {
    title: string;
    description: string;
    link?: string;
    date?: string;
  };

  export default function ProjectCard({ title, description, link, date }: ProjectCardProps) {
    return (
      <div className="glow-card overflow-hidden p-6 pt-7 flex flex-col">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky via-periwinkle to-violet-blue" />
        {date && <p className="text-sm font-medium text-periwinkle mb-1">{date}</p>}
        <h3 className="text-xl font-semibold mb-2 text-ink">{title}</h3>
        <p className="text-ink/70 mb-4 flex-1">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-violet-blue hover:underline"
          >
            View Project →
          </a>
        )}
      </div>
    );
  }
