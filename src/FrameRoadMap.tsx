import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Particles from "./components/Particles";
import { TextLG } from "./components/Text";
import { cn } from "./lib/utils";
import currentUrl from '/roadmapcurrent.svg';
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

/*

Q2 2026
Testnet launch: LiteNode integration for Storage Network; initial PoCW testing in Compute.
Q4 2026
Mainnet beta: Full Storage Network rollout with RS-EC hybrid; NFT License delegation for Verify.
Q2 2027
Compute Network activation: Dynamic GPU auctions live; end-to-end TPS benchmarks >10K.
Q4 2027
Verify Network full deployment: BFT consensus optimization; AI Service Market beta.
Q2 2028
ZK proof integration: Privacy enhancements across networks; ecosystem partnerships.
 */
const items: {
    time: string,
    text: string
}[] = [
        {
            time: 'Q2 2026', text: 'Testnet launch: LiteNode integration for Storage Network; initial PoCW testing in Compute.'
        },
        {
            time: 'Q4 2026', text: 'Mainnet beta: Full Storage Network rollout with RS-EC hybrid; NFT License delegation for Verify.'
        },
        {
            time: 'Q2 2027', text: 'Compute Network activation: Dynamic GPU auctions live; end-to-end TPS benchmarks >10K.'
        },
        {
            time: 'Q4 2027', text: 'Verify Network full deployment: BFT consensus optimization; AI Service Market beta.'
        },
        {
            time: 'Q2 2028', text: 'ZK proof integration: Privacy enhancements across networks; ecosystem partnerships.'
        },
    ]

const genSm = (count = 8) => {
    const list: { type: 'sm' }[] = []
    const sm = { type: 'sm' } as const
    for (let index = 0; index < count; index++) {
        list.push(sm)
    }
    return list
}
type Line = ({ type: 'sm' } | { type: 'md' } | { type: 'lg', time: string, text: string })
const lines: Line[] = items.map<Line[]>((item, i) => {
    if (i == 0) {
        return [...genSm(), { ...item, type: 'lg' }, ...genSm(), { type: 'md' }, ...genSm(), { type: 'md' }, ...genSm()]
    }
    if (i == items.length - 1) {
        return [{ ...item, type: 'lg' }, ...genSm()]
    }
    return [{ ...item, type: 'lg' }, ...genSm(), { type: 'md' }, ...genSm(), { type: 'md' }, ...genSm()]

}).flat()

export function FrameRoadMap() {
    const continer = useRef<HTMLDivElement>(null)
    const refLineItems = useRef<HTMLDivElement[]>([])
    useGSAP(() => {
        const lineItems = gsap.utils.toArray<HTMLDivElement>(".line_item")
        refLineItems.current = lineItems
        const midItem = lineItems[Math.round((lineItems.length - 1) / 2)]
        console.info('midItem:', lineItems.length, lineItems.length / 2, midItem?.offsetLeft, midItem?.clientLeft)
        gsap.to("#roadmap_scroller", { duration: 1, scrollTo: { x: midItem, offsetX: window.innerWidth / 2 } });
        const r = window.innerWidth * 1.25;
        const l = window.innerWidth
        const d = Math.sqrt(Math.pow(r, 2) - Math.pow(l / 2, 2))
        const Y = Math.round(r - d)
        const deg = Math.round(Math.asin(l / 2 / r) * (180 / Math.PI))
        console.info('deg,Y', deg, Y)
        lineItems.forEach(item => {
            gsap.fromTo(item, {
                y: Y,
                opacity: 0.2,
            }, {
                y: 0,
                opacity: 1,
                ease: 'power1.out',
                scrollTrigger: {
                    scroller: "#roadmap_scroller",
                    horizontal: true,
                    trigger: item,
                    start: 'left right',
                    end: "left center",
                    scrub: 0.1,
                }
            })
            gsap.fromTo(item, {
                y: 0,
                opacity: 1,
            }, {
                y: Y,
                opacity: 0.2,
                ease: 'power1.in',
                scrollTrigger: {
                    scroller: "#roadmap_scroller",
                    horizontal: true,
                    trigger: item,
                    start: 'right center',
                    end: "right left",
                    scrub: .1,
                }
            })
        })
        gsap.utils.toArray<HTMLDivElement>(".time_item")
            .forEach(item => {
                gsap.fromTo(item, {
                    rotate: `${deg}deg`,
                }, {
                    rotate: '0deg',
                    ease: 'power1.out',
                    scrollTrigger: {
                        scroller: "#roadmap_scroller",
                        horizontal: true,
                        trigger: item,
                        start: 'center right',
                        end: "center center",
                        scrub: 0.1,
                    }
                })
                gsap.fromTo(item, {
                    rotate: "0deg"
                }, {
                    rotate: `-${deg}deg`,
                    ease: 'power1.in',
                    scrollTrigger: {
                        scroller: "#roadmap_scroller",
                        horizontal: true,
                        trigger: item,
                        start: 'center center',
                        end: "center left",
                        scrub: .1,
                    }
                })
            })
        gsap.utils.toArray<HTMLDivElement>(".time_desc")
            .forEach(item => {
                gsap.fromTo(item, {
                    transformOrigin: '50% 0',
                    scale: 0.8,
                    y: -Y,
                }, {
                    scale: 1,
                    y: 0,
                    ease: 'power1.out',
                    scrollTrigger: {
                        scroller: "#roadmap_scroller",
                        horizontal: true,
                        trigger: item,
                        start: 'center right',
                        end: "center center",
                        scrub: 0.1,
                    }
                })
                gsap.fromTo(item, {
                    transformOrigin: '50% 0',
                    scale: 1,
                    y: 0,
                }, {
                    scale: 0.8,
                    y: -Y,
                    ease: 'power1.in',
                    scrollTrigger: {
                        scroller: "#roadmap_scroller",
                        horizontal: true,
                        trigger: item,
                        start: 'center center',
                        end: "center left",
                        scrub: .1,
                    }
                })
            })
    }, { scope: continer })

    return <div className="relative w-full " ref={continer}>
        <div className="root_anim_item absolute z-0 w-full h-full">
            <Particles />
        </div>
        <div className="w-full relative z-10 flex flex-col items-center pt-25 ">
            <TextLG
                lg="2"
                text="Road Map"
                className="root_anim_item self-center w-fit font-lexend text-5xl text-center leading-15"
            />
            <div className="root_anim_item w-full overflow-hidden relative pt-[calc(4.167vw+60px)]">
                <div style={{ backgroundSize: '100%' }} className="absolute left-0 top-0 w-full bg-[url(/circleBg.svg)] aspect-[2.264]" />
                <div className="w-full h-100 overflow-hidden relative z-10">
                    <div id="roadmap_scroller" className="w-full h-full pb-[17px] box-content overflow-x-scroll overflow-y-hidden flex gap-4 relative">
                        {lines.map((l, i) => <div key={`line_${i}`} className={cn("opacity-20 line_item relative w-px bg-white h-10 mt-10 shrink-0 ", {
                            'h-20': l.type === 'md',
                            'h-30': l.type === 'lg',
                            'ml-[50vw]': i == 0,
                            "mr-[50vw]": i == lines.length - 1
                        })}>
                            {l.type == 'lg' && <div onClick={() => {
                                const el = refLineItems.current?.[i]
                                if (el) gsap.to("#roadmap_scroller", { duration: 1, scrollTo: { x: el, offsetX: window.innerWidth / 2 } })
                            }} className="flex flex-col items-center max-w-100 w-screen gap-50 -translate-x-1/2 absolute left-0 -top-10 cursor-pointer">
                                <div className="time_item font-lexend text-xl text-center">{l.time}</div>
                                <div className="time_desc text-center">{l.text}</div>
                            </div>}
                        </div>)}
                    </div>
                    <div className="flex flex-col items-center gap-5 -translate-x-1/2 absolute left-1/2 top-10">
                        <div className="w-px h-30 bg-linear-to-b from-[#FA8B16] to-[#FFC144]" />
                        <img src={currentUrl} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}


