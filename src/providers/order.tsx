"use client"

import { createContext, ReactNode, useState } from "react"
import { api } from "@/services/app";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface OrderContextData{
    isOpen: boolean;
    onOpenModal: (order_id: string) => Promise<void>;
    onCloseModal: () => void;
    orders: OrdermItemProps[];
    concludeOrder: (order_id: string) => Promise<void>;
}

export interface OrdermItemProps{
    id: string;
    amount: number;
    order_id: string;
    product_id: string;
    product: {
        id: string;
        name: string;
        price: string;
        description: string
        banner: string;
        category_id: string;
    };
    order: {
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
        name?: string;
    }
}

export const OrderContext = createContext({} as OrderContextData)

export function OrderProvider({ children }: { children: ReactNode }){
    const [isOpen, setIsOpen] = useState(false)
    const [orders, setOrders] = useState<OrdermItemProps[]>([])
    const router = useRouter();

    const token = Cookies.get("session");

    async function onOpenModal(order_id: string){
        const response = await api.get("/order/detail", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                order_id
            }
        })

        setOrders(response.data);  
        setIsOpen(true)
    }

    function onCloseModal(){
        setIsOpen(false)
    }

    async function concludeOrder(order_id: string){
        try{
            await api.put("/order/conclude", {
                order_id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

        } catch(err){
            console.log(err);
            toast.error(`Falha ao concluir pedido. Tente novamente.`)
            return;
        }

        setIsOpen(false)
        router.refresh();
        toast.success(`Pedido concluído com sucesso!`)
    }

    return(
        <OrderContext.Provider
            value={{
                isOpen,
                onOpenModal,
                onCloseModal,
                orders,
                concludeOrder
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}