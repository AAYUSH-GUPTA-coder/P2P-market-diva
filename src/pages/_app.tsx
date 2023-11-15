import '@styles/globals.css'
import Navbar from '@components/Layout/Navbar'
import WalletContextProvider from '@components/WalletProvider'
import NextProgress from 'next-progress'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      {/* Fixed video background */}
      <video autoPlay loop muted className="fixed object-cover w-full h-full inset-0 z-[-1]">
        <source
          src="/soccer-bg.mp4" // Replace with your video file
          type="video/mp4"
        />
      </video>

      {/* Website content flowing on top */}
      <div className="absolute top-0 w-full">
        <NextProgress
          delay={300}
          height="6px"
          options={{
            showSpinner: false,
          }}
          color="#800080"
        />
        <WalletContextProvider>
          <Navbar />
          <Component {...pageProps} />
        </WalletContextProvider>
      </div>
    </div>
  );
}
