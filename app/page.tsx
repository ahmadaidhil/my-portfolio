import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center w-full">
      <div className="max-w-6xl mx-auto px-8 w-full flex flex-col md:flex-row items-center justify-between mt-12 md:mt-0">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start max-w-xl">
          <p className="text-xs font-semibold tracking-widest mb-6 uppercase">
            Transforming through change
          </p>
          
          <h1 className="text-7xl font-normal tracking-tight mb-8 text-foreground">
            Mareta
          </h1>
          
          <div className="space-y-1 mb-16 text-lg">
            <p>Building bridges between design, code, and storytelling.</p>
            <p>Sharing what I'm learning as it unfolds.</p>
          </div>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="font-medium">Software Engineer</span>
            <span className="font-medium">Product Designer</span>
            <span className="font-medium">Content Creator</span>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex justify-end mt-16 md:mt-0 bg-white dark:bg-transparent rounded-2xl overflow-hidden p-4">
          <Image
            src="/illustration.png"
            alt="Illustration of Mareta"
            width={500}
            height={500}
            priority
            className="w-full max-w-[500px] h-auto object-contain mix-blend-multiply dark:mix-blend-normal"
          />
        </div>

      </div>
    </main>
  );
}
