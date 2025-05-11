export default function NavBar({ className }: { className?: string }) {
  return (
    <div
      className={`shadow-xl w-full grid grid-cols-2 md:grid-cols-3 p-2 bg-black/100 backdrop-blur-xl items-center ${className}`}
    >
      <div className="grid grid-flow-col gap-2 md:col-start-2 md:justify-center justify-start">
        <button className="p-1">Projects</button>
        <button className="p-1">Resume</button>
        <button className="p-1">Contact</button>
      </div>
    </div>
  );
}
