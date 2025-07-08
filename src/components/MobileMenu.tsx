import Link from "next/link";

interface Props {
  links: string[];
}
export default function MobileMenu({ links }: Props) {
  return (
    <nav className="md:hidden border-t bg-white">
      <div className="space-y-2 px-4 py-3">
        {links.concat("Sign In").map((label) => (
          <Link key={label} href="#" className="block py-2 text-gray-700">
            {label}
          </Link>
        ))}
        <Link
          href="#"
          className="block rounded-full bg-teal-500 px-4 py-2 text-center text-white"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
