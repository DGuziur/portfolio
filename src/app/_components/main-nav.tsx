import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function MainNav() {
  return (
    <nav className="sticky top-0 z-10 p-3 flex justify-around">
      <div className="flex text-2xl gap-6 justify-end w-full">
        <Link className="hover:opacity-80" href="/">
          Home
        </Link>
        <Link className="hover:opacity-80" href="/">
          About
        </Link>
        <Link className="hover:opacity-80" href="/">
          Projects
        </Link>
        <Link className="hover:opacity-80" href="cv">
          CV
        </Link>
      </div>
      <div className="flex justify-end gap-3 w-full">
        <Link className="hover:opacity-80" href="https://github.com/DGuziur">
          <GitHubIcon></GitHubIcon>
        </Link>
        <Link
          className="hover:opacity-80"
          href="https://www.linkedin.com/in/dawid-guziur-b33103324/"
        >
          <LinkedInIcon></LinkedInIcon>
        </Link>
      </div>
    </nav>
  );
}
