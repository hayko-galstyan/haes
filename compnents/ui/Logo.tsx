import { ILogoProps } from "@/types/index.type";
import Image from "next/image";

const Logo = ({ width = 50, height = 50 }: ILogoProps) => {
  return (
    <Image src="/images/logo.jpg" width={width} height={height} alt="Logo" />
  );
};

export default Logo;
