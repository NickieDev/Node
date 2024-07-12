import { PrismaClient, Prisma } from '@prisma/client'
import * as people from '../services/people'
import * as groups from '../services/groups'

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

type EventsUpdateData = Prisma.Args<typeof prisma.event, 'update'>['data']
   // Em resumo pega o modelo do DB, e verifica os dados para serem atualizados
export const update = async(id: number, data: EventsUpdateData) => {
   try {
      return await prisma.event.update({ where: { id }, data })
   } catch(err) { return false }
}

export const remove = async(id: number) => {
   try {
      return await prisma.event.delete({ where: { id } })
   } catch(err) { return false }
}

export const doMatches = async(id: number): Promise<boolean> => {
   /* Event1
      - Grupo A (id: 1)
         - Nick
         - Shanks
         - Roger

      - Grupo B (id: 2)
         - Mihawk
         - Crocodile
         - Buggy
      
      - Grupo C (id: 3)
         - BigMom
   */

   const eventItem = await prisma.event.findFirst({
      where: { id },
      select: { grouped: true }
   })

   if(eventItem) {
      const peopleList = await people.getAll({ id_event: id })

      if(peopleList) {
         let sortedList: { id: number, match: number }[] = []
         let sortable: number[] = []

         let attempts = 0
         let maxAttempts = peopleList.length
         let keepTrying = true

         while(keepTrying && attempts < maxAttempts) {

         }

         /*if(attempts < maxAttempts) {
            for(let i in sortedList) {
               await people.update({
                  id :sortedList[i].id,
                  id_event: id
               }, { matched: '' }) // TODO: Criar encryptMatch()
            }

            return true
         }*/
      }
   }
   
   return false
}