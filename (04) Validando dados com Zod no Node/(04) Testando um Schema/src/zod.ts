import z from 'zod'

const schema = z.object({
   name: z.string().min(2),
   email: z.string().email(),
   age: z.number().min(18)
})

let data = {
   name: 'Kaido',
   email: 'email@email.com',
   age: 20
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