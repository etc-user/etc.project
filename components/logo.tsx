import Image from "next/image";

type LogoProps = {
  priority?: boolean;
};

export default function Logo({ priority = false }: LogoProps) {
  return (
    <Image
      src="/logos/logo-dark.svg"
      alt="etc."
      width={146}
      height={50}
      priority={priority}
      draggable={false}
    />
  );
}