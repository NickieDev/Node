import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const getAll = async() => {
   try {
      return await prisma.event.findMany()
   } catch(err) { return false }
}

export const getOne = async(id: number) => {
   try{
      return await prisma.event.findFirst({ where: { id } })
   } catch(err) { return false }
}

type EventsCreateData = Prisma.Args<typeof prisma.event, 'create'>['data']
   // Em resumo pega o modelo do DB e verifica o que é necessario para fazer o insert do dado.

export const add = async(data: EventsCreateData) => {
   try {
      return await prisma.event.create({ data })
   } catch(err) { return false }
}