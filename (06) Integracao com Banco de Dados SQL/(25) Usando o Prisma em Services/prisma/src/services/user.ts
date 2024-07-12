import { prisma } from "../libs/prisma"

/*export const createUser = async (name: string, email: string) => {
   const user = await prisma.user.create({
      data: { name: name, email: email }
   })

   return user
}*/

type CreateUserProps = {
   name: string
   email: string
}

export const createUser = async ({ name, email }: CreateUserProps) => {
   const user = await prisma.user.create({
      data: { name: name, email: email }
   })

   return user
}