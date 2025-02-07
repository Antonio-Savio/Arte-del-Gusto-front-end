import { api } from "@/services/app";
import { Orders } from "./components/orders"
import { cookies } from "next/headers";
import { OrderProps } from "@/utils/order.type";

async function getOrders(): Promise<OrderProps[] | []>{
    const awaitCookie = await cookies();
    const token = awaitCookie.get("session")?.value;

    try{
        const response = await api.get("orders", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data || []
    } catch(err){
        console.log(err);
        return [];
    }
}

export default async function Dashboard(){
    const orders = await getOrders();
    
    return(
        <>
            <Orders orders={orders} />
        </>
    )
}