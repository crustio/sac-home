import type { ReactNode } from "react";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { PiArrowUpRight } from "react-icons/pi";
import logo from "/logo.svg";
import { cn } from "../lib/utils";
import { FiMenu } from 'react-icons/fi'
import { Link } from "@tanstack/react-router";

const tabs: { name: string, link: string }[] = [
  // { name: "Tech", link: "#" },
  // { name: "Build", link: "http" },
  // { name: "Community", link: "http" },
  // { name: "Blog", link: "http" },
  // { name: "Documents", link: "http" },
]

const sosials: { icon: ReactNode, link: string }[] = [
  // { icon: <FaXTwitter />, link: "https://twitter.com/" },
  // { icon: <FaDiscord />, link: "https://discord.com/" },
]

export function Sosials({ className }: { className?: string }) {
  return <div className={cn("flex items-center gap-4", className)}>
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
    <div className="root_anim_item fixed top-0 w-full bg-black border-b border-b-white/15 md:border-b-transparent z-100">
      <div
        className="flex items-center justify-between w-full max-w-[1440px] px-4 mx-auto py-4 md:py-8 ">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[100px] h-auto" />
        </Link>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%),#121110",
            boxShadow:
              "0px 6px 12px 0px #FFFFFF0A inset,0px 1px 1px 0px #FFFFFF33 inset",
          }}
          className="rounded-full items-center gap-8 px-8 hidden md:flex"
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
        <Sosials className="hidden md:flex" />
        <div className="flex justify-center items-center p-2 text-2xl relative cursor-pointer md:hidden" >
          <FiMenu />
        </div>
      </div>
    </div>
  );
}
