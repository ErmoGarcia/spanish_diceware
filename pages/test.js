import { readWordlist } from "diceware-tk";
import Passphrase from "../components/passphrase";

export async function getServerSideProps(context) {
    const wordlist = await readWordlist('https://theworld.com/~reinhold/diceware_espanol/DW-Espanol-1.txt')
    return {
        props: { wordlist: wordlist }, // will be passed to the page component as props
    }
}

export default function Test(props) {
    return (
        <Passphrase wordlist={props.wordlist}/>
    )
}