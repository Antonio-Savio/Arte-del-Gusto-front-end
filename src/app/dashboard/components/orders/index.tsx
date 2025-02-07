"use client"

import { use } from "react";
import { OrderContext } from "@/providers/order";
import { MdRefresh } from "react-icons/md";
import { OrderProps } from "@/utils/order.type";
import { ModalOrder } from "../modal";
import { useRouter } from "next/navigation";

interface Props{
    orders: OrderProps[];
}

export function Orders({ orders }: Props){
    const { isOpen, onOpenModal } = use(OrderContext)
    const router = useRouter();

    function handleRefresh(){
        router.refresh();
    }

    return(
    <>
        <main className="max-w-3xl mx-auto my-8 px-4">
            <section className="flex items-center gap-3">
                <h1 className="text-2xl font-bold">Últimos Pedidos</h1>
                <button title="Atualizar Pedidos" onClick={handleRefresh}>
                    <MdRefresh className="hover:text-emerald-500 duration-300" size={24}/>
                </button>
            </section>

            <section className="my-4 flex flex-col gap-4">
                {orders.length === 0 && (
                    <span className="text-gray-400">Nenhum pedido em aberto no momento.</span>
                )}

                {orders.map( order => (
                    <button 
                        key={order.id}
                        className="border-l-4 border-emerald-500 text-left bg-dark p-4 rounded-md hover:bg-black duration-300"
                        onClick={() => onOpenModal(order.id)}
                    >
                        Mesa {order.table}
                    </button>
                ))}

            </section>
        </main>
    
        {isOpen && <ModalOrder/>}
    </>
    )
}