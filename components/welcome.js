export default function Welcome () {
    return (
        <div>
            <h1 className="text-6xl font-bold text-white">
            Welcome to <span className="text-secondary">Diceware</span>
            </h1>

            <div className="p-5 mt-20 mr-auto ml-auto w-2/3 transition border-4 hover:scale-110 border-secondary ease-in-out text-white hover:text-primary hover:bg-secondary duration-500 drop-shadow-md cursor-pointer">
                <p className="text-4xl font-semibold">Start</p>
            </div>
        </div>
    )
}