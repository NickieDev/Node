import { getToday } from "../utils/getToday"

export const validatePassword = (password: string): boolean => {
   const currentPassword = getToday().split('/').join('')
   // 10/10/2023 => [10, 10, 2023] => 10102023
      // A senha é a data atual no padrão acima

   return password === currentPassword
}

export const createToken = () => {
   const currentPassword = getToday().split('/').join('')

   return `${ process.env.DEFAULT_TOKEN }${ currentPassword }`
}

export const validateToken = (token: string) => {
   const currentToken = createToken()

   return token === currentToken
}