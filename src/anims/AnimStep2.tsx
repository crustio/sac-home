import { useEffect, useState } from "react"

export function AnimStep2() {
    const [[op1, op2, op3], setOpsort] = useState([0.2, 0.3, 0.6])
    useEffect(() => {
        const task = setInterval(() => {
            setOpsort(old => [old[2], old[0], old[1]])
        }, 500)
        return () => clearInterval(task)
    }, [])
    return <svg width="100%" height="auto" viewBox="0 0 889 524" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_44_1922)">
            <ellipse cx="224.434" cy="28.8429" rx="224.434" ry="28.8429" transform="matrix(1 0 0 -1 220 303.535)" fill="#FA8B16" />
        </g>
        {/* <path d="M598.563 97.9369H667.065L688.401 134.892H813.983" stroke="#2B2219" strokeWidth="2" /> */}
        <path d="M73.9832 133.99H202.875L229.014 97.9369H667.065L688.401 134.892H813.983" stroke="url(#paint0_linear_44_1922)" strokeWidth="2" strokeDasharray="200 100">
            <animate
                attributeName="stroke-dashoffset"
                from="-300"
                to="0"
                dur="2s"
                begin="1s"
                repeatCount="indefinite"
            />
        </path>
        <path d="M731.961 326.115H717.54L696.809 346.845H598.563L568.38 399.123H318.246L288.064 346.845H192.96L172.229 326.115H155.104" stroke="url(#paint0_linear_44_1922)" strokeDasharray="200 100">
            <animate
                attributeName="stroke-dashoffset"
                from="-300"
                to="0"
                dur="2s"
                begin="1s"
                repeatCount="indefinite"
            />
        </path>
        <g>
            <g style={{ mixBlendMode: 'plus-lighter' }} opacity={op1}>
                <path d="M242.771 157.518H274.08L186.413 287.311H155.104L242.771 157.518Z" fill="url(#paint1_linear_44_1922)" />
            </g>
            <g style={{ mixBlendMode: 'plus-lighter' }} opacity={op2}>
                <path d="M293.246 157.518H324.556L236.889 287.311H205.579L293.246 157.518Z" fill="url(#paint2_linear_44_1922)" />
            </g>
            <g style={{ mixBlendMode: 'plus-lighter' }} opacity={op3}>
                <path d="M343.721 157.518H375.031L287.364 287.311H256.054L343.721 157.518Z" fill="url(#paint3_linear_44_1922)" />
            </g>
        </g>
        <g>
            <g style={{ mixBlendMode: 'plus-lighter' }} opacity={op1}>
                <path d="M644.294 157.518H612.984L700.651 287.311H731.961L644.294 157.518Z" fill="url(#paint4_linear_44_1922)" />
            </g>
            <g style={{ mixBlendMode: 'plus-lighter' }} opacity={op2}>
                <path d="M593.819 157.518H562.509L650.176 287.311H681.486L593.819 157.518Z" fill="url(#paint5_linear_44_1922)" />
            </g>
            <g style={{ mixBlendMode: 'plus-lighter' }} opacity={op3}>
                <path d="M543.344 157.518H512.035L599.702 287.311H631.011L543.344 157.518Z" fill="url(#paint6_linear_44_1922)" />
            </g>
        </g>
        <g>
            <path d="M460.955 128.577H425.499L324.445 283.997L339.821 316.423H547.197L562.573 283.997L460.955 128.577Z" fill="url(#paint7_linear_44_1922)" stroke="url(#paint8_linear_44_1922)" strokeWidth="2" />
            <g clip-path="url(#clip0_44_1922)">
                <path d="M474.173 213.421H470.576V253.076H474.173V213.421Z" fill="url(#paint9_linear_44_1922)" />
                <path d="M470.576 253.076H466.98V260.292H470.576V253.076Z" fill="url(#paint10_linear_44_1922)" />
                <path d="M466.98 260.292H463.36V263.888H466.98V260.292Z" fill="url(#paint11_linear_44_1922)" />
                <path d="M466.98 217.018H463.36V253.076H466.98V217.018Z" fill="url(#paint12_linear_44_1922)" />
                <path d="M470.576 209.801H463.36V213.421H470.576V209.801Z" fill="url(#paint13_linear_44_1922)" />
                <path d="M463.36 263.888H459.764V267.485H463.36V263.888Z" fill="url(#paint14_linear_44_1922)" />
                <path d="M463.36 253.076H459.764V260.292H463.36V253.076Z" fill="url(#paint15_linear_44_1922)" />
                <path d="M459.764 267.485H456.167V271.105H459.764V267.485Z" fill="url(#paint16_linear_44_1922)" />
                <path d="M459.764 260.292H456.167V263.888H459.764V260.292Z" fill="url(#paint17_linear_44_1922)" />
                <path d="M463.36 213.421H456.167V217.017H463.36V213.421Z" fill="url(#paint18_linear_44_1922)" />
                <path d="M463.36 206.205H456.167V209.801H463.36V206.205Z" fill="url(#paint19_linear_44_1922)" />
                <path d="M456.167 271.105H448.951V274.701H456.167V271.105Z" fill="url(#paint20_linear_44_1922)" />
                <path d="M456.167 263.888H448.951V267.485H456.167V263.888Z" fill="url(#paint21_linear_44_1922)" />
                <path d="M448.951 274.701H438.138V278.297H448.951V274.701Z" fill="url(#paint22_linear_44_1922)" />
                <path d="M448.951 267.485H438.138V271.105H448.951V267.485Z" fill="url(#paint23_linear_44_1922)" />
                <path d="M438.138 271.105H430.922V274.701H438.138V271.105Z" fill="url(#paint24_linear_44_1922)" />
                <path d="M438.138 263.888H430.922V267.485H438.138V263.888Z" fill="url(#paint25_linear_44_1922)" />
                <path d="M456.167 209.801H430.922V213.421H456.167V209.801Z" fill="url(#paint26_linear_44_1922)" />
                <path d="M456.167 202.585H430.922V206.205H456.167V202.585Z" fill="url(#paint27_linear_44_1922)" />
                <path d="M430.922 267.485H427.302V271.105H430.922V267.485Z" fill="url(#paint28_linear_44_1922)" />
                <path d="M430.922 260.292H427.302V263.888H430.922V260.292Z" fill="url(#paint29_linear_44_1922)" />
                <path d="M430.922 213.421H423.706V217.017H430.922V213.421Z" fill="url(#paint30_linear_44_1922)" />
                <path d="M430.922 206.205H423.706V209.801H430.922V206.205Z" fill="url(#paint31_linear_44_1922)" />
                <path d="M427.302 263.888H423.706V267.485H427.302V263.888Z" fill="url(#paint32_linear_44_1922)" />
                <path d="M427.302 253.076H423.706V260.292H427.302V253.076Z" fill="url(#paint33_linear_44_1922)" />
                <path d="M423.705 260.292H420.109V263.888H423.705V260.292Z" fill="url(#paint34_linear_44_1922)" />
                <path d="M423.705 217.018H420.109V253.076H423.705V217.018Z" fill="url(#paint35_linear_44_1922)" />
                <path d="M446.854 225.166H440.212L441.54 245.09H445.525L446.854 225.166Z" fill="url(#paint36_linear_44_1922)" />
                <path d="M445.525 249.075H441.54V254.388H445.525V249.075Z" fill="url(#paint37_linear_44_1922)" />
                <path d="M423.706 209.801H416.489V213.421H423.706V209.801Z" fill="url(#paint38_linear_44_1922)" />
                <path d="M420.109 253.076H416.489V260.292H420.109V253.076Z" fill="url(#paint39_linear_44_1922)" />
                <path d="M416.489 213.421H412.893V253.076H416.489V213.421Z" fill="url(#paint40_linear_44_1922)" />
            </g>
            {/* 这里实现晃动的动画效果 */}
            <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                from="0 0"
                to="1 0"
                dur="0.5s"
                repeatCount="indefinite"
                begin="1s"
                values="0 0; 2 0; -2 0; 1 0; -1 0;0 0"

            />
        </g>

        <g>
            <rect x="73.9832" y="121.371" width="5.40804" height="5.40803" fill="#995900" />
            <rect x="73.9832" y="141.201" width="5.40804" height="5.40803" fill="#995900" />
            <rect x="807.674" y="121.371" width="5.40804" height="5.40803" fill="#995900" />
            <rect x="807.674" y="141.201" width="5.40804" height="5.40803" fill="#995900" />
            <path d="M73.9832 31.9174V12.9893L90.2073 0.5H110.037" stroke="#FF8B10" />
            <path d="M813.082 437.973L813.082 456.901L796.858 469.391L777.028 469.391" stroke="#FF8B10" />
            <animate
                attributeName="opacity"
                from="0"
                to="1"
                dur="1s"
                begin="1s"
                values="0;1;0;"
                autoReverse
                repeatCount="indefinite"
            />
        </g>
        <defs>
            <filter id="filter0_f_44_1922" x="0" y="25.8491" width="888.867" height="497.686" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="110" result="effect1_foregroundBlur_44_1922" />
            </filter>
            <linearGradient id="paint0_linear_44_1922" x1="443.983" y1="342.987" x2="443.532" y2="399.123" gradientUnits="userSpaceOnUse">
                <stop stopColor="#403020" />
                <stop offset="1" stopColor="#A67E53" />
            </linearGradient>
            <linearGradient id="paint1_linear_44_1922" x1="214.592" y1="157.518" x2="214.592" y2="287.311" gradientUnits="userSpaceOnUse">
                <stop stopColor="#13110E" />
                <stop offset="1" stopColor="#1E1200" />
            </linearGradient>
            <linearGradient id="paint2_linear_44_1922" x1="265.067" y1="157.518" x2="265.067" y2="287.311" gradientUnits="userSpaceOnUse">
                <stop stopColor="#13110E" />
                <stop offset="1" stopColor="#1E1200" />
            </linearGradient>
            <linearGradient id="paint3_linear_44_1922" x1="315.542" y1="157.518" x2="315.542" y2="287.311" gradientUnits="userSpaceOnUse">
                <stop stopColor="#13110E" />
                <stop offset="1" stopColor="#1E1200" />
            </linearGradient>
            <linearGradient id="paint4_linear_44_1922" x1="672.473" y1="157.518" x2="672.473" y2="287.311" gradientUnits="userSpaceOnUse">
                <stop stopColor="#181611" />
                <stop offset="1" stopColor="#1E1200" />
            </linearGradient>
            <linearGradient id="paint5_linear_44_1922" x1="621.998" y1="157.518" x2="621.998" y2="287.311" gradientUnits="userSpaceOnUse">
                <stop stopColor="#181611" />
                <stop offset="1" stopColor="#1E1200" />
            </linearGradient>
            <linearGradient id="paint6_linear_44_1922" x1="571.523" y1="157.518" x2="571.523" y2="287.311" gradientUnits="userSpaceOnUse">
                <stop stopColor="#181611" />
                <stop offset="1" stopColor="#1E1200" />
            </linearGradient>
            <linearGradient id="paint7_linear_44_1922" x1="443.509" y1="128.577" x2="443.509" y2="316.423" gradientUnits="userSpaceOnUse">
                <stop stopColor="#221910" />
                <stop offset="1" stopColor="#583B1C" />
            </linearGradient>
            <linearGradient id="paint8_linear_44_1922" x1="443.509" y1="128.577" x2="443.509" y2="316.423" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF8B10" />
                <stop offset="1" stopColor="#967046" />
            </linearGradient>
            <linearGradient id="paint9_linear_44_1922" x1="472.375" y1="213.421" x2="472.375" y2="253.076" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint10_linear_44_1922" x1="468.778" y1="253.076" x2="468.778" y2="260.292" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint11_linear_44_1922" x1="465.17" y1="260.292" x2="465.17" y2="263.888" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint12_linear_44_1922" x1="465.17" y1="217.018" x2="465.17" y2="253.076" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint13_linear_44_1922" x1="466.968" y1="209.801" x2="466.968" y2="213.421" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint14_linear_44_1922" x1="461.562" y1="263.888" x2="461.562" y2="267.485" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint15_linear_44_1922" x1="461.562" y1="253.076" x2="461.562" y2="260.292" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint16_linear_44_1922" x1="457.965" y1="267.485" x2="457.965" y2="271.105" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint17_linear_44_1922" x1="457.965" y1="260.292" x2="457.965" y2="263.888" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint18_linear_44_1922" x1="459.764" y1="213.421" x2="459.764" y2="217.017" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint19_linear_44_1922" x1="459.764" y1="206.205" x2="459.764" y2="209.801" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint20_linear_44_1922" x1="452.559" y1="271.105" x2="452.559" y2="274.701" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint21_linear_44_1922" x1="452.559" y1="263.888" x2="452.559" y2="267.485" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint22_linear_44_1922" x1="443.545" y1="274.701" x2="443.545" y2="278.297" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint23_linear_44_1922" x1="443.545" y1="267.485" x2="443.545" y2="271.105" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint24_linear_44_1922" x1="434.53" y1="271.105" x2="434.53" y2="274.701" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint25_linear_44_1922" x1="434.53" y1="263.888" x2="434.53" y2="267.485" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint26_linear_44_1922" x1="443.545" y1="209.801" x2="443.545" y2="213.421" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint27_linear_44_1922" x1="443.545" y1="202.585" x2="443.545" y2="206.205" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint28_linear_44_1922" x1="429.112" y1="267.485" x2="429.112" y2="271.105" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint29_linear_44_1922" x1="429.112" y1="260.292" x2="429.112" y2="263.888" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint30_linear_44_1922" x1="427.314" y1="213.421" x2="427.314" y2="217.017" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint31_linear_44_1922" x1="427.314" y1="206.205" x2="427.314" y2="209.801" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint32_linear_44_1922" x1="425.504" y1="263.888" x2="425.504" y2="267.485" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint33_linear_44_1922" x1="425.504" y1="253.076" x2="425.504" y2="260.292" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint34_linear_44_1922" x1="421.907" y1="260.292" x2="421.907" y2="263.888" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint35_linear_44_1922" x1="421.907" y1="217.018" x2="421.907" y2="253.076" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint36_linear_44_1922" x1="443.533" y1="225.166" x2="443.533" y2="245.09" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint37_linear_44_1922" x1="443.533" y1="249.075" x2="443.533" y2="254.388" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint38_linear_44_1922" x1="420.097" y1="209.801" x2="420.097" y2="213.421" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint39_linear_44_1922" x1="418.299" y1="253.076" x2="418.299" y2="260.292" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <linearGradient id="paint40_linear_44_1922" x1="414.691" y1="213.421" x2="414.691" y2="253.076" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FA8B16" />
                <stop offset="1" stopColor="#FFC144" />
            </linearGradient>
            <clipPath id="clip0_44_1922">
                <rect width="75.7126" height="75.7125" fill="white" transform="translate(405.677 202.585)" />
            </clipPath>
        </defs>
    </svg>

}

export default AnimStep2