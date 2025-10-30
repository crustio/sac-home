import { Sosials } from "./Header";
import logo from "/logo.svg";


function Subscribe() {
    return <div className="flex flex-col gap-5">
        <div className="font-lexend text-lg">Sign up for our newsletter</div>
        <div className="flex gap-4 items-center flex-wrap">
            <input className="h-12 w-90 leading-12 px-4 whitespace-nowrap text-sm bg-[#181818] rounded-lg border border-[#232323] placeholder:opacity-60" placeholder="Please enter your email address" />
            <button className="text-[#FA8B16] h-12 bg-[#181818] rounded-lg border border-[#232323] hover:opacity-80 px-5 cursor-pointer">Subsribe</button>
        </div>
    </div>
}
export function Footer() {
    return <div className="w-full bg-[#0C0C0C]">
        <div className="w-full max-w-[1440px] mx-auto px-4 flex flex-col gap-20 pt-20 pb-10">
            <div className="root_anim_item flex justify-between">
                <img src={logo} alt="Logo" className="w-[100px] h-auto" />
                <Subscribe />
            </div>
            <div className="root_anim_item flex justify-between items-center">
                <div className="opacity-60">© 2025 Strategy A. All rights reserved.</div>
                <Sosials />
            </div>
        </div>

    </div>
}