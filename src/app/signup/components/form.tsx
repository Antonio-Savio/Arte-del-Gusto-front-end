"use client"

import { api } from "@/services/app"
import { FormEvent, use, useState } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export function Form(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter();

    async function handleRegister(e: FormEvent){
            e.preventDefault()
            
            if (name === "" || email === "" || password === ""){
                return
            }
    
            try{
                await api.post("/users", {
                    name,
                    email,
                    password
                })

                toast.success("Conta criada com sucesso. Use o email e senha para fazer login.")
                router.push("/");

            }catch(err: any){
                console.log(err);
            
                if (err.status === 400 && err.response.data.error === "Email já existe!") {
                    toast.error("Este e-mail já está cadastrado. Por favor, use outro e-mail.");
                } else {
                    toast.error("Ocorreu um erro durante o cadastro. Tente novamente mais tarde.");
                }
              
            }
    
        }

    return(
        <form
            onSubmit={handleRegister}
            className="flex flex-col gap-4 w-full p-2"
        >
            <input
                type="text"
                required
                onChange={ e => setName(e.target.value)}
                placeholder="Digite seu nome"
                className="h-10 border border-gray-400 focus:border-golden rounded-md p-4 duration-300"
            />

            <input
                type="text"
                required
                onChange={ e => setEmail(e.target.value)}
                placeholder="Digite seu email"
                className="h-10 border border-gray-400 focus:border-golden rounded-md p-4 duration-300"
            />

            <input
                type="password"
                required
                onChange={ e => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="h-10 border border-gray-400 focus:border-golden rounded-md p-4 duration-300"
            />

            <button type="submit" className="h-10 rounded-md bg-wine font-bold border border-gray-400 hover:brightness-125 duration-300">
                Cadastrar
            </button>
        </form>
    )
}