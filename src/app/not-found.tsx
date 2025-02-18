import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";

export default function NotFound(){
    return(
        <main className="h-screen flex flex-col gap-4 items-center justify-center">
            <p className="text-xl">Esta página não existe!</p>
            <Link href="/dashboard" className="flex gap-1 items-center px-4 py-2 rounded-md bg-wine font-bold border border-gray-400 hover:brightness-125 duration-300">
                <MdArrowBackIos size={20}/>
                Voltar para Home
            </Link>
        </main>
    )
}