// "use server";

import { api } from "@/services/app";
import Cookies from "js-cookie";

const token = Cookies.get("session");

export async function createCategory(formData: FormData) {
  const category = formData.get("category") as string;
  
  if (!category) return;

  try {
      await api.post("/category", {
        name: category
      }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      })

      return { success: `Categoria ${category} criada com sucesso!` };
  } catch(err){
      return { erro: "Houve um erro ao cadastrar. Tente novamente." }
  }
}