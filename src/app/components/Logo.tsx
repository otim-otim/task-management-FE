import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function Logo() {
  const layout = {
    background: "#0D0D0D",
  };

  return (
    <div
      className="flex items-center justify-center w-full px-4 sm:px-8 py-4 sm:py-6 md:py-8"
      style={layout}
    >
      <Image
        src={logo}
        alt="Nooro Logo"
        className="w-32 sm:w-40 md:w-48 lg:w-56 max-w-xs"
        priority
      />
    </div>
  );
}
