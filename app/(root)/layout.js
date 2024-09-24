import { FloatingNav } from "@/components/ui/Floating-nav";
import { navBarLinks } from "@/constant";
import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="relative h-screen w-full">
      <FloatingNav navItems={navBarLinks}/>
      <section className="font-pop">{children}</section>
    </main>
  );
};

export default Layout;