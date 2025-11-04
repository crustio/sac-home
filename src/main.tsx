import '@fontsource/lexend/300.css';
import '@fontsource/lexend/400.css';
import '@fontsource/lexend/500.css';
import '@fontsource/lexend/600.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider, createRouter } from '@tanstack/react-router';
import { MotionConfig } from 'motion/react';
import { routeTree } from './routeTree.gen';
// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultHashScrollIntoView: true,
  defaultViewTransition: true,
  defaultStructuralSharing: true,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  return <MotionConfig transition={{ default: { duration: 0.5, ease: "backOut" } }}>
    <RouterProvider router={router} />
  </MotionConfig>
}

createRoot(document.getElementById('root')!).render(<Root />)
