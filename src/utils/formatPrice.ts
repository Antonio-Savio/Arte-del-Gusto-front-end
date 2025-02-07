export function formatPrice(price: string | number){
    let formattedPrice;

    if(typeof price === "string"){
        formattedPrice = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(Number(price.replace(",", ".")))
    } else {
        formattedPrice = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(price)
    }

    return formattedPrice
}