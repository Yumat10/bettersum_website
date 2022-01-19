import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, MouseEventHandler } from "react";
import { GradientOutlineButton } from "../buttons/GradientOutlineButton";

type Route = {
  name: string;
  path: string;
};

export const Navbar = (): JSX.Element => {
  const router = useRouter();

  const routes: Route[] = [
    {
      name: "services",
      path: "/services",
    },
    {
      name: "team",
      path: "/team",
    },
    {
      name: "content",
      path: "/content",
    },
  ];

  const navigateToContactUs: MouseEventHandler<HTMLButtonElement> = () =>
    router.push("/contact");

  return (
    <div>
      <Link href="/" key="/">
        <a referrerPolicy="strict-origin-when-cross-origin">home</a>
      </Link>
      {routes.map(({ name, path }) => (
        <Link href={path} key={path}>
          <a referrerPolicy="strict-origin-when-cross-origin">{name}</a>
        </Link>
      ))}
      <GradientOutlineButton text="Contact us" onClick={navigateToContactUs} />
    </div>
  );
};
