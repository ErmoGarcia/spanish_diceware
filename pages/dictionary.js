import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">
        Elija el diccionario que prefiere utilizar:
      </h1>

      <form className="w-full mt-20">
        <ul className="flex flex-col items-center justify-center">
          <li>
            <input type="radio" id="dictionary-1" name="dictionary" value="1" className="peer opacity-0 h-0 w-0" />
            <label className="peer-checked:text-alternative cursor-pointer text-xl transition ease-in-out duration-500 hover:text-2xl peer-checked:text-2xl" for="dictionary-1">Diccionario 1</label>
            <p className="max-w-[20rem] ml-auto mr-auto opacity-0 peer-checked:opacity-100">Algo menos seguro, pero sin problemas de compatibilidad (no contiene palabras con acentos).</p>
          </li>
          <li className="mt-10">
            <input type="radio" id="dictionary-2" name="dictionary" value="2" className="peer opacity-0 h-0 w-0" />
            <label className="peer-checked:text-alternative cursor-pointer text-xl transition ease-in-out duration-500 hover:text-2xl peer-checked:text-2xl" for="dictionary-2">Diccionario 2</label>
            <p className="max-w-[20rem] ml-auto mr-auto opacity-0 peer-checked:opacity-100">Un poco más seguro, pero puede dar problemas de compatibilidad en algunos servicios (contiene palabras con acentos).</p>
          </li>
        </ul>
      </form>

      <div className="p-2 mt-20 min-w-[12rem] action-button">
        <p className="text-2xl font-semibold"><Link href="#">Next</Link></p>
      </div>
    </Layout>
  )
}