"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TransitionLink = ({
  href,
  onClick,
  className,
  children,
}: {
  href: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  // If you want to use page transitions (on entry / exit)
  const handleTransition = (e: React.MouseEvent) => {
    e.preventDefault();

    if (onClick) {
      onClick();
    }

    router.push(href);

    // Do something on entry
  };

  return (
    <>
      <Link onClick={handleTransition} href={href} className={className}>
        {children}
      </Link>
    </>
  );
};

export default TransitionLink;
