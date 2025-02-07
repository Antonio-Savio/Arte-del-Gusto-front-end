import { ProductForm } from "./components/form"
import { api } from "@/services/app"
import { cookies } from "next/headers"
import { CategoriesProps } from "../categoria/page";
import { ProductHistory } from "./components/productHistory";

export default async function Produto(){
    const awaitCookie = await cookies();
    const token = awaitCookie.get("session")?.value;

    const response = await api.get("/category", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
   
    const categories: CategoriesProps[] = response.data

    return(
        <main className="max-w-3xl mx-auto my-8 px-4">
            <h1 className="font-bold text-2xl">Novo Produto</h1>
            <ProductForm categories={categories} />

            <ProductHistory categories={categories} />
        </main>
    )
}