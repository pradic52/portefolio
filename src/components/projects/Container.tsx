type ProjectProps = {
  title: string;
  description: string;
  link?: string;
  img?: string;
};

export function ContainerProject({
  title,
  description,
  link = undefined,
  img = undefined,
}: ProjectProps) {
  if (!link) {
    link = img ? img : "https://github.com/pradic52";
  }
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="container mx-auto rounded-lg p-6 max-w-sm mb-4 border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
      onClick={handleClick}
    >
      {img && (
        <div className="mb-4 rounded overflow-hidden aspect-video">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
    </div>
  );
}
