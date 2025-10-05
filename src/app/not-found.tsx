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
    <main className={`${publicSans.className} min-w-xs`}>
      <section className="relative flex h-screen items-center bg-black px-[32px] py-[72px]">
        <div className="relative w-full px-10 mb-12 z-20">
          <div className="container max-w-[471px]">
            <h1
              className={`${dmMono.className} text-[48px] sm:text-[48px] md:text-[72px] lg:text-[120px] leading-none font-normal text-white my-20`}
            >
              404
            </h1>
            <p className="text-[18px] sm:text-[18px] md:text-[22px] text-white font-semibold leading-relaxed my-4 max-w-[600px] md:max-w-[720px] lg:max-w-[900px]">
              The cosmic object you were looking for has disappeared beyond the
              event horizon.
            </p>
            <div className="flex flex-wrap items-center gap-9 mt-6 font-bold ">
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
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"
          aria-hidden="true"
        ></div>
        <Image
          src="/image/404-bg.jpg"
          alt="404"
          fill
          priority
          className="absolute inset-0 object-cover z-0"
        ></Image>
      </section>
    </main>
  );
}
