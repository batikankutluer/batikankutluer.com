"use server";

import { Nav, NavItem } from "@C/Nav";
import { Home } from "@C/Home";

export default async function Page() {
  const nav_elements: NavItem[] = [
    {
      text: "Home",
      href: "/",
      description: "Home page.",
    },
    {
      text: "About",
      href: "/about",
      description: "About page.",
    },
    {
      text: "Contact",
      href: "/contact",
      description: "Contact page.",
    },
  ];

  return (
    <div className="grid">
      <Nav items={nav_elements}></Nav>
      <Home>Hello World!</Home>
    </div>
  );
}
