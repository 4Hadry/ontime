import { Send } from "lucide-react";

export default function EmailSignup() {
  return (
    <div className="flex max-w-md">
      <input
        type="email"
        placeholder="Email address"
        className="flex-1 rounded-l-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
      />
      <button className="rounded-r-lg bg-teal-500 px-6 py-3 text-white hover:bg-teal-600">
        <Send className="h-6 w-6" />
      </button>
    </div>
  );
}
