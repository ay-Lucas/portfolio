export default function ProjectCard({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="text-2xl border-2 p-4 rounded-2xl">
      <div className="pb-1">{title}</div>
      <div className="text-lg">{content}</div>
    </div>
  );
}
