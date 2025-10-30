import type { SVGAttributes } from "react";

export function SvgLight(p: SVGAttributes<SVGSVGElement>) {
    return <svg viewBox="0 0 80 51" fill="none" xmlns="http://www.w3.org/2000/svg" {...p}>
        <path d="M0 0.5H48L80 51H0Z" fill="#0B0B0B"/>
        <path d="M0 0.5H48L80 51" stroke="#2E2E2E" />
        <path d="M48 0.5L74 42.2559" stroke="url(#paint0_radial_344_2)" />
        <path d="M61 50.2559L42.1122 16.2559H0" stroke="url(#paint1_linear_344_2)" />
        <defs>
            <radialGradient id="paint0_radial_344_2" r="1">
                <stop stop-color="#B6B6B6" />
                <stop offset="1" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="paint1_linear_344_2" x1="59.0118" y1="50.2559" x2="-37.0407" y2="0.251116" gradientUnits="userSpaceOnUse">
                <stop stop-color="#505050" />
                <stop offset="1" stop-opacity="0" />
            </linearGradient>
        </defs>
    </svg>
}




