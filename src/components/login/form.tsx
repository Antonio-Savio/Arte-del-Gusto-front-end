"use client"

import { api } from "@/services/app"
import { FormEvent, useState } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import Cookies from 'js-cookie'

export function Form(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter();

    async function handleSubmit(e: FormEvent){
        e.preventDefault()
        
        if (email === "" || password === ""){
            return
        }

        try{
            const response = await api.post("/session", {
                email,
                password
            })

            if(!response.data.token){
                return;
            }

            Cookies.set("session", response.data.token, {
                expires: 30,
                path: "/",
                secure: process.env.NODE_ENV === "production"
            })

            toast.success(`Seja bem-vindo(a), ${response.data.name}!`);
            router.replace("/dashboard")
            

        } catch(err: any){
            console.log("Erro: ", err);
            if (err.response && err.response.data.error){
                toast.error(err.response.data.error)
            }
        }
    }

    return(
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full p-2"
        >
          <input
            type="text"
            required
            onChange={ e => setEmail(e.target.value) }
            placeholder="Digite seu email"
            className="h-10 border border-gray-400 focus:border-golden rounded-md p-4 duration-300"
          />

          <input
            type="password"
            required
            onChange={ e => setPassword(e.target.value) }
            placeholder="Digite sua senha"
            className="h-10 border border-gray-400 focus:border-golden rounded-md p-4 duration-300"
          />

          <button type="submit" className="h-10 rounded-md bg-wine font-bold border border-gray-400 hover:brightness-125 duration-300">
            Entrar
          </button>
        </form>
    )
}