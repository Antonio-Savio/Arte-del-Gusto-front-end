import { BiLoaderCircle } from "react-icons/bi";


export default function Loading(){
    return(
        <div className="h-screen flex justify-center items-center">
            <p className="flex gap-2">
                <span>Carregando</span> 
                <span>
                    <BiLoaderCircle className="animate-spin" size={20}/>
                </span>
            </p>
        </div>
    )
}