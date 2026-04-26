import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-100px)] flex items-center justify-center w-full">
        <div className="max-w-6xl mx-auto px-8 w-full flex flex-col md:flex-row items-center justify-between mt-12 md:mt-0">

          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start max-w-xl">
            <p className="text-xs font-semibold tracking-widest mb-6 uppercase">
              Transforming through change
            </p>

            <h1 className="text-6xl font-normal tracking-tight mb-8 text-foreground">
              Achmad Aidhil
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
              src="/person-white.png"
              alt="Illustration of Achmad Aidhil"
              width={400}
              height={400}
              priority
              className="w-full max-w-[400px] h-auto object-contain mix-blend-multiply dark:mix-blend-normal"
            />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-32">
        <div className="max-w-6xl mx-auto px-8 w-full flex flex-col md:flex-row gap-16 md:gap-24">

          <div className="flex-1">
            <h2 className="text-4xl font-normal tracking-tight mb-8 text-foreground">Tentang Saya</h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                Halo! Saya Achmad Aidhil, seorang Software Engineer dan Product Designer yang bersemangat.
                Saya sangat menikmati proses menciptakan pengalaman digital yang intuitif, visual yang menawan, dan fungsionalitas tinggi.
              </p>
              <p>
                Dengan latar belakang yang kuat di bidang pengembangan web dan kepekaan terhadap desain, saya menjembatani
                celah antara daya tarik estetika dan kinerja teknis. Saya percaya bahwa produk yang luar biasa tidak hanya
                dibangun dengan kode, tetapi juga dengan empati terhadap penggunanya.
              </p>
              <p>
                Ketika saya tidak sedang coding atau mendesain, saya senang membagikan pengetahuan saya melalui konten,
                membantu orang lain untuk belajar dan berkembang bersama di komunitas teknologi.
              </p>
            </div>
          </div>

          {/* Stats / Highlight */}
          <div className="flex-1 flex flex-col justify-center gap-10 border-l border-foreground pl-8 md:pl-16">
            <div>
              <h3 className="text-6xl font-light mb-3 text-foreground">3+</h3>
              <p className="text-sm font-medium tracking-widest uppercase text-foreground">Tahun Pengalaman</p>
            </div>
            <div>
              <h3 className="text-6xl font-light mb-3 text-foreground">50+</h3>
              <p className="text-sm font-medium tracking-widest uppercase text-foreground">Proyek Selesai</p>
            </div>
            <div>
              <h3 className="text-6xl font-light mb-3 text-foreground">100%</h3>
              <p className="text-sm font-medium tracking-widest uppercase text-foreground">Kepuasan Klien</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
