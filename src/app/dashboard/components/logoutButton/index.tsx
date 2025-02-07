"use client"

import Cookies from 'js-cookie';
import { MdLogout } from "react-icons/md";
import { useRouter } from 'next/navigation';

export function LogoutButton(){
    const router = useRouter();

    async function handleLogout(){
        Cookies.remove("session", { path: "/" });
        router.replace("/");
    }

    return(
        <button onClick={handleLogout}>
            <MdLogout size={24} className="hover:text-red-500 duration-300" />
        </button>
    )
}