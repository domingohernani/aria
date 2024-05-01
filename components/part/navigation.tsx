import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/aria_logo.png";

export const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Image src={Logo} alt="ARIA" width={100} />
      <div className="flex items-center gap-3">
        <Link href="#about" scroll={false}>
          Home
        </Link>
        <Link href="#ar" scroll={false}>
          AR
        </Link>
      </div>
    </nav>
  );
};
