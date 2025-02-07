"use client"

import { CategoriesProps } from "@/app/dashboard/categoria/page"
import { api } from "@/services/app";
import { useRef, useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { DeleteButton } from "@/app/dashboard/components/deleteButton";
import { MdRefresh } from "react-icons/md";
import { formatPrice } from "@/utils/formatPrice";

interface ProductHistoryProps{
    categories: CategoriesProps[];
}

interface ProductsProps{
    id: string;
    name: string;
    price: string;
}

export function ProductHistory({ categories }: ProductHistoryProps){
    const token = Cookies.get("session");
    const [productsByCategory, setProductsByCategory] = useState<ProductsProps[]>()

    const categorySelectRef = useRef<HTMLSelectElement>(null);

    async function handleGetProducts(){
        let category_id: string | undefined;

        if(categorySelectRef.current) {
            category_id = categorySelectRef.current.value;
        }

        console.log(category_id);

        if (!category_id) return;

        try{
            const response = await api.get("/category/product", {
                params: {
                    category_id: category_id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setProductsByCategory(response.data)
            
        } catch(err){
            console.log(err);
        }
    }

    async function handleDeleteProduct(product_id: string){
        try{
            await api.delete("/product", {
                params: {
                    product_id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success("Produto deletado com sucesso!")
        } catch(err: any){
            console.log("Houve um erro: ", err);
            if(err.response.data){
                toast.error(err.response.data.error)
            }
        }

    }

    return(
        <section className="flex flex-col">
            <div className="mt-8 flex gap-4">
                <h2 className="font-bold text-xl">Produtos Cadastrados</h2>
                <button onClick={handleGetProducts} title="Atualizar tabela">
                    <MdRefresh size={24} className="hover:text-emerald-500 duration-300" />
                </button>
            </div>

            <select 
                className="my-4 h-10 px-4 outline-none bg-dark text-white border border-gray-400 focus:border-golden rounded-md duration-300"
                ref={categorySelectRef}
                onChange={handleGetProducts}    
            >
                <option value="">Selecione uma categoria</option>

                {categories.map( category => (
                    <option
                        value={category.id}
                        key={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>

            {productsByCategory && productsByCategory?.length > 0 && (
                
                <table className="w-full border-separate border-spacing-0 rounded-lg overflow-hidden border border-gray-400 bg-dark">
                    <thead>
                        <tr>
                            <th className="p-2 border-r border-gray-400 text-left">Produto</th>
                            <th className="p-2 border-r border-gray-400 text-left">Preço</th>
                            <th className="p-2 text-left">Ação</th>
                        </tr>
                    </thead>

                    <tbody>
                    {productsByCategory.map((product) => (
                        <tr key={product.id}>
                            <td className="p-2 border-r border-t border-gray-400">{product.name}</td>
                            <td className="p-2 border-r border-t border-gray-400">
                                {formatPrice(product.price)}
                            </td>
                            <td className="p-2 border-t border-gray-400">
                                <DeleteButton id={product.id} title="Deletar produto" onDelete={handleDeleteProduct}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            {productsByCategory?.length === 0 && categorySelectRef.current && (
                <p className="text-gray-400">Sem produtos nessa categoria.</p>
            )}

        </section>
    )
}