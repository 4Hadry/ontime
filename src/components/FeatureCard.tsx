interface Props {
  icon: JSX.Element;
  title: string;
  desc: string;
  bg: "orange" | "teal";
}

const bgMap = {
  orange: "bg-orange-100",
  teal: "bg-teal-100",
};

const iconBgMap = {
  orange: "bg-orange-500",
  teal: "bg-teal-500",
};

export default function FeatureCard({ icon, title, desc, bg }: Props) {
  return (
    <div className={`flex items-center space-x-4 rounded-lg p-6 ${bgMap[bg]}`}>
      <div className={`rounded-lg p-3 ${iconBgMap[bg]}`}>{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
