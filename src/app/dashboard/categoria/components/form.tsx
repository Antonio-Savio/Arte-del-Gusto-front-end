"use client"

import { Button } from "../../components/button";
import { createCategory } from "@/utils/createCategory";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function CategoryForm(){
    const router = useRouter();

    async function handleSubmit(formData: FormData){
        const result = await createCategory(formData);
        
        if (result?.success){
            router.refresh();
            toast.success(result.success);
        } else if (result?.erro) {
            toast.error(result.erro)
        }
    }

    return(
        <form
            className="flex flex-col gap-4 my-4"
            action={handleSubmit}
        >
            <input
                type="text"
                placeholder="Ex: Laticínios"
                name="category"
                className="h-10 border border-gray-400 focus:border-golden rounded-md p-4 duration-300"
            />

            <Button name="Cadastrar" />
        </form>
    )
}