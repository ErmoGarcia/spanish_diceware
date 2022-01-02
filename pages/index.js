import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-6xl font-bold text-secondary">
        Welcome to <span className="text-alternative">Diceware</span>
      </h1>

      <div className="p-5 mt-20 min-w-[15rem] action-button">
        <p className="text-4xl font-semibold"><Link href="#">Start</Link></p>
      </div>
    </Layout>
  )
}
