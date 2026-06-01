import type { JSX } from "react";

interface GreeterProps {
  person: string;
}

export default function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>Hello,{person}</h1>;
}
