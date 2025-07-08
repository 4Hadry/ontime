import { avatar } from "@/lib/avatars";

export default function WebinarBanner() {
  return (
    <div className="mt-15 flex items-center justify-between text-sm">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {avatar.map((src) => (
            <img
              key={src}
              src={src}
              alt="avatar"
              className="h-8 w-8 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
        <div>
          <div className="flex items-center gap-6">
            <span className="font-bold text-xl text-gray-800">
              Webinar Release
            </span>
            <span className="rounded-full bg-yellow-500 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
              Live
            </span>
          </div>
          <span className="text-xs sm:text-sm text-gray-500 block mt-0.5">
            11:00 am GMT+7 · 27 March 2021
          </span>
        </div>
      </div>
    </div>
  );
}
