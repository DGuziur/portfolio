import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="sticky top-0 p-3 flex justify-around">
      <div>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="cv">Projects</Link>
        <Link href="cv">CV</Link>
      </div>
    </nav>
  );
}
