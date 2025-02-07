import { OrdermItemProps } from "@/providers/order";
import { formatPrice } from "./formatPrice";

export function calculateTotalPrice(orders: OrdermItemProps[]){
    const totalPrice = orders.reduce((total, order) => {
        return total + parseFloat(order.product.price) * order.amount
    }, 0)
    
    return formatPrice(totalPrice)
}