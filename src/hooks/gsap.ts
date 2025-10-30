import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { useRef } from "react";
gsap.registerPlugin(DrawSVGPlugin);

export function useDrawItem() {
  const scope = useRef<SVGSVGElement>(null);
  useGSAP(
    () => {
      gsap.from(".draw_item", {
        ease: "power2.out",
        duration: 2,
        drawSVG: 0,
        repeat: -1,
      });
    },
    { scope }
  );
  return scope;
}
