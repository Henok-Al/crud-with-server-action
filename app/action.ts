"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

//create todo
export async function create(prevState: any, formData: FormData) {
  "use server";

  try {
    const input = formData.get("input") as string;

    //post our data into our database
    await prisma.todo.create({
      data: {
        input: input,
      },
    });
    revalidatePath("/better");
    
  } catch (error) {
    return "Failed to create"
  }

 
}

//edit todo
export async function edit(formData: FormData) {
  "use server";

  const input = formData.get("input") as string;
  const inputId = formData.get("inputId") as string;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      input: input,
    },
  });

  revalidatePath("/better");
}

//delete to do based on the id
export async function deleteItem(formData: FormData) {
  "use server";
  const inputId = formData.get("inputId") as string;

  await prisma.todo.delete({
    where: {
      id: inputId,
    },
  });

  revalidatePath("/better");
}
