import { useRouter } from "../hooks/useRouter";

export function Link({
  href,
  children,
  className,
  ...restOfProps
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { navigateTo } = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigateTo(href);
  };

  return (
    <a href={href} {...restOfProps} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
