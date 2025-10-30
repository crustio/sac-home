import { cn } from "@/lib/utils";
import smcVideo from "/smc.mp4?url";
import square from "/square.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { useRef } from "react";
export function AnimSAC({ className }: { className?: string }) {
    const container = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.to("#anim-sac-square", {
            y: -20,
            duration: 1,
            ease: "sine.inOut",
            stagger: {
                each: 0.3,
                from: "random"
            },
            yoyo: true,
            repeat: -1
        });
        return () => { };
    }, { scope: container });
    return (
        <div ref={container} className={cn("relative z-0", className)}>
            <video src={smcVideo} muted loop autoPlay controls={false} width={792} height={700} className="w-3xl h-auto" />
            <img id="anim-sac-square" src={square} className="w-17 absolute left-2 bottom-4" />
            <img id="anim-sac-square" src={square} className="w-12 absolute left-30 bottom-25" />
            <img id="anim-sac-square" src={square} className="w-16 absolute right-30 bottom-0" />
            <img id="anim-sac-square" src={square} className="w-12 absolute right-0 bottom-20" />
        </div>
    );
}