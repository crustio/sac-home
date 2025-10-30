import type { ReactNode } from "react";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { PiArrowUpRight } from "react-icons/pi";
import logo from "/logo.svg";
const tabs: { name: string, link: string }[] = [
  { name: "Tech", link: "#" },
  { name: "Build", link: "http" },
  { name: "Community", link: "http" },
  { name: "Blog", link: "http" },
  { name: "Documents", link: "http" },
]

const sosials: { icon: ReactNode, link: string }[] = [
  { icon: <FaXTwitter />, link: "https://twitter.com/" },
  { icon: <FaDiscord />, link: "https://discord.com/" },
]

export function Sosials() {
  return <div className="flex items-center gap-4">
    {sosials.map((sosial, index) => (
      <a
        key={index}
        href={sosial.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-gray-400 transition-colors"
      >
        {sosial.icon}
      </a>
    ))}
  </div>
}
export function Header() {
  return (
    <div
      className="root_anim_item flex items-center justify-between w-full max-w-[1440px] px-4 mx-auto py-8 relative z-10">
      <img src={logo} alt="Logo" className="w-[100px] h-auto" />
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%),#121110",
          boxShadow:
            "0px 6px 12px 0px #FFFFFF0A inset,0px 1px 1px 0px #FFFFFF33 inset",
        }}
        className="flex rounded-full items-center gap-8 px-8"
      >
        {tabs.map((tab, index) => (
          <a
            key={index}
            href={tab.link}
            className="text-white text-sm py-2 hover:text-gray-400 transition-colors flex items-center gap-2"
          >
            {tab.name}
            {tab.link.startsWith("http") && <PiArrowUpRight size={16} />}
          </a>
        ))}
      </div>

      <Sosials />
    </div>
  );
}
