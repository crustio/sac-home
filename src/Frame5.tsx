import { AnimPointsByPaths } from "./anims/AnimPointsByPaths";
import { TextLG } from "./components/Text";
import { SvgLight } from "./svgs/SvgLight";
import urlLeadingprojects from '/leadinprojects.svg'

const projects: string[] = ['BTC', 'ETH', 'USDT', 'BNB', 'XMR', 'BUSD', 'EOS', 'SOL', 'DASH', 'HT']

export function Frame5() {
    return <div className="w-full">
        <div className="relative bg-[#0B0B0B] w-full">
            <div className="root_anim_item flex items-end absolute left-0 -top-[clamp(40px,6.9vw,100px)] h-[clamp(40px,6.9vw,100px)] w-full pointer-events-none">
                <SvgLight className="h-full w-auto" />
                <div className="flex-1 border-b border-b-[#2e2e2e]"></div>
                <SvgLight className="h-full w-auto rotate-y-180 origin-center" />
            </div>
            <div className="root_anim_item flex items-start absolute left-0 -bottom-[clamp(40px,6.9vw,100px)] h-[clamp(40px,6.9vw,100px)] w-full pointer-events-none">
                <SvgLight className="h-full w-auto rotate-x-180 origin-center" />
                <div className="flex-1 border-t border-t-[#2e2e2e]"></div>
                <SvgLight className="h-full w-auto rotate-z-180 origin-center" />
            </div>
            <div className="root_anim_item w-full max-w-[1440px] px-4 py-10 flex flex-col mx-auto items-center">
                <TextLG className="text-5xl font-lexend font-medium leading-normal w-fit" lg="2" text="Building with Leading Projects" />
                <img src={urlLeadingprojects} className="w-2/3 h-auto mt-8" />
                <AnimPointsByPaths className="-mt-[5vw]" />
                <div className="grid grid-cols-[repeat(auto-fill,minmax(clamp(42px,5vw,72px),1fr))] w-full gap-y-5 gap-x-10 md:gap-x-12 lg:gap-x-14 xl:gap-x-16 2xl:gap-x-18 -mt-[8vw]">
                    {
                        projects.map(item => <div key={item} className="basis-10.5 flex-1 flex flex-col gap-2 items-center w-full group ">
                            <div className="border-gradient flex justify-center items-center w-full aspect-square rounded-full">
                                <img src={`/projects/${item}.svg`} className="w-2/3" />
                            </div>
                            <span className="text-sm invisible group-hover:visible">{item}</span>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>
}
