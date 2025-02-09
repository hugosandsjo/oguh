import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-8">
      {/* Logo */}
      <div className="flex justify-center mb-10">
        <Link href="/">
          <Image
            src="/images/logo_oguh.svg"
            alt="OGUH Logo"
            width={300}
            height={300}
            priority
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-8 mb-16">
        <Link
          href="/"
          className="text-md font-medium hover:underline underline-offset-4"
        >
          Home
        </Link>
        <Link
          href="/showreel"
          className="text-md font-medium hover:underline underline-offset-4"
        >
          Showreel
        </Link>
        <Link
          href="/contact"
          className="text-md font-medium hover:underline underline-offset-4"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
