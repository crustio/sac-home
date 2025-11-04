import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

import { Frame1 } from "../ui/Frame1";
import { Frame2 } from "../ui/Frame2";
import { Frame3 } from "../ui/Frame3";
import { Frame4 } from "../ui/Frame4";
import { Frame5 } from "../ui/Frame5";
import { FrameConnectTeam } from "../ui/FrameConnectTeam";
import { FrameRoadMap } from "../ui/FrameRoadMap";

function RouteComponent() {
    return (<>
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <Frame5 />
        <FrameRoadMap />
        <FrameConnectTeam />
    </>
    );
}
