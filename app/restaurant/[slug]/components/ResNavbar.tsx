import Link from "next/link";
import React from "react";

interface ResNavbarProps {
  slug: string;
}

const ResNavbar = ({ slug }: ResNavbarProps) => {
  return (
    <nav className="flex border-b bg-inherit pb-2 text-reg">
      <Link href={`/restaurant/${slug}`} className="mr-7">
        Overview
      </Link>
      <Link href={`/restaurant/${slug}/menu`} className="mr-7">
        Menu
      </Link>
    </nav>
  );
};

export default ResNavbar;
