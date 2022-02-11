import { getPassphrase } from 'diceware-tk';
import { useEffect, useState } from 'react';

export default function Test() {
    const [passphrase, setPassphrase] = useState('');

    useEffect(() => {
        const generatePassphrase = async () => {
            const phrase = await getPassphrase()
            setPassphrase(phrase)
        }

        generatePassphrase()
    }, [])

    return (
        <div>Passphrase: {passphrase}</div>
    )
}