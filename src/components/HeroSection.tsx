import IpTracker from "./IpTracker";
import WebinarBanner from "./WebinarBanner";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-7xl">
            Get Early‑access <br />
            <span>
              Ontime. <span className="text-teal-500">Pro+</span>
            </span>
          </h1>
          <p className="max-w-md text-lg text-gray-600">
            Ontime is a most popular time tracking company in the world, so
            everyone can focus on the work that matters.
          </p>
          <IpTracker />
          <WebinarBanner />
        </div>

        <div className="relative -right-6 select-none lg:right-0">
          <div className="aspect-[680/520] w-full overflow-hidden rounded-xl">
            <Image
              src="/hero.png"
              alt="Team illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
