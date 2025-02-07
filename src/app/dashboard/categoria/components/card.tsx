"use client"

import { DeleteButton } from "../../components/deleteButton"
import { CategoriesProps } from "../page"
import { api } from "@/services/app"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export interface CardProps{
    category: CategoriesProps;
}

const token = Cookies.get("session");

export function Card({category}: CardProps){
    const router = useRouter();

    async function deleteCategory(id: string){
        try{
            await api.delete("/category", {
                params: {
                    category_id: id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            router.refresh();
            toast.success(`Categoria ${category.name} excluída.`)

        } catch(err: any){
            if(err.response && err.response.data.error){
                toast.error(err.response.data.error);
            } else {
                toast.error("Erro ao deletar categoria.")
            }
        }
    }

    return(
        <li
            key={category.id}
            className="flex justify-between bg-dark px-4 py-2 rounded-md hover:bg-black duration-300"
        >
            {category.name}
    
            <DeleteButton 
                title="Deletar categoria"
                id={category.id}
                onDelete={deleteCategory}
            />
        </li>
    )
}