import '@fontsource/lexend/300.css';
import '@fontsource/lexend/400.css';
import '@fontsource/lexend/500.css';
import '@fontsource/lexend/600.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@rainbow-me/rainbowkit/styles.css';
import './index.css';
import { createRoot } from 'react-dom/client';

import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { MotionConfig } from 'motion/react';
import { toast, Toaster } from 'sonner';
import { WagmiProvider } from 'wagmi';
import {
  bsc,
  mainnet
} from 'wagmi/chains';
import { toastOnError } from './lib/mutils';
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

// query client
const client = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000, refetchOnMount: 'always' },
    mutations: { onError: toastOnError, onSuccess: () => toast.success("Success") }
  }
})



const config = getDefaultConfig({
  appName: 'Strategy A Crust',
  projectId: 'f6ed428863bd8b38d7f11d356f800195',
  chains: [mainnet, bsc],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

// eslint-disable-next-line react-refresh/only-export-components
function Root() {

  return <MotionConfig transition={{ default: { duration: 0.5, ease: "backOut" } }}>
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider locale='en' theme={darkTheme()}>
          <Toaster position='top-right' offset={{ top: 100, right: 20 }} />
          <RouterProvider router={router} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </MotionConfig>
}

createRoot(document.getElementById('root')!).render(<Root />)
