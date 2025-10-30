import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionConfig } from "motion/react";
import { Frame1 } from "./Frame1";
import { Frame2 } from "./Frame2";
import { Frame3 } from "./Frame3";
import { Frame4 } from "./Frame4";
import { Frame5 } from "./Frame5";
import { FrameRoadMap } from "./FrameRoadMap";
import { FrameConnectTeam } from "./FrameConnectTeam";
import { Footer } from "./Footer";
gsap.registerPlugin(ScrollTrigger)
function App() {

  useGSAP(() => {
    ScrollTrigger.batch(".root_anim_item", {
      onEnter: (targets) => {
        gsap.fromTo(targets, { y: 200, opacity: 0.2 }, { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.2 })
      }
    })
  }, {})
  return (
    <MotionConfig transition={{ default: { duration: 0.5, ease: "backOut" } }}>
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <FrameRoadMap />
      <FrameConnectTeam />
      <Footer />
    </MotionConfig>
  );
}

export default App;
