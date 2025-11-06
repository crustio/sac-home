// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode } from "react";
import { proxy, useSnapshot } from 'valtio';
import { TextLG } from "../components/Text";
import { cn } from "../lib/utils";

import { AnimatePresence, motion } from "motion/react";
import AnimStep1 from "../anims/AnimStep1";
import AnimStep2 from "../anims/AnimStep2";
import { AnimStep3 } from "../anims/AnimStep3";
import { AnimStep4 } from "../anims/AnimStep4";
import arrowRight from '/arrowright.svg';
import { useIsMobile } from "../hooks/useIsMobile";

type Step = {
    step: 1 | 2 | 3 | 4;
    tit: string;
    text: string[];
    content: ReactNode;
};
const steps: Step[] = [
    {
        step: 1,
        tit: 'Scalable AI Compute',
        text: [
            'AI compute layer is designed for efficient inference and lightweight tasks, supporting dynamic scaling of compute resources across distributed nodes.',
            'This dynamic adjustment of compute resources allowing the network to handle tens of thousands of TPS for AI workloads without centralized server bottlenecks. As a result, AI applications can scale seamlessly from small prototypes to global levels, reducing costs and achieving true elastic growth.'
        ],
        content: <AnimStep1 />
    },
    {
        step: 2,
        tit: 'Unstoppable AI Running',
        text: [
            'AI applications hosted on decentralized storage network, leveraging redundancy to ensure models and data are distributed across thousands of global nodes. Even if a single node fails, the system seamlessly switches over for zero-downtime operation.',
            'This resolves the single-point-of-failure risks in traditional cloud AI, making your AI applications truly "unstoppable"—resilient against network attacks or regional restrictions.'
        ],
        content: <AnimStep2 />
    },
    {
        step: 3,
        tit: 'Trustworthy AI Data',
        text: [
            'Every AI data process is auditable on-chain, ensuring transparent sourcing and privacy-first handling.',
            'Data ownership returns to users, avoiding black-box manipulation and supporting verifiable AI outputs. Additionally, over 100,000 globally distributed Verify Nodes further strengthen data integrity through distributed consensus mechanisms, providing real-time validation and backups to keep data trustworthy and tamper-proof anywhere in the world.'
        ],
        content: <AnimStep3 />
    },
    {
        step: 4,
        tit: 'AI Service Market',
        text: [
            'Service market enables frictionless transactions for secure file hosting and retrieval, with automated smart contracts handling orders for scalable, cost-effective data management. ',
            'For AI enthusiasts and enterprises, it opens up a dedicated trading hub for datasets, models, and inference outputs, fostering collaboration without intermediaries.'
        ],
        content: <AnimStep4 />
    },
]

const stepState = proxy({ step: 1 as Step['step'] })

function StepsBtn({ step, className }: { step?: Step['step'], className?: string }) {
    const snap = useSnapshot(stepState)
    const mstep = step ?? snap.step
    return <div className={cn("flex items-end gap-5", className)}>
        {steps.map(item => <div onClick={() => {
            stepState.step = item.step
        }} className="flex flex-col gap-2.5 cursor-pointer w-fit">
            <div className="flex items-center gap-6">
                {mstep == item.step ? <TextLG text={`0${item.step}`} className="text-2xl" /> : <span className="text-xl text-white/20">0{item.step}</span>}
                <div>
                    {mstep == item.step && <img src={arrowRight} className="w-3.5" />}
                </div>
            </div>
            <div style={{
                background: mstep == item.step ? 'linear-gradient(270deg, #FFC144 0%, #FA8B16 100%)' : 'rgba(255,255,255,.2)'
            }} className={cn("h-[3px] w-full")} />
        </div>)}

    </div>
}

export function Frame2() {
    const snap = useSnapshot(stepState)
    const data = steps.find(item => item.step == snap.step)!
    const isMobile = useIsMobile()
    return <div className="flex flex-col w-full">
        {isMobile ?
            <div className="flex flex-col w-full">
                {steps.map(data => <div key={`step_${data.step}`}
                    className="w-full">
                    <div style={{ background: 'linear-gradient(180deg, #FA8B16 0%, #FFC144 100%)' }}
                        className="root_anim_item flex flex-col gap-5 items-start px-4 py-6 text-black">
                        <div className="font-semibold text-2xl">0{data.step}</div>
                        <div className="font-medium font-lexend text-[1.75rem]">{data.tit}</div>
                        {data.text.map((item, i) => <div key={i}>{item}</div>)}
                    </div>
                    <div className="root_anim_item w-full p-4">{data.content}</div>
                </div>)}
            </div>
            : <div id={"frame2-step"}
                style={{ background: 'linear-gradient(180deg, #FA8B16 0%, #FFC144 100%)' }}
                className="root_anim_item w-screen h-screen max-h-200 flex">
                <div
                    className="h-full flex justify-end items-center w-full basis-[637px] flex-1">
                    <div className="w-full max-w-[637px] relative">
                        <AnimatePresence>
                            <motion.div key={`frame2-step-text-${data.step}`} initial={{ opacity: 0, y: '50%' }} animate={{ y: '-50%', opacity: 1 }} exit={{ opacity: 0, y: '-150%' }}
                                className="w-full absolute left-0 top-0 flex flex-col gap-8 items-start p-4 text-black">
                                <div className="font-semibold text-2xl">0{data.step}</div>
                                <div className="font-medium font-lexend text-[2rem]">{data.tit}</div>
                                {data.text.map((item, i) => <div key={i}>{item}</div>)}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <div className=" h-full bg-black relative flex items-center pl-5 basis-[803px] flex-1" >
                    <motion.div key={`frame2-step-svg-${data.step}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="w-full max-w-[803px]">
                        {data.content}
                    </motion.div>
                    <StepsBtn step={data.step} className="absolute left-12.5 bottom-12.5" />
                </div>
            </div>}
    </div>;
}