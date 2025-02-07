"use client"

import { useFormStatus } from "react-dom";

interface ButtonProps{
    name: string;
}

export function Button({ name }: ButtonProps){
    const { pending } = useFormStatus()

    return(
        <button
            className="h-10 rounded-md bg-wine font-bold border border-gray-400 hover:brightness-125 duration-300"
            type="submit"
            disabled={pending}
        >
            {pending ? "Carregando..." : name}
        </button>
    )
}