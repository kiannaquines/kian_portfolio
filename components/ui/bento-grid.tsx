import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  videoUrl,
  repoLink,
  tags = [],
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  videoUrl?: string;
  repoLink?: string;
  tags?: string[];
}) => {
  return (
    <div
      className={cn(
        "bg-neutral-900 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 border border-transparent flex flex-col space-y-4",
        "bg-neutral-900 dark:bg-neutral-900 border-neutral-700 dark:border-neutral-700",
        className
      )}
    >
      {videoUrl && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${extractYouTubeID(videoUrl)}`}
            title={typeof title === "string" ? title : "YouTube Video"}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {header}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-zinc-800 text-white text-[10px] font-semibold px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-300 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-400 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>

      {repoLink && (
        <div className="flex justify-start mt-auto">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-violet-600 text-white text-xs font-bold py-2 px-4 rounded-lg transition hover:bg-violet-700"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

const extractYouTubeID = (url: string) => {
  const regExp = /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/)([\w-]+))/;
  const match = url.match(regExp);
  return match ? match[1] : "";
};
