import z from 'zod'

const schema = z.object({
   name: z.string().min(2),
   email: z.string().email(),
   age: z.number().min(18),
   status: z.boolean(),
   caracteristics: z.array(
      z.object({
         name: z.string(),
         value: z.number()
      })
   )
})

type User = z.infer<typeof schema> // 'Importa os type de schema'

let data: User = {
   name: 'Kaido',
   email: 'email@email.com',
   age: 20,
   status: true,
   caracteristics: [
      { name: 'Força', value: 100 },
      { name: 'Agilidade', value: 50 }
   ]
}

// const result = schema.parse(data) // Exibe a mensagem de erro
// console.log(result)
const result = schema.safeParse(data)

if( result.success ) {
   console.log('Deu certo! Vamos continuar')
   console.log(result.data)
} else {
   console.log('Deu problema! Verifique os dados')
}