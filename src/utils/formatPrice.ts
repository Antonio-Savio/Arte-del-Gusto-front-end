export function formatPrice(price: string | number){
    let formattedPrice;

    if(typeof price === "string"){
        price = price.replace(/\./g, "").replace(",", ".");
    }

    const numericPrice = Number(price);

    formattedPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(numericPrice);
    

    return formattedPrice
}