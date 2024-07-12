import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import { prisma } from "../libs/prisma"
import { Prisma } from "@prisma/client"

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

export const createUser = async (data: Prisma.UserCreateInput) => {
   try {
      const user = await prisma.user.create({ data })

      return user
   } catch (error) {
      return false
   }

}

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
   try {
      return await prisma.user.createMany({
         data: users,
         skipDuplicates: true
      })
   } catch (error) {
      return false
   }
}