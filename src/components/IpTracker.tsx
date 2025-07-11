"use client";
import { Send } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export default function EmailSignup() {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const fetchLocation = async () => {
    if (!ip) return;
    try {
      const res = await fetch("/api/ip-lookup", {
        method: "POST",
        body: JSON.stringify({ ip }),
      });
      const data = await res.json();

      if (!data || !data.ip || !data.country) {
        setError("Invalid IP address or no data found.");
        setLocation(null);
      } else {
        setLocation(data);
        setError(null);
        // console.log(data);
      }
    } catch (error) {
      setError("Failed to fetch location. Please try again.");
      setLocation(null);
    }
    setOpen(true);
  };

  return (
    <div className="flex max-w-md">
      <input
        type="text"
        placeholder="Enter IP address"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        className="flex-1 rounded-l-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
      />
      <button
        onClick={fetchLocation}
        className="rounded-r-lg bg-teal-500 px-6 py-3 text-white hover:bg-teal-600"
      >
        <Send className="h-6 w-6" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              IP Location Info
            </DialogTitle>
          </DialogHeader>
          {error ? (
            <p className="text-red-600 font-semibold">{error}</p>
          ) : (
            <div className="space-y-1 text-sm">
              <div>
                <strong>IP:</strong> {location?.ip}
              </div>
              <div>
                <strong>City:</strong> {location?.city}
              </div>
              <div>
                <strong>Region:</strong> {location?.region}
              </div>
              <div>
                <strong>Country:</strong> {location?.country}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
