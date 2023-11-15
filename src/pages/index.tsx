import Image from 'next/image'
import { Inter } from 'next/font/google'
import { swera } from "@fonts"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      {/* <Spliner scene={"/metaverse.splinecode"} /> */}
      <div className="flex-1 w-full h-full p-4 lg:px-40 overflow-visible flex flex-col justify-center items-center gap-16 pt-20">

        <div className="relative flex place-items-center before:absolute before:h-[200px] before:w-[780px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-[240px] after:translate-x-1/2 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[260px] z-[-1]">
          <h1 className={`text-6xl text-white ${swera.className}`}>P2P Prediction Market</h1>
        </div>
        <div className='w-full h-full flex flex-col sm:flex-row justify-evenly items-center'>
          <div className="w-full h-[60vw] sm:h-[70vh] lg:h-[50vh] relative animate-float">
            <Image
              src={'/harry-maguire.svg'}
              alt="Logo"
              fill={true}
              style={{ objectFit: "contain" }}
              loading="eager"
              priority
              sizes="100vw"
            />
          </div>
          <div className="w-full h-[60vw] sm:h-[70vh] lg:h-[50vh] relative animate-float">
            <Image
              src={'/ManchesterUnited.svg'}
              alt="Logo"
              fill={true}
              style={{ objectFit: "contain" }}
              loading="eager"
              priority
              sizes="100vw"
            />
          </div>
        </div>
        <section className="w-full flex">
          <div className="w-full p-8 bg-white text-black rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">Place Your Bet</h2>

            {/* Bet Selection */}
            <div className="mt-4">
              <p className="text-lg font-semibold">Select your bet:</p>
              <div className="flex justify-center items-center mt-2">
                <button type='button' className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md mr-4">
                  At/Above
                </button>
                <button type='button' className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md">
                  Below
                </button>
              </div>
            </div>

            {/* Bet Amount and Expiry */}
            <div className="mt-4">
              <p className="text-lg font-semibold">Bet Amount (in ETH):</p>
              <input
                type="number"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                placeholder="Enter your bet amount"
              />
            </div>

            <div className="mt-4">
              <p className="text-lg font-semibold">Bet Expiry Date:</p>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                placeholder="Select expiry date"
              />
            </div>

            {/* Bet Submission Button */}
            <div className="mt-6">
              <button type='button' className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md">
                Place Bet
              </button>
            </div>

            {/* User's Current Balances */}
            <div className="mt-6">
              <p className="text-lg font-semibold">Your Balances:</p>
              <p className="text-sm text-gray-600">At/Above (LONG): 10 tokens</p>
              <p className="text-sm text-gray-600">Below (SHORT): 5 tokens</p>
            </div>
          </div>

        </section>
      </div>
    </main>
  )
}
