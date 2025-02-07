"use client"

import { ChangeEvent, useState } from "react";
import { MdUpload } from "react-icons/md";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/app/dashboard/components/button";
import { CategoriesProps } from "@/app/dashboard/categoria/page";
import { api } from "@/services/app";
import Cookies from "js-cookie";

const token = Cookies.get("session")

export function ProductForm({categories}: {categories: CategoriesProps[]}){
    const router = useRouter();
    const [image, setImage] = useState<File>()
    const [previewImage, setPreviewImage] = useState("")

    async function handleCreateProduct(formData: FormData){
        const category = formData.get("category")
        const name = formData.get("name")
        const price = formData.get("price")
        const description = formData.get("description")

        const priceFormat = /^[0-9.,]*$/.test(price as string)

        if (!priceFormat) {
            toast.error("O campo preço aceita apenas números e vírgula. Ex: 9,90")
            setPreviewImage("")
            return;
        }

        if (!name || !category || !price || !description || !image){
            toast.error("Preencha todos os campos.")
            setPreviewImage("")
            return;
        }

        const data = new FormData();

        data.append("file", image);
        data.append("name", name);
        data.append("price", price);
        data.append("description", description);
        data.append("category_id", category);

        try{
            await api.post("/product", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            setPreviewImage("")
            router.refresh();      
            toast.success(`${name} cadastrado com sucesso.`)
            
        } catch(err){
            toast.error("Erro ao cadastrar produto. Tente novamente")
        }
        
    }

    function handleFile(e: ChangeEvent<HTMLInputElement>){
        if(e.target.files){
            const image = e.target.files[0];
            
            if(image.type !== "image/png" && image.type !== "image/jpeg"){
                toast.error("Envie uma imagem no formato PNG ou JPEG")
                return;
            }

            setImage(image)
            setPreviewImage(URL.createObjectURL(image))
        }
    }

    return(
        <form action={handleCreateProduct} className="flex flex-col gap-4 mt-4">
            <label className="w-full h-60 relative bg-dark rounded-md border border-gray-400 flex flex-col items-center justify-center cursor-pointer">
                <span className="z-20 flex flex-col items-center opacity-80 hover:opacity-100 hover:scale-105 duration-300">
                    <MdUpload size={40}/>
                    <h3>
                        Selecione a imagem
                    </h3>
                </span>

                <input 
                    type="file"
                    accept="image/png, image/jpeg"
                    required
                    onChange={handleFile}
                    className="hidden"
                />

                {previewImage && (
                    <Image
                        alt="Preview da imagem"
                        src={previewImage}
                        fill={true}
                        quality={100}
                        priority={true}
                        className="h-full w-full object-cover rounded-md"
                    />
                )}
            </label>

            <select 
                name="category"
                className="h-10 px-4 outline-none bg-dark text-white border border-gray-400 focus:border-golden rounded-md duration-300"
            >
                <option value="">
                    Selecione a categoria
                </option>

                {categories.map( (category) => (
                    <option value={category.id} key={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>

            <input
                type="text"
                name="name"
                placeholder="Digite o nome do produto"
                required
                className="h-10 border border-gray-400 focus:border-golden rounded-md p-4 duration-300"
            />

            <input
                type="text"
                name="price"
                placeholder="Preço. Ex: 19,90"
                required
                className="h-10 border border-gray-400 focus:border-golden rounded-md p-4 duration-300"
            />

            <textarea 
                name="description"
                placeholder="Descrição do produto"
                required
                className="h-28 outline-none bg-dark resize-none border border-gray-400 focus:border-golden rounded-md p-4 duration-300"
            ></textarea>

            <Button name="Cadastrar Produto"/>
        </form>
    )
}