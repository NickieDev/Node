import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

type GetAllFilters = { id_event: number, id_group?: number }
export const getAll = async(filters: GetAllFilters) => {
   try {
      return await prisma.eventPeople.findMany({ where: filters })
   } catch(err) { return false }
}

type GetPerson = { id?: number, cpf?: string, id_event: number, id_group?: number }
export const getOne = async(filters: GetPerson) => {
   try {
      if(!filters.id && !filters.cpf) return false
      
      return await prisma.eventPeople.findFirst({ where: filters })
   } catch(err) { return false }
}