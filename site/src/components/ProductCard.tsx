import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./icons";

export function ProductCard({
  href,
  icon,
  title,
  children
}: {
  href: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="product-card">
      <span className="product-card__icon">{icon}</span>
      <h3>{title}</h3>
      <p>{children}</p>
      <ArrowIcon className="product-card__arrow" />
    </Link>
  );
}
