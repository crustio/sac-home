import { motion } from 'motion/react'
import { useMemo, useState } from 'react'


function useHoverHelp() {
    const [isHover, setHover] = useState(false)
    return useMemo(() => ({
        isHover,
        onHoverStart: () => setHover(true),
        onHoverEnd: () => setHover(false),
    }), [setHover, isHover])
}
export function AnimModular() {
    const hoverG1 = useHoverHelp()
    const hoverG2 = useHoverHelp()
    const hoverG3 = useHoverHelp()

    const hoverG4 = useHoverHelp()
    const hoverG5 = useHoverHelp()
    const hoverG6 = useHoverHelp()
    return <svg width="100%" height="auto" viewBox="0 0 1564 1897" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="root_anim_item">
            <motion.g initial={{ opacity: 1 }} whileHover={{ opacity: 0.9 }} className="cursor-pointer" onHoverStart={hoverG1.onHoverStart} onHoverEnd={hoverG1.onHoverEnd}>
                <use href="#box_black_bg" />
                <motion.g opacity={hoverG1.isHover ? 1 : 0.6} animate='opacity'>
                    <use href="#box_orange_black" />
                    <use href="#box_orange_black" transform="translate(-340,0)" />
                    <use href="#box_orange_black" transform="translate(-170,70)" />
                </motion.g>
                <use href="#box_black_fg" />
            </motion.g>
            {/* LITENODES */}
            <path opacity="0.6" d="M1044 1523L1234 1608" stroke="#FFC144" stroke-width="2" stroke-linecap="round" />
            <g opacity="0.6" transform="translate(1247,1595)">
                <use href="#text_focus_l" x="0" y="0" />
                <use href="#text_focus_l" transform="rotate(180,0,0)" x="-135" y="-31.5" />
                <text x="10" y="23" fontFamily="Lexend" fontSize="20" fill="#FFC144">LITENODES</text>
                {hoverG1.isHover && <motion.g initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}>
                    <use href="#text_bg" x="5" y="50" />
                    <text fill="#fff" fontFamily="Poppins" fontSize="14" transform="translate(20,60)">
                        <tspan x="0" dy="1.5em">A plug-and-play hardware device</tspan>
                        <tspan x="0" dy="1.5em">designed to lower the entry barrier, </tspan>
                        <tspan x="0" dy="1.5em">significantly increase node </tspan>
                        <tspan x="0" dy="1.5em">participation, and strengthen network</tspan>
                        <tspan x="0" dy="1.5em">decentralization</tspan>
                    </text>
                </motion.g>}
            </g>
            {/* STORAGENODES */}
            <path opacity="0.6" d="M794 1607L994 1697" stroke="#FFC144" stroke-width="2" stroke-linecap="round" />
            <g opacity="0.6" transform="translate(950,1700)">
                <use href="#text_focus_l" x="0" y="0" />
                <use href="#text_focus_l" transform="rotate(180,0,0)" x="-185" y="-31.5" />
                <text x="10" y="23" fontFamily="Lexend" fontSize="20" fill="#FFC144">STORAGENODES</text>
                {hoverG1.isHover && <motion.g initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <use href="#text_bg" x="5" y="50" transform='scale(0.9)' />
                    <text fill="#fff" fontFamily="Poppins" fontSize="14" transform="translate(20,60)">
                        <tspan x="0" dy="1.5em">Robust servers handling data </tspan>
                        <tspan x="0" dy="1.5em">redundancy and retrieval, ensuring </tspan>
                        <tspan x="0" dy="1.5em">permanent, verifiable storage</tspan>
                    </text>
                </motion.g>}
            </g>

            {/*  GPUNODES */}
            <path opacity="0.6" d="M530 1516L330 1606" stroke="#FFC144" stroke-width="2" stroke-linecap="round" />
            <g opacity="0.6" transform="translate(190,1590)">
                <use href="#text_focus_l" x="0" y="0" />
                <use href="#text_focus_l" transform="rotate(180,0,0)" x="-135" y="-31.5" />
                <text x="10" y="23" fontFamily="Lexend" fontSize="20" fill="#FFC144">GPUNODES</text>
                {hoverG1.isHover && <motion.g initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <use href="#text_bg" x="-175" y="50" />
                    <text fill="#fff" fontFamily="Poppins" fontSize="14" transform="translate(115,60)" textAnchor='end'>
                        <tspan x="0" dy="1.5em">High-performance hardware nodes</tspan>
                        <tspan x="0" dy="1.5em">dedicated to AI compute, enabling</tspan>
                        <tspan x="0" dy="1.5em">efficient, elastic inference</tspan>
                    </text>
                </motion.g>}
            </g>

            {/* HARDWARE */}
            <path d="M330 1296L530 1386" stroke="#5A5A5A" stroke-width="2" stroke-linecap="round" />
            <g transform="translate(190,1280)">
                <use href="#text_focus_l_5A5A5A" x="0" y="0" />
                <use href="#text_focus_l_5A5A5A" transform="rotate(180,0,0)" x="-135" y="-31.5" />
                <text x="10" y="23" fontFamily="Lexend" fontSize="20" fill="#5A5A5A">HARDWARE</text>
            </g>

        </g>
        <g className="root_anim_item">
            <motion.g initial={{ opacity: 1 }} whileHover={{ opacity: 0.9 }} className="cursor-pointer" onHoverStart={hoverG2.onHoverStart} onHoverEnd={hoverG2.onHoverEnd}>
                <use href="#box_black_bg" transform="translate(0,-380)" />
                <motion.g opacity={hoverG2.isHover ? 1 : 0.6} animate='opacity'>
                    <use href="#box_orange_black" transform="translate(0,-380)" />
                    <use href="#box_orange_black" transform="translate(-170,-310)" />
                </motion.g>
                <use href="#box_black_fg" transform="translate(0,-380)" />
            </motion.g>
            {/* STORAGE NETWORK */}
            <path opacity="0.6" d="M1064 1141L1234 1211" stroke="#FFC144" stroke-width="2" stroke-linecap="round" />
            <g opacity="0.6" transform="translate(1247,1195)">
                <use href="#text_focus_l" x="0" y="0" />
                <use href="#text_focus_l" transform="rotate(180,0,0)" x="-225" y="-31.5" />
                <text x="10" y="23" fontFamily="Lexend" fontSize="20" fill="#FFC144">STORAGE NETWORK</text>
                {hoverG2.isHover && <motion.g initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}>
                    <use href="#text_bg" x="5" y="50" />
                    <text fill="#fff" fontFamily="Poppins" fontSize="14" transform="translate(20,60)">
                        <tspan x="0" dy="1.5em">Crust-based decentralized storage, </tspan>
                        <tspan x="0" dy="1.5em">providing redundant, privacy-focused  </tspan>
                        <tspan x="0" dy="1.5em">data availability for AI inputs and </tspan>
                        <tspan x="0" dy="1.5em">models</tspan>
                    </text>
                </motion.g>}
            </g>

            {/* COMPUTE NETWORK */}
            <path opacity="0.6" d="M824 1236L1158.5 1379" stroke="#FFC144" stroke-width="2" stroke-linecap="round" />
            <g opacity="0.6" transform="translate(1160,1365)">
                <use href="#text_focus_l" x="0" y="0" />
                <use href="#text_focus_l" transform="rotate(180,0,0)" x="-225" y="-31.5" />
                <text x="10" y="23" fontFamily="Lexend" fontSize="20" fill="#FFC144">COMPUTE NETWORK</text>
                {hoverG2.isHover && <motion.g initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <use href="#text_bg" x="5" y="50" />
                    <text fill="#fff" fontFamily="Poppins" fontSize="14" transform="translate(20,60)">
                        <tspan x="0" dy="1.5em">Distributed AI inference layer optimized </tspan>
                        <tspan x="0" dy="1.5em">for lightweight tasks, dynamically </tspan>
                        <tspan x="0" dy="1.5em">scaling GPU resources for high TPS </tspan>
                        <tspan x="0" dy="1.5em">without central bottlenecks</tspan>
                    </text>
                </motion.g>}
            </g>

            {/* PROTOCOL */}
            <path d="M330 935L530 1025" stroke="#5A5A5A" stroke-width="2" stroke-linecap="round" />
            <g transform="translate(190,920)">
                <use href="#text_focus_l_5A5A5A" x="0" y="0" />
                <use href="#text_focus_l_5A5A5A" transform="rotate(180,0,0)" x="-135" y="-31.5" />
                <text x="10" y="23" fontFamily="Lexend" fontSize="20" fill="#5A5A5A">PROTOCOL</text>
            </g>

        </g>
        <g className="root_anim_item">
            <motion.g initial={{ opacity: 1 }} whileHover={{ opacity: 0.9 }} className="cursor-pointer" onHoverStart={hoverG3.onHoverStart} onHoverEnd={hoverG3.onHoverEnd}>
                <use href="#box_black_bg" transform="translate(0,-760)" />
                <motion.g opacity={hoverG3.isHover ? 1 : 0.6} animate='opacity'>
                    <use href="#box_orange_black" transform="translate(-170,-690)" />
                </motion.g>
                <use href="#box_black_fg" transform="translate(0,-760)" />
            </motion.g>

            {/* Blockchain */}
            <path opacity="0.6" d="M854 835L1144 965" stroke="#FFC144" stroke-width="2" stroke-linecap="round" />
            <g opacity="0.6" transform="translate(1147,950)">
                <use href="#text_focus_l" x="0" y="0" />
                <use href="#text_focus_l" transform="rotate(180,0,0)" x="-155" y="-31.5" />
                <text x="10" y="23" fontFamily="Lexend" fontSize="20" fill="#FFC144">BLOCKCHAIN</text>
                {hoverG3.isHover && <motion.g initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}>
                    <use href="#text_bg" x="5" y="50" />
                    <text fill="#fff" fontFamily="Poppins" fontSize="14" transform="translate(20,60)">
                        <tspan x="0" dy="1.5em">SAC's foundational layer for trustless</tspan>
                        <tspan x="0" dy="1.5em">transactions, where work reports </tspan>
                        <tspan x="0" dy="1.5em">generated by the compute and storage </tspan>
                        <tspan x="0" dy="1.5em">networks form the consensus mechanism </tspan>
                        <tspan x="0" dy="1.5em">and incentivize network operations</tspan>
                    </text>
                </motion.g>}
            </g>

            {/* Consensus */}
            <path d="M330 555L530 645" stroke="#5A5A5A" stroke-width="2" stroke-linecap="round" />
            <g transform="translate(180,540)">
                <use href="#text_focus_l_5A5A5A" x="0" y="0" />
                <use href="#text_focus_l_5A5A5A" transform="rotate(180,0,0)" x="-145" y="-31.5" />
                <text x="10" y="23" fontFamily="Lexend" fontSize="20" fill="#5A5A5A">CONSENSUS</text>
            </g>

        </g>
        <g className="root_anim_item">
            <path d="M584 409H782V681L584 591V409Z" fill="url(#paint69_linear_34_2)" />
            <path d="M980 409H782V681L980 591V409Z" fill="url(#paint70_linear_34_2)" />
            <path d="M1057 368.946V386.784C1056.83 390.155 1054 393.369 1048.42 395.784L1019.38 408.342L1008.7 412.962L861.026 476.825L804.122 501.442C791.407 506.942 769.201 506.251 754.511 499.907L706.204 479.004L555.34 413.753L544.638 409.123L519.152 398.099C511.117 394.63 507 390.191 507 385.967V368.318H507.017L560.542 368.377L563.7 368.387L706.198 368.553L729.148 368.579L837 368.698L861.02 368.725L1004.51 368.887H1007.65L1019.37 368.903L1056.99 368.946H1057Z" fill="url(#paint71_linear_34_2)" />
            <path d="M1057 348.946V386.784C1056.82 390.154 1054 393.369 1048.42 395.783L1019.38 408.341V348.903L1056.99 348.946H1057H1057Z" fill="url(#paint72_linear_34_2)" />
            <path d="M544.634 348.903V409.125L519.149 398.102C511.117 394.629 507 390.19 507 385.967V348.946H507.01L544.631 348.903H544.634Z" fill="#121212" />
            <path d="M861.023 398.721V476.824L804.118 501.441C791.404 506.942 769.198 506.25 754.508 499.907L706.201 479.004V398.546L729.151 398.572L837.003 398.691L861.023 398.718V398.721Z" fill="url(#paint73_linear_34_2)" />
            <path d="M1044.85 337.055L809.493 235.254C794.809 228.904 772.597 228.212 759.882 233.713L515.585 339.377C502.87 344.877 504.462 354.485 519.146 360.836L754.504 462.634C769.188 468.984 791.4 469.675 804.115 464.175L1048.41 358.51C1061.13 353.01 1059.54 343.402 1044.85 337.052V337.055Z" fill="url(#paint74_linear_34_2)" />
            <path d="M1023.84 336.511L807.294 246.638C793.786 241.032 773.356 240.421 761.653 245.28L536.891 338.551C531.816 340.656 529.217 343.446 529.015 346.384C528.73 350.223 532.528 354.321 540.172 357.503L616.867 389.326L693.848 421.271L756.724 447.354C770.222 452.971 790.662 453.578 802.366 448.719L869.058 421.044L944.994 389.519L1027.12 355.441C1032.57 353.175 1035.16 350.115 1034.99 346.933C1034.81 343.292 1031.04 339.492 1023.84 336.508V336.511ZM1023.66 355.323L943.118 388.747L869.055 419.486L802.07 447.283C790.535 452.073 770.386 451.477 757.065 445.954L693.848 419.719L618.744 388.55L543.587 357.355C536.041 354.231 532.303 350.187 532.588 346.395C532.794 343.493 535.352 340.749 540.359 338.68L761.949 246.713C773.476 241.922 793.632 242.519 806.942 248.042L1020.43 336.641C1027.53 339.6 1031.25 343.353 1031.44 346.937C1031.61 350.083 1029.05 353.085 1023.66 355.323H1023.66Z" fill="url(#paint75_linear_34_2)" />
        </g>
        <g className='root_anim_item cursor-pointer'>
            <motion.g initial={{ opacity: 1 }} whileHover={{ opacity: 0.8 }}
                onHoverStart={hoverG4.onHoverStart} onHoverEnd={hoverG4.onHoverEnd}>
                <use href="#box_orange" />
                {/* DATA VERIFICATION */}
                <path opacity="0.6" d="M958 344L1171.5 269" stroke="#FFC144" stroke-width="2" stroke-linecap="round" />
                <g opacity="0.6" transform="translate(1177,250)">
                    <use href="#text_focus_l" x="0" y="0" />
                    <use href="#text_focus_l" transform="rotate(180,0,0)" x="-230" y="-31.5" />
                    <text x="10" y="23" fontFamily="Lexend" fontSize="20" fill="#FFC144">DATA VERIFICATION</text>
                    {hoverG4.isHover && <motion.g initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}>
                        <use href="#text_bg" x="5" y="50" />
                        <text fill="#fff" fontFamily="Poppins" fontSize="14" transform="translate(20,60)">
                            <tspan x="0" dy="1.5em">Upgrade LiteNodes with license to</tspan>
                            <tspan x="0" dy="1.5em">participate in the Verification Network,</tspan>
                            <tspan x="0" dy="1.5em">enabling validation of data integrity </tspan>
                            <tspan x="0" dy="1.5em">and AI outputs through consensus,</tspan>
                            <tspan x="0" dy="1.5em">ensuring tamper-proof trustworthiness.</tspan>
                        </text>
                    </motion.g>}
                </g>
            </motion.g>
        </g>
        <g className='root_anim_item cursor-pointer'>
            <motion.g initial={{ opacity: 1 }} whileHover={{ opacity: 0.8 }}
                onHoverStart={hoverG5.onHoverStart} onHoverEnd={hoverG5.onHoverEnd}>
                <use href="#box_orange" transform="translate(0,-121)" />
                {/* Service Market */}
                <path opacity="0.6" d="M349 137L592.5 242" stroke="#FFC144" stroke-width="2" stroke-linecap="round" />
                <g opacity="0.6" transform="translate(150,120)">
                    <use href="#text_focus_l" x="0" y="0" />
                    <use href="#text_focus_l" transform="rotate(180,0,0)" x="-195" y="-31.5" />
                    <text x="10" y="23" fontFamily="Lexend" fontSize="20" fill="#FFC144">SERVICE MARKET</text>
                    {hoverG5.isHover && <motion.g initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <use href="#text_bg" x="-115" y="50" />
                        <text fill="#fff" fontFamily="Poppins" fontSize="14" transform="translate(175,60)" textAnchor='end'>
                            <tspan x="0" dy="1.5em">High-performance hardware nodes</tspan>
                            <tspan x="0" dy="1.5em">dedicated to AI compute, enabling</tspan>
                            <tspan x="0" dy="1.5em">efficient, elastic inference</tspan>
                        </text>
                    </motion.g>}
                </g>

            </motion.g>
        </g>
        <g className='root_anim_item cursor-pointer'>
            <motion.g initial={{ opacity: 1 }} whileHover={{ opacity: 0.8 }}
                onHoverStart={hoverG6.onHoverStart} onHoverEnd={hoverG6.onHoverEnd}>
                <use href="#box_orange" transform="translate(0,-220)" />
                {/* AI Applications  */}
                <path opacity="0.6" d="M958 111L1171 36" stroke="#FFC144" stroke-width="2" stroke-linecap="round" />
                <g opacity="0.6" transform="translate(1177,20)">
                    <use href="#text_focus_l" x="0" y="0" />
                    <use href="#text_focus_l" transform="rotate(180,0,0)" x="-200" y="-31.5" />
                    <text x="10" y="23" fontFamily="Lexend" fontSize="20" fill="#FFC144">AI APPLICATIONS</text>
                    {hoverG6.isHover && <motion.g initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}>
                        <use href="#text_bg" x="5" y="50" />
                        <text fill="#fff" fontFamily="Poppins" fontSize="14" transform="translate(20,60)">
                            <tspan x="0" dy="1.5em">Layer for deploying decentralized AI </tspan>
                            <tspan x="0" dy="1.5em">dApps, enabling seamless integration </tspan>
                            <tspan x="0" dy="1.5em">of models for real-world use cases </tspan>
                            <tspan x="0" dy="1.5em">like inference and analytics.</tspan>
                        </text>
                    </motion.g>}
                </g>
            </motion.g>
        </g>

        <defs>
            <linearGradient id="paint0_linear_34_2" x1="1122" y1="1556.53" x2="442.003" y2="1552.24" gradientUnits="userSpaceOnUse">
                <stop stop-color="#505050" stop-opacity="0.5" />
                <stop offset="0.508226" stop-color="#383838" stop-opacity="0.3" />
                <stop offset="1" stop-color="#505050" stop-opacity="0.41" />
            </linearGradient>
            <linearGradient id="paint1_linear_34_2" x1="1103.52" y1="1583.91" x2="807.871" y2="1582.05" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4D1600" />
                <stop offset="0.508226" stop-opacity="0.3" />
                <stop offset="1" stop-color="#FB7C00" stop-opacity="0.3" />
            </linearGradient>
            <linearGradient id="paint2_linear_34_2" x1="807.868" y1="1597.7" x2="1103.53" y2="1597.7" gradientUnits="userSpaceOnUse">
                <stop offset="0.37" stop-color="#D98B27" stop-opacity="0" />
                <stop offset="0.504736" stop-color="#D97F1C" />
                <stop offset="0.643041" stop-color="#D98B27" stop-opacity="0" />
            </linearGradient>

            <linearGradient id="paint3_linear_34_2" x1="807.87" y1="1553.32" x2="1103.52" y2="1553.32" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF8B10" />
                <stop offset="1" stop-color="#F74503" />
            </linearGradient>
            <linearGradient id="paint4_linear_34_2" x1="1102.45" y1="1526.38" x2="1082.22" y2="1526.38" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF6D2F" />
                <stop offset="1" stop-color="#F84A04" />
            </linearGradient>
            <linearGradient id="paint5_linear_34_2" x1="825.609" y1="1526.58" x2="808.945" y2="1526.59" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9D41" stop-opacity="0" />
                <stop offset="1" stop-color="#FFB851" />
            </linearGradient>
            <linearGradient id="paint6_linear_34_2" x1="807.868" y1="1551.57" x2="1103.53" y2="1551.57" gradientUnits="userSpaceOnUse">
                <stop offset="0.37" stop-color="#FC720B" />
                <stop offset="0.49713" stop-color="#FFA91B" />
                <stop offset="0.653024" stop-color="#F95907" />
            </linearGradient>
            <linearGradient id="paint7_linear_34_2" x1="955.696" y1="1455.22" x2="955.696" y2="1583.1" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC144" />
                <stop offset="1" stop-color="#FA8B16" />
            </linearGradient>
            <linearGradient id="paint8_linear_34_2" x1="955.696" y1="1455.22" x2="955.696" y2="1583.1" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF8B10" />
                <stop offset="1" stop-color="#F66F00" />
            </linearGradient>
            <linearGradient id="paint24_linear_34_2" x1="441.996" y1="1673.25" x2="1122.01" y2="1673.25" gradientUnits="userSpaceOnUse">
                <stop offset="0.37" stop-color="#595959" stop-opacity="0" />
                <stop offset="0.504736" stop-color="#494949" stop-opacity="0.2" />
                <stop offset="0.642982" stop-color="#595959" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint25_linear_34_2" x1="442" y1="1484.86" x2="1122" y2="1484.86" gradientUnits="userSpaceOnUse">
                <stop stop-color="#212121" />
                <stop offset="1" stop-color="#1C1C1C" />
            </linearGradient>
            <linearGradient id="paint26_linear_34_2" x1="1122" y1="1439.02" x2="1075.48" y2="1439.02" gradientUnits="userSpaceOnUse">
                <stop stop-color="#282828" />
                <stop offset="1" stop-color="#1D1D1D" />
            </linearGradient>
            <linearGradient id="paint27_linear_34_2" x1="488.53" y1="1439.47" x2="442" y2="1439.47" gradientUnits="userSpaceOnUse">
                <stop stop-color="#222222" />
                <stop offset="1" stop-color="#393939" />
            </linearGradient>
            <linearGradient id="paint28_linear_34_2" x1="441.996" y1="1484.25" x2="1122.01" y2="1484.25" gradientUnits="userSpaceOnUse">
                <stop offset="0.37" stop-color="#202020" />
                <stop offset="0.49519" stop-color="#373737" />
                <stop offset="0.68" stop-color="#181818" />
            </linearGradient>
            <linearGradient id="paint29_linear_34_2" x1="782" y1="1250.37" x2="781.998" y2="1549.25" gradientUnits="userSpaceOnUse">
                <stop />
                <stop offset="1" stop-color="#353535" />
            </linearGradient>
            <linearGradient id="paint30_linear_34_2" x1="781.998" y1="1271.44" x2="781.998" y2="1549.25" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0E0E0E" stop-opacity="0" />
                <stop offset="1" stop-color="#7B7B7B" />
            </linearGradient>

            <linearGradient id="paint69_linear_34_2" x1="719" y1="462" x2="659" y2="641" gradientUnits="userSpaceOnUse">
                <stop stop-color="#391E00" />
                <stop offset="1" stop-color="#272727" stop-opacity="0.05" />
            </linearGradient>
            <linearGradient id="paint70_linear_34_2" x1="855" y1="445" x2="903.5" y2="616.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#512B00" />
                <stop offset="1" stop-color="#272727" stop-opacity="0.05" />
            </linearGradient>
            <linearGradient id="paint71_linear_34_2" x1="507" y1="421.737" x2="1057" y2="421.737" gradientUnits="userSpaceOnUse">
                <stop stop-color="#101010" />
                <stop offset="1" stop-color="#212121" />
            </linearGradient>
            <linearGradient id="paint72_linear_34_2" x1="1057" y1="378.622" x2="1019.38" y2="378.622" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1D1D1D" />
                <stop offset="1" stop-color="#202020" />
            </linearGradient>
            <linearGradient id="paint73_linear_34_2" x1="506.997" y1="421.852" x2="1057.01" y2="421.852" gradientUnits="userSpaceOnUse">
                <stop offset="0.37" stop-color="#161616" />
                <stop offset="0.501789" stop-color="#232323" />
                <stop offset="0.68" stop-color="#181818" />
            </linearGradient>
            <linearGradient id="paint74_linear_34_2" x1="781.999" y1="230" x2="781.999" y2="467.888" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2A2A2A" />
                <stop offset="1" stop-color="#0D0D0D" />
            </linearGradient>
            <linearGradient id="paint75_linear_34_2" x1="782" y1="320.5" x2="787.648" y2="464.779" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FA8B16" />
                <stop offset="1" stop-color="#F74503" />
            </linearGradient>
            <linearGradient id="paint76_linear_34_2" x1="507" y1="432.737" x2="1057" y2="432.737" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF8B10" />
                <stop offset="1" stop-color="#F74503" />
            </linearGradient>
            <linearGradient id="paint77_linear_34_2" x1="1055" y1="382.622" x2="1017.38" y2="382.622" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF6D2F" />
                <stop offset="1" stop-color="#F84A04" />
            </linearGradient>
            <linearGradient id="paint78_linear_34_2" x1="540" y1="383" x2="509" y2="383.014" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9D41" stop-opacity="0" />
                <stop offset="1" stop-color="#FFB851" />
            </linearGradient>
            <linearGradient id="paint79_linear_34_2" x1="506.997" y1="430.852" x2="1057.01" y2="430.852" gradientUnits="userSpaceOnUse">
                <stop offset="0.37" stop-color="#FC720B" />
                <stop offset="0.49713" stop-color="#FFA91B" />
                <stop offset="0.653024" stop-color="#F95907" />
            </linearGradient>
            <linearGradient id="paint80_linear_34_2" x1="781.999" y1="231" x2="781.999" y2="468.888" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFC144" />
                <stop offset="1" stop-color="#FA8B16" />
            </linearGradient>
            <linearGradient id="paint81_linear_34_2" x1="781.999" y1="231" x2="781.999" y2="468.888" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF8B10" />
                <stop offset="1" stop-color="#F66F00" />
            </linearGradient>

            {/* box */}
            <path id="box_black_bg" d="M1122 1447.35H442.024V1601.34C441.648 1606.42 446.734 1611.84 457.016 1616.04L748.005 1734.92C766.16 1742.34 793.622 1743.15 809.342 1736.72L1111.38 1613.32C1118.67 1610.35 1122.15 1606.34 1121.98 1602.15H1122V1447.35Z"
                fill="url(#paint0_linear_34_2)" />
            <g id="box_black_fg" opacity="0.9">
                <path d="M879.701 1544.18V1707.88L809.346 1736.63C793.627 1743.05 766.172 1742.25 748.009 1734.84L688.285 1710.43V1543.98L716.66 1544.01L850.004 1544.15L879.701 1544.18V1544.18Z"
                    fill="url(#paint24_linear_34_2)" />
                <path d="M508.197 1410.18V1410.18L512.1 1410.19H512.101L688.281 1410.39L716.656 1410.42L850 1410.56L879.697 1410.59L1057.1 1410.78H1060.99L1075.48 1410.8L1121.5 1410.85V1444.02C1121.3 1447.54 1118.24 1451.06 1111.83 1453.82L1111.2 1454.09L1075.29 1468.75L1062.09 1474.15L879.516 1548.73L809.161 1577.48C801.389 1580.65 790.671 1582.05 779.613 1581.73C768.558 1581.41 757.216 1579.36 748.202 1575.69L688.478 1551.27L501.955 1475.07L488.723 1469.66L457.214 1456.79L457.213 1456.79C452.282 1454.78 448.588 1452.5 446.134 1450.14C443.679 1447.78 442.5 1445.37 442.5 1443.09V1410.11L508.197 1410.18Z"
                    fill="url(#paint25_linear_34_2)" stroke="#323232" />
                <path d="M1122 1409.61V1443.3C1121.78 1447.24 1118.28 1450.99 1111.39 1453.81L1075.48 1468.48V1409.56L1121.99 1409.61H1122H1122Z"
                    fill="url(#paint26_linear_34_2)" />
                <path d="M488.53 1409.56V1469.39L457.02 1456.52C447.09 1452.46 442 1447.28 442 1442.35V1409.61H442.013L488.526 1409.56H488.53Z"
                    fill="url(#paint27_linear_34_2)" />
                <path d="M879.701 1431.52V1548.45L809.346 1577.2C793.627 1583.62 766.172 1582.82 748.009 1575.41L688.285 1551V1431.31L716.66 1431.35L850.004 1431.48L879.701 1431.52V1431.52Z"
                    fill="url(#paint28_linear_34_2)" />
                <path d="M754.844 1276.24C762.616 1273.06 773.336 1271.66 784.396 1271.99C795.451 1272.31 806.793 1274.36 815.802 1278.04L1106.79 1396.92L1107.21 1397.09C1111.51 1398.89 1114.84 1400.89 1117.21 1402.97C1119.65 1405.12 1121.02 1407.33 1121.39 1409.45C1121.76 1411.55 1121.16 1413.64 1119.5 1415.61C1117.93 1417.48 1115.42 1419.23 1111.91 1420.75L1111.19 1421.05L809.153 1544.45C801.381 1547.63 790.661 1549.03 779.602 1548.71C768.546 1548.38 757.203 1546.33 748.194 1542.65L457.205 1423.77C452.701 1421.93 449.227 1419.86 446.789 1417.72C444.349 1415.57 442.976 1413.36 442.604 1411.24C442.236 1409.14 442.837 1407.05 444.499 1405.08C446.171 1403.09 448.916 1401.22 452.803 1399.64L754.844 1276.24Z"
                    fill="url(#paint29_linear_34_2)" stroke="url(#paint30_linear_34_2)" />
                <path d="M962.275 1402.79L803.172 1330.24C793.247 1326.17 778.236 1325.73 769.637 1329.25L604.494 1404.27C600.765 1405.8 598.855 1407.82 598.707 1409.95C598.498 1412.73 601.288 1415.7 606.904 1418.01L663.256 1441.08L719.817 1464.25L766.016 1483.16C775.933 1487.23 790.952 1487.67 799.551 1484.15L848.553 1464.08L904.347 1441.22L964.686 1416.52C968.695 1414.87 970.597 1412.65 970.473 1410.35C970.335 1407.71 967.57 1404.95 962.275 1402.79V1402.79Z"
                    fill="black" />
            </g>
            <g id="box_orange_black">
                <path d="M1103.52 1529.05H807.88V1579.29C807.717 1581.5 809.928 1583.86 814.398 1585.69L940.915 1637.37C948.809 1640.6 960.749 1640.95 967.584 1638.16L1098.91 1584.5C1102.08 1583.21 1103.59 1581.47 1103.51 1579.65H1103.52V1529.05Z" fill="url(#paint1_linear_34_2)" />
                {/* <path opacity="0.2" d="M998.175 1541.59V1625.62L967.585 1638.12C960.751 1640.91 948.814 1640.56 940.917 1637.34L914.95 1626.72V1541.5L927.287 1541.51L985.263 1541.57L998.175 1541.59V1541.59Z" fill="url(#paint2_linear_34_2)" /> */}
                <path d="M836.65 1519.35V1519.36L838.347 1519.36H838.348L914.948 1519.45L927.285 1519.46L985.261 1519.53L998.174 1519.54L1075.31 1519.63H1076.99L1083.3 1519.64L1103.02 1519.66V1534.5C1102.94 1536.03 1101.65 1537.64 1098.71 1538.91L1083.1 1545.66L1077.36 1548.14L997.979 1582.47L967.389 1595.7C964.063 1597.14 959.45 1597.79 954.668 1597.64C949.89 1597.49 944.997 1596.55 941.119 1594.88L915.151 1583.64L834.053 1548.57L828.301 1546.08L814.6 1540.15C812.479 1539.24 810.907 1538.21 809.873 1537.15C808.839 1536.1 808.37 1535.05 808.37 1534.09V1519.32L836.65 1519.35Z" fill="url(#paint3_linear_34_2)" stroke="#CB4C14" />
                <path d="M1102.45 1518.83V1533.45C1102.35 1535.27 1100.83 1536.99 1097.83 1538.29L1082.22 1545.04V1518.8L1102.44 1518.83H1102.45H1102.45Z" fill="url(#paint4_linear_34_2)" />
                <path opacity="0.5" d="M829.175 1529.89V1545.46L815.475 1539.54C811.158 1537.67 808.945 1535.29 808.945 1533.01V1529.91H808.95L829.173 1529.89H829.175Z" fill="url(#paint5_linear_34_2)" />
                <path d="M998.175 1506.88V1581.12L967.586 1594.35C960.751 1597.31 948.814 1596.93 940.918 1593.52L914.95 1582.29V1506.78L927.287 1506.8L985.263 1506.86L998.175 1506.88V1506.88Z" fill="url(#paint6_linear_34_2)" />
                <path d="M956.729 1455.74C961.507 1455.89 966.401 1456.83 970.277 1458.5L1096.79 1513.23L1096.9 1513.27C1098.78 1514.1 1100.23 1515.02 1101.24 1515.96C1102.27 1516.92 1102.83 1517.89 1102.98 1518.79C1103.27 1520.52 1102.06 1522.39 1098.71 1523.84L967.386 1580.64C964.06 1582.08 959.446 1582.73 954.663 1582.58C949.884 1582.43 944.991 1581.49 941.115 1579.82L814.597 1525.09C812.66 1524.26 811.179 1523.32 810.149 1522.36C809.118 1521.4 808.561 1520.43 808.412 1519.53C808.124 1517.8 809.329 1515.93 812.683 1514.48L944.005 1457.68C947.332 1456.24 951.946 1455.59 956.729 1455.74Z" fill="url(#paint7_linear_34_2)" stroke="url(#paint8_linear_34_2)" />
            </g>

            <g id="box_orange">
                <path d="M560.539 350.376V350.377L563.697 350.387H563.698L706.197 350.552L729.147 350.58L836.999 350.698L861.019 350.725L1004.51 350.887H1007.65L1019.37 350.903L1056 350.944V397.746C1055.85 400.446 1053.62 403.32 1048.52 405.643L1048.02 405.866L1018.98 418.424H1018.98L1008.3 423.044L860.629 486.907L803.725 511.524C797.549 514.195 788.979 515.392 780.088 515.117C771.206 514.841 762.112 513.1 754.907 509.989H754.906L706.602 489.086H706.601L555.738 423.835L545.034 419.205L519.549 408.181L518.822 407.859C515.247 406.239 512.572 404.444 510.777 402.616C508.862 400.665 508 398.737 508 396.967V350.319L560.539 350.376Z" fill="url(#paint76_linear_34_2)" stroke="#CB3B00" stroke-width="2" />
                <path d="M1055 347.946V395.784C1054.82 399.154 1052 402.369 1046.42 404.783L1017.38 417.341V347.903L1054.99 347.946H1055H1055Z" fill="url(#paint77_linear_34_2)" />
                <path opacity="0.5" d="M546.634 347.903V418.125L521.149 407.102C513.117 403.629 509 399.19 509 394.967V347.946H509.01L546.631 347.903H546.634Z" fill="url(#paint78_linear_34_2)" />
                <path d="M861.023 347.721V485.824L804.118 510.441C791.404 515.942 769.198 515.25 754.508 508.907L706.201 488.004V347.546L729.151 347.572L837.003 347.691L861.023 347.718V347.721Z" fill="url(#paint79_linear_34_2)" />
                <path d="M760.279 235.631C766.455 232.959 775.026 231.763 783.918 232.039C792.801 232.315 801.895 234.058 809.096 237.172L1044.45 338.974L1044.86 339.146C1048.26 340.657 1050.87 342.329 1052.71 344.042C1054.62 345.825 1055.65 347.606 1055.92 349.264C1056.45 352.439 1054.25 355.897 1048.02 358.593L803.718 464.257C797.542 466.928 788.971 468.125 780.079 467.849C771.196 467.573 762.102 465.83 754.901 462.716L519.543 360.918H519.542C515.943 359.361 513.197 357.626 511.288 355.846C509.377 354.063 508.352 352.281 508.077 350.624C507.55 347.449 509.75 343.991 515.981 341.295L760.279 235.631Z" fill="url(#paint80_linear_34_2)" stroke="url(#paint81_linear_34_2)" stroke-width="2" />
            </g>

            {/* text */}
            <linearGradient id="paint94_linear_34_2" gradientTransform="rotate(90)">
                <stop offset="0%" stop-color="#090909" />
                <stop offset="100%" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="paint95_linear_34_2" gradientTransform="rotate(90)">
                <stop offset="0%" stop-color="#666666" />
                <stop offset="100%" stop-opacity="0" />
            </linearGradient>
            <path id="text_focus_l" d="M0 0.75V6 M0.75 0H6 M0 25.75V31 M0.75 31.75H6" fill="none" style={{ stroke: '#FFC144' }} strokeWidth="1.5" />
            <path id="text_focus_l_5A5A5A" d="M0 0.75V6 M0.75 0H6 M0 25.75V31 M0.75 31.75H6" fill="none" style={{ stroke: '#5A5A5A' }} strokeWidth="1.5" />
            <rect id="text_bg" width="309" height="149" rx="11.5" fill="url(#paint94_linear_34_2)" stroke="url(#paint95_linear_34_2)" />
        </defs>
    </svg>

}

// background: linear-gradient(270deg, #FF6D2F 0%, #F84A04 100%);


