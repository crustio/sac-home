import { scrollTo } from "@/lib/mutils";
import { AnimSAC } from "../anims/AnimSAC";
import CountUp from "../components/CountUp";
import Particles from "../components/Particles";
import { TextLG } from "../components/Text";
import TextType from "../components/TextType";
import { Button } from "../components/ui/button";
import { smoothTo } from "@/hooks/gsap";

export function Frame1() {
    const renderNumber = (title: string, num: number, suffix: string) => {
        return <div className="root_anim_item flex flex-col items-center gap-5">
            <TextLG lg="3" text={
                <>
                    <CountUp duration={0.2} to={num} separator="," />{suffix}
                </>
            } className="font-lexend text-3xl md:text-5xl" />
            <div className="font-poppins opacity-60">{title}</div>
        </div>
    }
    return (
        <div className="w-full md:min-h-screen relative pt-18 md:pt-25">
            <Particles particleBaseSize={6} speed={0.1} particleSpread={40} sizeRandomness={2} className="absolute left-0 top-0 z-0 opacity-50" />
            <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 pb-20 relative z-10 gap-5 md:gap-0">
                <div className="root_anim_item flex flex-col w-full items-center md:items-start max-w-2xl gap-3 md:gap-12 py-8 md:py-20 font-lexend relative z-10">
                    <div className="opacity-60 text-3xl md:text-6xl font-medium">Strategy A Crust</div>
                    <div className="font-semibold text-4xl md:text-7xl flex items-center gap-4 md:gap-8">
                        <TextType text={['The Biggest', 'Decentralized']} />
                        <TextLG text="AI." />
                    </div>
                    <div className="opacity-60 text-3xl md:text-6xl font-medium">Infrastructure</div>
                </div>
                <AnimSAC className="root_anim_item md:absolute right-0 top-0 pointer-events-none" />
                <div className="root_anim_item flex items-center gap-5 z-10 justify-center md:justify-start">
                    <Button size="lg" onClick={() => smoothTo('#tech')}>Explore Tech</Button>
                    {/* <Button variant="outline" size="lg">Join Community</Button> */}
                </div>
                {/* Text */}
                <TextLG
                    lg="2"
                    text="Trustworthy AI Build on Strategy A Crust"
                    className="root_anim_item self-center w-fit mt-5 md:mt-40 font-lexend text-3xl md:text-5xl text-center leading-tight pointer-events-none"
                />
                <div className="root_anim_item">
                    <div className="self-center text-center opacity-60 mt-3 md:mt-6 leading-normal md:leading-loose font-poppins pointer-events-none">
                        By merging with Crust Network, SAC integrated decentralized storage and expand AI compute<br />capabilities to build the largest decentralized AI infrastructure.
                    </div>
                </div>
                {/* Numbers */}
                <div className="flex flex-col md:flex-row justify-between gap-5 mt-8 md:mt-25 pointer-events-none">
                    {renderNumber("STORAGE CAPACITY", 144969, "TB")}
                    {renderNumber("GPU POWER", 254780321, "G")}
                    {renderNumber("VERIFY NODES", 100000, "")}
                </div>
            </div>
        </div>
    );
}