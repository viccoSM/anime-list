import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {AppContextProvider} from "@/context";
import { Roboto } from 'next/font/google'
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={roboto.className}>
      <AppContextProvider>
        <Navbar/>
        <Component {...pageProps} />
      </AppContextProvider>
    </main>
  )
}
