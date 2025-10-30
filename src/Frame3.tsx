
import { AnimModular } from './anims/AnimModular'
import { TextLG } from './components/Text'
export function Frame3() {
    return <div className='w-full flex flex-col gap-10 py-25 items-center mx-auto max-w-[1440px]'>
        <TextLG
            lg="2"
            text="Modular DeAIIn"
            className="root_anim_item self-center w-fit font-lexend text-5xl text-center leading-15"
        />
        <TextLG
            lg="2"
            text="（Decentralized AI Infrastructure）"
            className="root_anim_item self-center w-fit font-lexend text-5xl text-center leading-15"
        />
        <AnimModular />
    </div>
}