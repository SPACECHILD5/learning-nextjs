import Image from "next/image";
import Link from "next/link";
import { DM_Mono, Public_Sans } from "next/font/google";

const dmMono = DM_Mono({
  weight: ["300", "400"],
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <main className={`${publicSans.className}`}>
      <section className="relative flex h-screen items-center bg-black px-8 py-18">
        <div className="w-full mb-12">
          <div className="w-full max-w-md z-40">
            <h1
              className={`${dmMono.className} text-[80px] leading-none font-medium text-white my-[53.6px]`}
            >
              404
            </h1>
            <p className="text-lg font-bold text-white leading-relaxed my-[18px]">
              The cosmic object you were looking for has disappeard beyond the
              event horizon.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6 font-bold">
              <Link
                href="/"
                className="inline-block text-white border-b border-dashed pb-2"
              >
                Return Home
              </Link>
              <a
                href=""
                className="inline-block text-white border-b border-dashed pb-2"
                target="_blank"
                rel="noreferrer"
              >
                Sitemap
              </a>
              <a
                href="https://spacechild.net"
                className="inline-block text-white border-b border-dashed pb-2"
                target="_blank"
                rel="noreferrer"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
