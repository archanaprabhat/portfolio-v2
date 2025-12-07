import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  label: string;
  Icon: LucideIcon;
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
