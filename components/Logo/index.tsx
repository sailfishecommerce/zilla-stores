import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <a className="navbar-brand  me-4">
        <h1 className="mb-0">Bandicoot</h1>
      </a>
    </Link>
  );
}
