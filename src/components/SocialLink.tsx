import type { ComponentType } from "react";

interface SocialLinkProps {
  href: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
}

export default function SocialLink({ href, label, Icon }: SocialLinkProps) {
  return (
    <a
      aria-label={label}
      className="social-link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon className="size-[18px]" />
      {label}
    </a>
  );
}
