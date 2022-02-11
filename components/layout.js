import Head from 'next/head'

export default function Layout(props) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-secondary bg-gradient-to-tr from-primary-500 to-primary-900">
            <Head>
                <title>Diceware</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="animate-fade-in flex flex-col items-center justify-center w-full flex-1 px-10 text-center">

                {props.children}

            </main>
        </div>
    )
}