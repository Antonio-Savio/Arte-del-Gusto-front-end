import Image from "next/image";
import logoImg from '../../public/logo-arte-del-gusto.png'
import Link from "next/link";
import { Form } from "@/components/login/form";

export default function Home(){
  return(
    <main className="min-h-screen flex items-center justify-center flex-col">
      <Image
        src={logoImg}
        alt="Logo Arte de Gusto"
        width={175}
      />

      <section className="w-72 sm:w-96 mt-6 flex flex-col items-center gap-4">
        <Form/>

        <Link href="/signup" className="hover:underline">
          Não possui uma conta? Cadastre-se.
        </Link>

      </section>
    </main>
  )
}