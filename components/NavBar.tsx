"use client";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Pricing</Link>
        </li>
      </ul>
    </nav>
  );
};
