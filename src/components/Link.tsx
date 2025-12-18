import { useRouter } from "../hooks/useRouter";

export function Link({ href, children, ...restOfProps }: any) {
  const { navigateTo } = useRouter();

  const handleClick = (event: any) => {
    event.preventDefault();
    navigateTo(href);
  };

  return (
    <a href={href} {...restOfProps} onClick={handleClick}>
      {children}
    </a>
  );
}
