import Image from "next/image";
import logoImg from "@/../public/logo-arte-del-gusto.png"
import Link from "next/link";
import { Form } from "./components/form";

export default function Signup(){

    return(
        <main className="min-h-screen flex items-center justify-center flex-col">
            <Image
                src={logoImg}
                alt="Logo Arte de Gusto"
                width={175}
            />

            <section className="w-72 sm:w-96 mt-6 flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold">Crie sua conta</h1>

                <Form/>

                <Link href="/" className="hover:underline">
                    Já possui uma conta? Faça login.
                </Link>

            </section>
        </main>
    )
}