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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MotionConfig } from 'motion/react';
import { routeTree } from './routeTree.gen';
import { toastOnError } from './lib/mutils';
import { toast, Toaster } from 'sonner';
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

// query client
const client = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000, refetchOnMount: 'always' },
    mutations: { onError: toastOnError, onSuccess: () => toast.success("Success") }
  }
})

// eslint-disable-next-line react-refresh/only-export-components
function Root() {

  return <MotionConfig transition={{ default: { duration: 0.5, ease: "backOut" } }}>
    <QueryClientProvider client={client}>
      <Toaster position='top-right' offset={{ top: 100, right: 20 }} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </MotionConfig>
}

createRoot(document.getElementById('root')!).render(<Root />)
