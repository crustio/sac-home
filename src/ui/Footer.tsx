import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useState } from "react";
import { Sosials } from "./Header";
import logo from "/logo.svg";
import axios from "axios";

function validateEmail(e: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(e).toLowerCase());
}
function Subscribe() {
    const [email, setEmail] = useState('')
    const { mutate, isPending } = useMutation({
        mutationKey: ['subByEmail', email],
        mutationFn: async () => {
            if (!validateEmail(email)) throw new Error("Email invalid!")
            await axios.request({
                url: "https://grcokzbzdqaurpyhccgw.supabase.co/functions/v1/SubscribeEmails",
                method: 'POST',
                data: { email },
            })

        },
    })
    return <div className="flex flex-col gap-4 items-center md:items-start md:gap-5 w-full md:w-auto">
        <div className="font-lexend text-lg">Sign up for our newsletter</div>
        <div className="flex gap-4 items-center flex-col md:flex-row w-full md:w-auto">
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full md:w-90 leading-12 px-4 whitespace-nowrap text-sm bg-[#181818] rounded-lg border border-[#232323] placeholder:opacity-60" placeholder="Please enter your email address" />
            <button onClick={() => mutate()} disabled={isPending || !email}
                className="text-[#FA8B16] w-full h-12 bg-[#181818] md:w-40 shrink-0 rounded-lg border border-[#232323] hover:opacity-80 px-5 cursor-pointer flex justify-center items-center gap-2">
                {isPending && <Loader className="animate-spin" />}
                Subscribe
            </button>
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