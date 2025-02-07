"use client"

import { MdDelete } from "react-icons/md"

interface DeleteButtonProps{
    title: string;
    id: string;
    onDelete: (id: string) => void;
}

export function DeleteButton({title, id, onDelete}: DeleteButtonProps){
    return(
        <button 
            title={title}
            onClick={() => onDelete(id)}
        >
            <MdDelete size={20} className="hover:text-red-500 duration-300" />
        </button>
    )
}