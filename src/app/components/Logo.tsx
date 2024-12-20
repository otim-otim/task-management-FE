import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function Logo() {
  // const layout = {
  //     width: '226px',
  //     height: '48px',
  //     top: '72px',
  //     left: '657px',
  //     gap: '0px',
  //     opacity: '0px',

  // }
  const layout = {
    width: "1440px",
    height: "200px",
    top: "72px",
    left: "657px",
    gap: "0px",
    opacity: "0px",
    background: "#0D0D0D",
  };
  const imageStyle = {
    width: "226px",
    height: "48px",
    top: "72px",
    left: "657px",
    gap: "0px",
    opacity: "0px",
  };
  return (
    <div
      className="flex items-center justify-center w-full h-full"
      style={layout}
    >
      <Image src={logo} alt="Nooro Logo" style={imageStyle} />
      {/* <span className="text-2xl font-bold">Pokédex</span> */}
    </div>
  );
}
