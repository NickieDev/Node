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
  const result = await prisma.user.upsert({
      where: { 
         email: data.email 
      },
      update: {
         role: 'ADMIN'
      },
      create: data
  })

  return result
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

export const getAllUsers = async () => {
   let page = 1
   let skip = (page - 1) * 2

   const users = await prisma.user.findMany({ 
      skip,
      take: 2
   })

   return users
}

export const getUserByEmail = async (email: string) => {
   const user = await prisma.user.findUnique({
      where: { email },
      select: {
         id: true,
         name: true
      }
   })

   return user
}

export const updateUser = async () => {
   const updatedUser = await prisma.user.update({
      where: {
         email: 'test@email.com',
      },
      data: {
         role: "ADMIN"
      }
   })

   /*const updatedUser = await prisma.user.updateMany({
      //where: {
        // email: 'test@email.com',
      //},
      data: {
         status: false
      }
   })*/

   return updatedUser
}

export const deleteUser = async () => {
   const deletedUser = await prisma.user.delete({
      where: { 
         email: 'test2@email.com'
      }
   })

   return deletedUser
}