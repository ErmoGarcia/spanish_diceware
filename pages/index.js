import Head from 'next/head'
import Welcome from '../components/welcome'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-primary">
      <Head>
        <title>Diceware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

        <Welcome />

      </main>
    </div>
  )
}
