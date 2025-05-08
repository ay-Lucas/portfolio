export default function ProjectCard({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="border p-4 rounded-2xl">
      <div className="text-2xl pb-1 font-semibold">{title}</div>
      <div className="text-lg">{content}</div>
    </div>
  );
}
