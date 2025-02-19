"use client"

import { use } from 'react'
import { OrderContext } from '@/providers/order';
import { MdClose } from "react-icons/md";
import { formatPrice } from '@/utils/formatPrice';
import { calculateTotalPrice } from '@/utils/calculateTotalPrice';

export function ModalOrder(){
    const { onCloseModal, orders, concludeOrder } = use(OrderContext);

    return(
        <dialog className="fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center px-4 text-foreground bg-white bg-opacity-20 backdrop-blur-sm">
            <section className="relative bg-background p-4 rounded-md w-full sm:w-3/5 xl:w-2/5 max-h-[80vh] overflow-auto">
                <button onClick={() => onCloseModal()}>
                    <MdClose size={30} className="text-red-500 hover:text-foreground duration-300"/>
                </button>

                <article className="flex flex-col gap-3">
                    <h2 className="text-2xl">Detalhes do pedido</h2>
                    
                    <h4 className="font-bold text-golden text-lg">
                        Mesa {orders[0].order.table}
                        {orders[0].order.name && (
                            <span> - cliente {orders[0].order.name}</span>
                        )}
                    </h4>

                    <ul className="ml-4">
                        {orders.map( order => (
                        <li key={order.id} className="list-disc mb-2">
                            <p>
                                <span><strong>{order.product.name}</strong></span>
                                <span> - Qtd: {order.amount} - </span>
                                <span>{formatPrice(parseFloat(order.product.price.replace(",", ".")) * order.amount)}</span>
                            </p>
                            <p className="text-gray-400">{order.product.description}</p>
                        </li>
                        ))}
                    </ul>

                    <p>Preço final: {calculateTotalPrice(orders)}</p>

                    <button 
                        className="self-start px-4 py-2 rounded-md bg-green-400 text-background hover:font-bold duration-300"
                        onClick={() => concludeOrder(orders[0].order_id)}    
                    >
                        Concluir o pedido
                    </button>
                </article>
            </section>
        </dialog>
    )
}