import { BiLoaderCircle } from "react-icons/bi";


export default function Loading(){
    return(
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <p className="flex gap-2">
                <span>Carregando</span> 
                <span>
                    <BiLoaderCircle className="animate-spin" size={20}/>
                </span>
            </p>
        </div>
    )
}