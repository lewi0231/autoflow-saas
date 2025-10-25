"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TransitionLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const handleTransition = (e: React.MouseEvent) => {
    e.preventDefault();
    // Do something one exit
    router.push(href);

    // Do something on entry
  };

  return (
    <div>
      <Link onClick={handleTransition} href={href}>
        {children}
      </Link>
    </div>
  );
};

export default TransitionLink;
