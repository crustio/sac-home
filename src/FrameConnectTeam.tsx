import { FaGithub } from "react-icons/fa6";
import { TextLG } from "./components/Text";
import { Button } from "./components/ui/button";
import LetterGlitch from "./components/LetterGlitch";

// backdrop-filter: blur(300px)
const colors = [
    "#fff",
    "#ffffff60", "#ffffff00",
    "#ffffff60", "#ffffff00",
    "#ffffff60", "#ffffff00",
    "#ffffff60", "#ffffff00",
    "#ffffff60", "#ffffff00",
    "#ffffff60", "#ffffff00",
    "#ffffff60", "#ffffff00",
    "#ffffff60", "#ffffff00",
]
export function FrameConnectTeam() {
    return <div className="root_anim_item py-20 relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full max-w-4xl">
            <LetterGlitch glitchSpeed={10} glitchColors={colors} centerVignette outerVignette characters="000000000 1" />
        </div>
        <div className="relative flex flex-col items-center gap-10 z-10">
            <TextLG lg="2" text="Connect with SAC team" className="font-lexend font-light text-7xl leading-normal" />
            <div className="text-lg">Ready to dive into the world of decentralized AI solutions with us?</div>
            <div className="flex items-center gap-10 justify-center flex-wrap">
                <Button className="h-12 flex items-center gap-4 w-50">Join now</Button>
                <Button variant="outline" className="h-12 flex items-center gap-4 w-50 border-white/80 text-white"><FaGithub /> Github</Button>
            </div>
        </div>
    </div>
}