export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div
        className="grid justify-items-center p-40 gap-16
bg-gradient-to-r 
from-sky-400 
via-sky-500
to-sky-600
animate-gradient-x
        "
      >
        <div>
          <main className="flex flex-col gap-3 items-start">
            <h1 className="text-6xl font-bold">Lucas Anderson</h1>
            <h2 className="text-3xl font-bold">Full Stack Web Developer</h2>
            <p className="text-xl font-bold sk">
              I build seamless and feature rich applications.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
