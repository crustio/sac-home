import * as React from 'react'
import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { Header } from '@/ui/Header'
import { Footer } from '@/ui/Footer'
import { useRootAnim } from '@/hooks/gsap'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    const rs = useRouterState()
    useRootAnim([rs.location.pathname, rs.status])
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}
