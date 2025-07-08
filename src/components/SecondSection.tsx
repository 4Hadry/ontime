import { ArrowRight, Target, Clock } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function SecondSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            Something big <span className="block">is coming</span>
          </h2>
          <a
            href="#"
            className="inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-center text-white transition-colors hover:bg-teal-600 sm:w-auto sm:justify-start sm:pr-7"
          >
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="space-y-4">
          <FeatureCard
            icon={<Target className="h-6 w-6 text-white" />}
            bg="orange"
            title="6+ New Features"
            desc="This feature will help you to improve you"
          />
          <FeatureCard
            icon={<Clock className="h-6 w-6 text-white" />}
            bg="teal"
            title="200% Boost your time"
            desc="This feature will help you to improve you"
          />
        </div>
      </div>
    </section>
  );
}
