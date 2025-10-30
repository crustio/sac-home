import { AnimSAC } from "./anims/AnimSAC";
import CountUp from "./components/CountUp";
import Particles from "./components/Particles";
import { TextLG } from "./components/Text";
import TextType from "./components/TextType";
import { Button } from "./components/ui/button";
import { Header } from "./Header";

export function Frame1() {
    const renderNumber = (title: string, num: number, suffix: string) => {
        return <div className="root_anim_item flex flex-col items-center gap-5">
            <TextLG lg="3" text={
                <>
                    <CountUp duration={0.2} to={num} separator=","/>{suffix}
                </>
            } className="font-lexend text-5xl" />
            <div className="font-poppins opacity-60">{title}</div>
        </div>
    }
    return (
        <div className="w-full min-h-screen relative">
            <Particles particleBaseSize={6} speed={0.1} particleSpread={40} sizeRandomness={2} className="absolute left-0 top-0 z-0 opacity-50" />
            <Header />
            <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 pb-20 relative z-10">
                <div className="root_anim_item flex flex-col w-2xl gap-12 py-20 font-lexend relative z-10">
                    <div className="opacity-60 text-6xl font-medium">Strategy A Crust</div>
                    <div className="font-semibold text-7xl flex items-center gap-8">
                        <TextType text={['The Biggest', 'Decentralized']} />
                        <TextLG text="AI." />
                    </div>
                    <div className="opacity-60 text-6xl font-medium">Infrastructure</div>
                </div>
                <div className="root_anim_item flex items-center gap-5 z-10">
                    <Button size="lg">Explore Tech</Button>
                    <Button variant="outline" size="lg">Join Community</Button>
                </div>
                <AnimSAC className="root_anim_item absolute right-0 top-0 pointer-events-none" />
                {/* Text */}
                <TextLG
                    lg="2"
                    text="Trustworthy AI Build on Strategy A Crust"
                    className="root_anim_item self-center w-fit mt-40 font-lexend text-5xl text-center leading-15 pointer-events-none"
                />
                <div className="root_anim_item self-center text-center opacity-60 mt-6 leading-loose font-poppins pointer-events-none">
                    By merging with Crust Network, SAC integrated decentralized storage and expand AI compute<br />capabilities to build the largest decentralized AI infrastructure.
                </div>
                {/* Numbers */}
                <div className="flex justify-between gap-5 mt-25 pointer-events-none">
                    {renderNumber("STORAGE CAPACITY", 144969, "TB")}
                    {renderNumber("GPU POWER", 254780321, "G")}
                    {renderNumber("VERIFY NODES", 200000, "+")}
                </div>
            </div>
        </div>
    );
}