import Link from "next/link"
import Image from "next/image"
import logo from "/public/logo-arte-del-gusto.png"
import { LogoutButton } from "../logoutButton"

export function Header(){
    return(
        <header>
            <div className="h-28 max-w-5xl mx-auto flex justify-between items-center px-4">
                <Link href="/dashboard">
                    <Image
                        src={logo}
                        alt="Logo Arte del Gusto"
                        priority={true}
                        width={80}
                        quality={100}
                        className="hover:scale-95 duration-300"
                    />
                </Link>

                <nav className="flex gap-5 items-center">
                    <Link href="/dashboard/categoria" className="hover:text-golden hover:font-bold duration-300">
                        Categorias
                    </Link>
                    <Link href="/dashboard/produto" className="hover:text-golden hover:font-bold duration-300">
                        Produtos
                    </Link>
                    <LogoutButton/>
                </nav>
            </div>
        </header>
    )
}