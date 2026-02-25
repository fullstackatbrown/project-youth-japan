import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/delegations">Delegations</Link> |{" "}
      <Link href="/apply">Apply</Link> |{" "}
      <Link href="/events">Events</Link> |{" "}
      <Link href="/contact">Contact</Link> |{" "}
      <a href="#">Donate</a>
    </nav>
  );
}
