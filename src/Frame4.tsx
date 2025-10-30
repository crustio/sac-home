
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import { type PropsWithChildren } from 'react'
import { TextLG } from './components/Text'
import { cn } from './lib/utils'
import { SvgGpu } from './svgs/SvgGpu'
import { SvgLitenode } from './svgs/SvgLitenode'
import { SvgStorage } from './svgs/SvgStorage'
import { SvgVerifynode } from './svgs/SvgVerifynode'
import iconGpu from "/gpu.svg"
import iconListimage from "/listimage.svg"
import iconLitenode from "/litenode.svg"
import iconStorage from "/storage.svg"
// import iconVerifynode from "/verifynode.svg"
import { Button } from './components/ui/button'
import { FaArrowRight } from 'react-icons/fa6'
gsap.registerPlugin(DrawSVGPlugin)
function Line({ type = 'h', className }: { type?: 'v' | 'h', className?: string }) {
    return <div className={cn("shrink-0 bg-[#2E2E2E]", { "h-px w-full": type == 'h', "w-px h-full": type == "v" }, className)}></div>
}


function Li({ children }: PropsWithChildren) {
    return <div className='flex items-center gap-2'>
        <img src={iconListimage} />
        {children}
    </div>
}
export function Frame4() {

    return <div className='w-full flex flex-col pt-25 items-center'>
        <Line className='root_anim_item' />
        <div className='flex flex-col px-4 py-10 gap-8 w-full'>
            <TextLG
                lg="2"
                text="Become A Provider"
                className="root_anim_item self-center w-fit font-lexend text-5xl text-center leading-15"
            />
            <TextLG
                lg="2"
                text={<>
                    Providers become valued partners and members of the SAC Ecosystem.<br />
                    Earn substantial income and receive exclusive network rewards.
                </>}
                className="root_anim_item self-center w-fit text-base text-center leading-normal"
            />
        </div>
        <Line className='root_anim_item' />
        <div className='flex flex-wrap mx-auto max-w-[1440px] h-max'>
            <div className='flex-1 basis-xs flex gap-4 flex-col px-4 py-10 border-r border-r-[#2E2E2E]'>
                <div className='root_anim_item flex flex-col gap-4'>
                    <div className='font-lexend text-[2rem] font-medium'>GPU Provider</div>
                    <div className='text-xl whitespace-pre-wrap'>Power AI inference tasks with your high-performance GPUs. Ideal for contributing elastic compute to dApps</div>
                    <div className='text-xl flex items-center gap-2.5'>
                        <img className='w-6 aspect-square' src={iconGpu} />
                        Minimum requirment
                    </div>
                    <ul className='opacity-60 leading-loose'>
                        <Li>NVIDIA H100/A100 GPU (or equivalent, 80GB VRAM)</Li>
                        <Li>Intel/AMD CPU (8+ cores), 64GB RAM, 2TB SSD</Li>
                        <Li>1Gbps stable internet</Li>
                    </ul>
                </div>
                <SvgGpu className='root_anim_item' />
            </div>
            <div className='flex-1 basis-xs flex gap-4 flex-col-reverse px-4 py-10'>
                <div className='root_anim_item flex flex-col gap-4 px-6'>
                    <div className='font-lexend text-[2rem] font-medium'>Storage Provider</div>
                    <div className='text-xl whitespace-pre-wrap'>Host and replicate AI datasets/models on Crust's decentralized network for reliable data availability</div>
                    <div className='text-xl flex items-center gap-2.5'>
                        <img className='w-6 aspect-square' src={iconStorage} />
                        Minimum requirment
                    </div>
                    <ul className='opacity-60 leading-loose'>
                        <Li>16TB HDD/SSD (enterprise-grade)</Li>
                        <Li>Intel CPU support SGX (4+ cores), 32GB RAM</Li>
                        <Li>500Mbps upload bandwidth</Li>
                    </ul>
                </div>
                <SvgStorage className='root_anim_item' />
            </div>
        </div>
        <Line />
        <div className='flex flex-wrap mx-auto max-w-[1440px] h-max'>
            <div className='flex-1 basis-xs flex gap-4 flex-col px-4 py-10 border-r border-r-[#2E2E2E]'>
                <div className='root_anim_item flex flex-col gap-4'>
                    <div className='font-lexend text-[2rem] font-medium'>LiteNodes</div>
                    <div className='text-xl whitespace-pre-wrap'>LiteNode supports quick data syncing and edge AI capabilities, with options for standard products or equivalent-performance PCs, laptops, or servers.</div>
                    <div className='text-xl flex items-center gap-2.5'>
                        <img className='w-6 aspect-square' src={iconLitenode} />
                        Standard Product
                    </div>
                    <ul className='opacity-60 leading-loose'>
                        <Li>ARM Cortex-A53 (1.5GHz)</Li>
                        <Li>1TB SATA SSD / 4GB LPDDR4</Li>
                        <Li>Interfaces: USB 3.0, HDMI (debug), GPIO (IoT).</Li>
                        <Li>Network: Gigabit Ethernet + Wi-Fi 6</Li>
                        <Li>{`Power: < 5W idle, < 15W running`}</Li>
                    </ul>
                </div>
                <SvgLitenode className='root_anim_item' />
            </div>
            <div className='flex-1 basis-xs flex gap-4 flex-col-reverse px-4 py-10'>
                <div className='root_anim_item flex flex-col gap-4 pl-6'>
                    <div className='font-lexend text-[2rem] font-medium'>LiteNode License NFT</div>
                    <div className='text-xl whitespace-pre-wrap'>Purchase a LiteNode License NFT to upgrade your LiteNode to participate in the Verification Network, enabling validation of data integrity and AI outputs through consensus, ensuring tamper-proof trustworthiness, while earning more incentives.</div>
                    {/* <div className='text-xl flex items-center gap-2.5'>
                        <img className='w-6 aspect-square' src={iconVerifynode} />
                        Minimum requirment
                    </div>

                    <ul className='opacity-60 leading-loose'>
                        <Li>Network Access License NFT</Li>
                        <Li>Standard laptop/desktop (Intel/AMD CPU 2+ cores)</Li>
                        <Li>8GB RAM, 500GB SSD</Li>
                        <Li>100Mbps internet</Li>
                    </ul> */}
                    <Button variant="outline" size="lg" className='h-12 flex items-center gap-3 w-60 border-white/80 text-white'>Buy <FaArrowRight /></Button>
                </div>
                <SvgVerifynode className='root_anim_item' />
            </div>
        </div>

    </div>
}