import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <h1 className="p-1 text-5xl font-bold">
        <span className="text-6xl text-alternative">Diceware</span> en Español
      </h1>

      <div className="p-3 mt-20 min-w-[12rem] action-button">
        <p className="text-3xl font-semibold"><Link href="./dictionary">Start</Link></p>
      </div>
    </Layout>
  )
}
