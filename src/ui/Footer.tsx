import { Sosials } from "./Header";
import logo from "/logo.svg";


function Subscribe() {
    return <div className="flex flex-col gap-4 items-center md:items-start md:gap-5 w-full md:w-auto">
        <div className="font-lexend text-lg">Sign up for our newsletter</div>
        <div className="flex gap-4 items-center flex-col md:flex-row w-full md:w-auto">
            <input className="h-12 w-full md:w-90 leading-12 px-4 whitespace-nowrap text-sm bg-[#181818] rounded-lg border border-[#232323] placeholder:opacity-60" placeholder="Please enter your email address" />
            <button className="text-[#FA8B16] h-12 bg-[#181818] w-full md:w-auto rounded-lg border border-[#232323] hover:opacity-80 px-5 cursor-pointer">Subsribe</button>
        </div>
    </div>
}
export function Footer() {
    return <div className="w-full bg-black md:bg-[#0C0C0C]">
        <div className="w-full max-w-360 mx-auto px-4 hidden md:flex flex-col gap-20 pt-20 pb-10">
            <div className="root_anim_item flex justify-between">
                <img src={logo} alt="Logo" className="w-[100px] h-auto" />
                <Subscribe />
            </div>
            <div className="root_anim_item flex justify-between items-center">
                <div className="opacity-60">© 2025 Strategy A. All rights reserved.</div>
                <Sosials />
            </div>
        </div>
        <div className="root_anim_item w-full flex flex-col px-4 py-5 gap-4 md:hidden">
            <div className=" w-full flex justify-between">
                <img src={logo} alt="Logo" className="w-[100px] h-auto" />
                <Sosials />
            </div>
            <Subscribe />
            <div className="mx-auto">
                <div className="opacity-60 items-center">© 2025 Strategy A. All rights reserved.</div>
            </div>
        </div>
    </div>
}