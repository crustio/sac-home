import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

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

export function useRootAnim(dependencies: unknown[] = []) {
  useGSAP(
    (_ctx, ctxSafe) => {
      if (ctxSafe) {
        const onEnter = ctxSafe((targets: Element[]) => {
          gsap.fromTo(targets, { y: 200, opacity: 0.2 }, { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)", stagger: 0.2 });
        });
        ScrollTrigger.batch(".root_anim_item", { onEnter });
      }
    },
    { dependencies }
  );
}
