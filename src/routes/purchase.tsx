import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/purchase')({
    component: RouteComponent,
})

import Counter from "@/components/Counter"
import { TextLG } from "@/components/Text"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useIsMobile } from "@/hooks/useIsMobile"
import { scrollTo } from '@/lib/mutils'
import { cn } from "@/lib/utils"
import { useConnectModal } from '@rainbow-me/rainbowkit'
import gsap from "gsap"
import { useEffect, useRef, useState, useTransition, type HTMLAttributes } from "react"
import { useInterval } from "react-use"
import { useAccount, useSignMessage } from 'wagmi'
import urlCube from '/WireframeCube.png'
import urlBgCube from '/bgcube.png'
import urlBgpg from '/bgpg.png'
import urlMountains from '/mountains.png'
import urlNftPurchase from '/nftpurchase.png'
import { smoothTo } from '@/hooks/gsap'

function Btn({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div {...props} className={cn("relative flex items-center py-4 px-8 font-semibold text-[1.375rem] cursor-pointer", className)}>
        <div style={{
            background: `
                        radial-gradient(32.52% 115.63% at 37.5% 100%, rgba(255, 255, 255, 0.292) 0%, rgba(255, 255, 255, 0.048) 100%),
                        radial-gradient(91.13% 146.88% at 43.75% -31.25%, rgba(255, 137, 137, 0.92) 21.25%, rgba(255, 169, 106, 0.57) 88.62%),
                        radial-gradient(92.05% 200% at 94.89% -132.81%, #FF7A00 67.59%, rgba(219, 255, 0, 0.38) 100%),
                        linear-gradient(0deg, #FFF500, #FFF500)
                        `,
            boxShadow: '0px 0px 2px 0px #FFFFFF inset'

        }} className="absolute left-0 w-full h-[calc(100%-4px)] rounded-full  bottom-0 "></div>
        <div style={{
            background: `
                        radial-gradient(31.25% 236.33% at 96.59% 31.25%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%),
                        radial-gradient(39.2% 181% at 5.68% 100%, rgba(246, 251, 34, 0.51) 0%, rgba(255, 158, 69, 0) 100%) ,
                        radial-gradient(71.74% 117.31% at 32.95% 0%, rgba(248, 74, 4, 0.7) 21.25%, rgba(255, 169, 106, 0.57) 88.62%),
                        radial-gradient(92.05% 200% at 94.89% -132.81%, #FF7A00 150%, rgba(255, 199, 0, 0.38) 100%),
                        linear-gradient(0deg, #FFF500, #FFF500)
                        `,
            boxShadow: `
                        0px 5px 50px 0px #AE7129CC,
                        0px 10px 20px 0px #E8CD6E33,
                        0px -10px 30px 0px #F84A0466,
                        0px 0px 20px 0px #FFFFFF99 inset
                        `

        }} className="absolute left-0 w-full h-[calc(100%-4px)] rounded-full top-0"></div>
        <div className="relative z-10">
            {children}
        </div>
    </div>
}

const faqs: { q: string, a: string }[] = [
    {
        q: `Who’s Eligible to Join the Sale?`,
        a: `Anyone in supported countries who meets our basic rules can jump in—just check our disclaimer page for the full scoop on terms and fine print. And we'll need KYC before you can claim any rewards.`
    },
    {
        q: `How Do I Buy a License?`,
        a: `It's straightforward: Head to the purchase page below, pick the number of nodes you want, and buy. Double-check your eligibility first to ensure smooth sailing.`
    },
    {
        q: `How Do I Pay for a License?`,
        a: `We accept USDC on BSC.`
    },
    {
        q: `What Do I Receive Upon Purchase?`,
        a: `After completing the purchase, you'll receive an NFT License—one per node—that grants you the right to participate in verificaition network (or delegate it to someone else)`
    },
    {
        q: `What Rewards Do Node Runners Get?`,
        a: `Node runners can earn up to 20% of the token supply over three years for helping secure and validate the network.`
    },
    {
        q: `Why Participate in Verification Network?`,
        a: `By operating a node, you empower decentralized AI through Al data verification while collecting rewards for your contributions.`
    },
    {
        q: `Is Running a Node a Headache?`,
        a: `Nope, super user-friendly! Our step-by-step guide drops soon, and if you want zero effort, delegate it in one click to someone else.`
    },
    {
        q: `How Can I Get Whitelist Priority?`,
        a: `The whitelist is for our top fans, partners, and helpers—giving you first pick. We've saved spots for active community stars.`
    },
]


function TimerDown({ end }: { end: number }) {
    const [now, setNow] = useState(new Date().getTime())
    useInterval(() => setNow(new Date().getTime()), 1000)
    const dur = Math.max(Math.round((end - now) / 1000), 0)
    const day = Math.floor(dur / (86400))
    const hours = Math.floor((dur % 86400) / (3600))
    const minutes = Math.floor((dur % 3600) / 60)
    const secends = Math.floor(dur % 60)
    const isMobile = useIsMobile()
    const renderItem = (num: number, desc: string) => {
        return <div className="relative">
            <Counter value={num} fontSize={isMobile ? 30 : 60} fontWeight={500} />
            <div className="absolute left-1/2 top-[calc(100%+20px)] -translate-x-1/2 text-xs md:text-sm lg:text-base uppercase">
                {desc}
            </div>
        </div>
    }
    return <div style={{ fontSize: isMobile ? 24 : 52 }} className="flex justify-center gap-2 md:gap-4 leading-none">
        {renderItem(day, 'days')}
        <span className="opacity-40">:</span>
        {renderItem(hours, 'hours')}
        <span className="opacity-40">:</span>
        {renderItem(minutes, 'minutes')}
        <span className="opacity-40">:</span>
        {renderItem(secends, 'secends')}
    </div>
}


function ABorder({ className }: { className?: string }) {
    return <div className={cn('flex flex-col absolute w-full h-full left-0 top-0 text-[25px]', className)}>
        <div className='flex items-start shrink-0'>
            <svg className='shrink-0' width="1em" height="1em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0.5H11L0.5 11V25" stroke="white" />
            </svg>
            <div className='bg-white opacity-20 h-[0.04em] flex-1'></div>
            <svg className='shrink-0 rotate-90' width="1em" height="1em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0.5H11L0.5 11V25" stroke="white" opacity={0.4} />
            </svg>
        </div>
        <div className='w-full flex-1 flex justify-between'>
            <div className='bg-white opacity-20 w-[0.04em] h-full'></div>
            <div className='bg-white opacity-20 w-[0.04em] h-full'></div>
        </div>
        <div className='flex items-end shrink-0'>
            <svg className='shrink-0 -rotate-90' width="1em" height="1em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0.5H11L0.5 11V25" stroke="white" opacity={0.4} />
            </svg>
            <div className='bg-white opacity-20 h-[0.04em] flex-1'></div>
            <svg className='shrink-0 rotate-180' width="1em" height="1em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0.5H11L0.5 11V25" stroke="white" />
            </svg>
        </div>
    </div>
}
function ProgressCircle({ progress = 0.1, className }: { progress?: number, className?: string }) {
    const ref = useRef<SVGCircleElement>(null)
    const offset = Math.round(1383 * (1 - progress))
    const percent = `${Math.round(progress * 100)}%`
    useEffect(() => {
        if (ref.current) {
            gsap.to(ref.current, { drawSVG: percent, duration: 0.2 })
        }
    }, [percent])
    return <svg className={cn('text-[20rem]', className)} width="1em" height="1em" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">

        <circle strokeLinecap="round" cx={300} cy={300} r={220} strokeWidth="56" stroke="url(#paint0_linear_571_374)" />
        <circle ref={ref} strokeLinecap="round" cx={300} cy={300} r={220} strokeWidth="90" stroke="url(#paint0_radial_571_374)"
            transform-origin="center" transform="rotate(-90)" strokeDasharray={1383} strokeDashoffset={offset}
            filter="url(#filter0_d_571_374)" />
        <foreignObject x="0" y="0" width="100%" height="100%">
            <div className="w-full h-full flex flex-col items-center ">
                <TextLG lg="1" className="text-7xl lg:text-[5.125rem] mt-[43.5%] leading-none font-lexend font-semibold" text={percent} />
                <div className="font-lexend text-xl lg:text-2xl">Token Allocation</div>
            </div>
        </foreignObject>
        <defs>
            <filter id="filter0_d_571_374">
                <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="10"
                    floodColor="#fff"
                    floodOpacity="0.35" />
            </filter>
            <linearGradient id="paint0_linear_571_374" x1="300" y1="46" x2="300" y2="546" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFC144" />
                <stop offset="1" stopColor="#FA8B16" />
            </linearGradient>
            <radialGradient id="paint0_radial_571_374">
                <stop offset="0.8" stopColor="#FA8B16" />
                <stop offset="1" stopColor="#F74503" />
            </radialGradient>
        </defs>
    </svg>

}


function RegisterNow() {
    const acc = useAccount()
    const { signMessage } = useSignMessage()
    const con = useConnectModal()
    const [isClick, setIsClick] = useState(false)
    const [isPending, startTransition] = useTransition()
    const signMsg = () => {
        if (acc.isConnected) {
            signMessage({ message: 'For Strategy A Crust Register' })
        }
    }
    const mutate = () => {
        if (isPending) return
        startTransition(async () => {
            if (acc.isConnecting) return
            if (!acc.isConnected) {
                if (!con.openConnectModal) return
                if (con.connectModalOpen) return
                setIsClick(true)
                con.openConnectModal()
            }
            signMsg()
        })
    }

    useEffect(() => {
        isClick && signMsg()
    }, [isClick, acc.isConnected])
    return <Btn className="" onClick={mutate}>Register now</Btn>
}
export function RouteComponent() {
    return <>
        <div className="w-full relative pt-18 md:pt-25 flex flex-col items-center">
            <div className="relative w-full max-w-360 px-4 mx-auto overflow-hidden ">
                <div className="absolute z-0 w-full h-full pointer-events-none">
                    <div style={{
                        background: `radial-gradient(82.19% 55.56% at 50% 61.13%, rgba(0, 0, 0, 0) 0%, #000000 82.3%),url(/mesh.png)`,
                        backgroundSize: '100%,100%'
                    }} className="w-full max-w-xl aspect-[1.35] h-auto opacity-20 absolute top-0 left-1/2 -translate-x-1/2" />
                    <img src={urlBgCube} className="absolute opacity-80 left-0 top-0 w-[22vw] min-w-30 max-w-60 xl:hidden" />
                    <img src={urlBgCube} className="absolute opacity-80 right-0 top-1/3 w-[22vw] min-w-30 max-w-60 rotate-180 xl:hidden" />
                </div>
                <div className="flex w-full flex-col items-center relative z-10 py-20 md:py-30">
                    <div className="root_anim_item text-center text-3xl md:text-6xl leading-[1.4] md:leading-[1.3]">LiteNode License<br />for Verificaiton Network</div>
                    <div className="root_anim_item">
                        <div className="text-2xl opacity-60 text-center mt-5">The Guardian of<br className="md:hidden" /> trustworthy AI</div>
                    </div>
                    {/* cubes */}
                    <div className="w-full -mt-20 md:mt-0 md:absolute bottom-0 text-[clamp(43px,8.5vw,122px)] flex pointer-events-none md:px-[1em]">
                        <div className="root_anim_item"><img src={urlCube} className="aspect-square w-[1em] rotate-12 mt-[.4em]" /></div>
                        <div className="root_anim_item"><img src={urlCube} className="aspect-square w-[1.3em] rotate-45 mt-[2.5em]" /></div>
                        <div className="flex-1"></div>
                        <div className="root_anim_item"><img src={urlCube} className="aspect-square w-[1.1em] -rotate-45 mt-[2.3em]" /></div>
                        <div className="root_anim_item"><img src={urlCube} className="aspect-square w-[1.2em] mt-[0.5em]" /></div>
                    </div>
                    <Btn className="root_anim_item mt-18" onClick={() => smoothTo("#purchase")}>Head to Purchase</Btn>
                </div>
            </div>
            <div className="flex w-full flex-col overflow-hidden items-center py-5 md:py-10 mt-5 md:mt-10 gap-5 md:gap-10">
                <TextLG lg="2" className="root_anim_item text-3xl md:text-5xl font-lexend" text="Total Licenses" />
                <TextLG lg="2" className="root_anim_item text-[2.5rem] md:text-[6.25rem] font-lexend" text="100,000" />
                <img src={urlMountains} className="root_anim_item w-[82vw] min-w-288 max-w-393 aspect-[3.3974] object-center" />
                <div className="w-full max-w-360">
                    <div className="root_anim_item leading-loose px-4 w-full whitespace-pre-wrap text-center">As a key component of the SAC module, the Verificaiton network is engineered to ensure AI operations <br />are verifiable, transparent, and community-driven.</div>
                    <div className="root_anim_item w-full pointer-events-none -mt-16 hidden lg:block">
                        <div className="px-12 flex gap-10 items-center">
                            <span className="leading-loose">+</span>
                            <span className="leading-loose">+</span>
                            <div className="flex-1"></div>
                            <span className="leading-loose">+</span>
                            <span className="leading-loose">+</span>
                        </div>
                        <svg className="-mt-4 w-full aspect-[15.46]" viewBox="0 0 1206 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M1200 2.66663C1200 4.13939 1201.19 5.33329 1202.67 5.33329C1204.14 5.33329 1205.33 4.13939 1205.33 2.66663C1205.33 1.19387 1204.14 -4.07696e-05 1202.67 -4.07696e-05C1201.19 -4.07696e-05 1200 1.19387 1200 2.66663ZM1123.73 76.6666V77.1666H1123.92L1124.07 77.0314L1123.73 76.6666ZM81.6069 76.6666L81.2649 77.0314L81.4092 77.1666H81.6069V76.6666ZM-0.00016284 2.66663C-0.00016284 4.13939 1.19374 5.33329 2.6665 5.33329C4.13926 5.33329 5.33317 4.13939 5.33317 2.66663C5.33317 1.19387 4.13926 -4.07696e-05 2.6665 -4.07696e-05C1.19374 -4.07696e-05 -0.00016284 1.19387 -0.00016284 2.66663ZM1202.67 2.66663L1202.32 2.30184L1123.38 76.3018L1123.73 76.6666L1124.07 77.0314L1203.01 3.03141L1202.67 2.66663ZM1123.73 76.6666V76.1666H81.6069V76.6666V77.1666H1123.73V76.6666ZM81.6069 76.6666L81.9489 76.3018L3.00846 2.30184L2.6665 2.66663L2.32455 3.03141L81.2649 77.0314L81.6069 76.6666Z" fill="white" />
                        </svg>
                    </div>
                    <div className="w-full flex flex-col items-center mt-10">
                        <img src={urlBgpg} className="root_anim_item w-full max-w-275" />
                        <div className="root_anim_item -mt-30 lg:-mt-70">
                            <ProgressCircle className="text-[clamp(320px,41vw,600px)]" />
                        </div>
                    </div>
                    <div className="root_anim_item leading-loose p-4 whitespace-pre-wrap text-center relative mx-auto w-full max-w-7xl">
                        Every participant who contributes to validating AI operations, securing data integrity, and driving consensus <br className="hidden lg:block" />earns proportional returns—fostering a vibrant, self-sustaining ecosystem where community involvement <br className="hidden lg:block" />directly translates to shared prosperity and long-term value creation.
                        <ABorder className='hidden lg:flex' />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-360 px-4 flex flex-col items-center py-5 gap-4 lg:py-10">
                <TextLG lg="2" className="root_anim_item text-3xl md:text-5xl font-lexend mb-5" text="FAQ" />
                <Accordion className="max-w-220 w-full" type="single" collapsible defaultValue={faqs[0].q}>
                    {faqs.map(faq => <AccordionItem className="root_anim_item" key={faq.q} value={faq.q}>
                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                        <AccordionContent>{faq.a}</AccordionContent>
                    </AccordionItem>)}
                </Accordion>
            </div>
            <div className="w-full bg-white/6 py-5 lg:py-10">
                <div className="w-full max-w-360 mx-auto px-4 flex flex-col items-center gap-6">
                    <TextLG lg="2" className="root_anim_item text-3xl md:text-5xl font-lexend mb-5 text-center lg:hidden"
                        text={<>LiteNode License<br />NFT Purchase</>} />
                    <div className="flex flex-col lg:flex-row items-center gap-6 w-full pb-20">
                        <img src={urlNftPurchase} className="root_anim_item w-full lg:w-[35vw] max-w-167 flex-1" />
                        <div id='purchase' className="root_anim_item flex flex-col gap-6 items-center flex-1 w-full">
                            <TextLG lg="2" className=" text-4xl font-lexend mb-5 text-center hidden lg:block text-nowrap"
                                text={"LiteNode License NFT Purchase"} />
                            <RegisterNow />
                            <Dialog >
                                <DialogTrigger asChild>
                                    <Button className="text-white underline" variant="link">Disclaimer</Button>
                                </DialogTrigger>
                                <DialogOverlay />
                                <DialogContent
                                    showCloseButton={false}
                                    onEscapeKeyDown={(e) => e.preventDefault()}
                                    onInteractOutside={(e) => { e.preventDefault() }}
                                    className='h-1/2'>
                                    <DialogHeader>
                                        <DialogTitle>Disclaimer</DialogTitle>
                                    </DialogHeader>
                                    <DialogDescription className='flex flex-col gap-1 h-full overflow-y-auto'>
                                        <p>This document and the LiteNode License NFT offering are for informational purposes only and do not constitute financial, investment, legal, tax, or other professional advice. Participation in the SAC Verification Network involves significant risks, including but not limited to substantial volatility in $SAC token value, potential total loss of principal, and regulatory uncertainties in the rapidly evolving blockchain and AI sectors. Rewards, yields, and incentives are not guaranteed and depend on network performance, governance decisions, delegation outcomes, and overall ecosystem health—factors subject to change via community votes.</p>
                                        <p>Users assume full responsibility for all risks associated with delegation, including operator errors, hardware failures, smart contract vulnerabilities, or malicious actions by third parties, which could result in lost rewards, slashed bonds, or unrecoverable NFTs. No warranties are provided regarding uptime, security, or returns; SAC and its affiliates disclaim liability for any direct, indirect, or consequential damages arising from use.</p>
                                        <p>Always conduct your own due diligence, consult qualified professionals (e.g., financial advisors, attorneys), and ensure compliance with applicable laws in your jurisdiction, including securities regulations (e.g., SEC guidelines for U.S. users) and data privacy standards (e.g., GDPR). This is not an offer to sell or solicitation to buy securities in any jurisdiction where prohibited.</p>
                                    </DialogDescription>
                                    <DialogFooter>
                                        <DialogClose className='cursor-pointer'><Button className='outline-none'>Noted</Button></DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            <Button className="border-white/80 text-white cursor-default" size="lg" variant="outline">Registration Period</Button>
                            <TimerDown end={new Date("2025/12/30").getTime()} />
                        </div>
                    </div>

                </div>
            </div>

        </div >
    </>
}