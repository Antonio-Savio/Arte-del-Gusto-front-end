import { CategoryForm } from "./components/form"
import { api } from "@/services/app"
import { cookies } from "next/headers";
import { Card } from "./components/card";

export interface CategoriesProps{
    id: string;
    name: string;
}

export default async function Categoria(){
    const awaitCookie = await cookies();
    const token = awaitCookie.get("session")?.value;
    
    const response = await api.get("/category", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const categoryList: CategoriesProps[] = response.data;

    return(
        <main className="max-w-3xl mx-auto my-8 px-4">
            <section>
                <h1 className="font-bold text-2xl">Nova Categoria</h1>
            
                <CategoryForm />
            </section>

            <section>
                <h2 className="mt-8 font-bold text-xl">Categorias Cadastradas</h2>

                <ul className="my-4 flex flex-col gap-3">
                    {categoryList.map( category => (
                        <Card key={category.id} category={category} />
                    ))}
                </ul>
            </section>
        </main>
    )
}