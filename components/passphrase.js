import { throwNDices, computeIndex  } from 'diceware-tk';
import { useEffect, useState } from 'react';

export default function Passphrase(props) {
    const [passphrase, setPassphrase] = useState('');
    const { wordlist } = props

    console.log(wordlist)

    useEffect(() => {
        const getPassphrase = async () => {

            const passphrase = []
            for (let i = 0; i < 6; i++) {
                const dices = await throwNDices(5)
                const index = computeIndex(parseInt(dices.join("")))

                passphrase.push(wordlist[index])
            }
            
            console.log(passphrase)
            setPassphrase(passphrase.join(" "))
        }

        getPassphrase()
    }, [])

    return (
        <div>Passphrase: {passphrase}</div>
    )
}