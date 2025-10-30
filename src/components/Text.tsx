import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const lgMap = {
    '1': 'linear-gradient(180deg, #FA8B16 0%, #FFC144 100%)',
    '2': 'linear-gradient(90deg, #FFFFFF 40.88%, #999999 100%)',
    '3': 'radial-gradient(61.85% 61.85% at 95.9% 50%, #FFC144 0%, #FFFFFF 100%)',
};
export function TextLG({ text, className, lg = '1' }: { text: ReactNode, className?: string, lg?: keyof typeof lgMap }) {
    return <div style={{
        background: lgMap[lg],
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        // TextFillColor: 'transparent'
    }} className={cn("bg-clip-text fill-transparent ", className)}>
        {text}
    </div>
}