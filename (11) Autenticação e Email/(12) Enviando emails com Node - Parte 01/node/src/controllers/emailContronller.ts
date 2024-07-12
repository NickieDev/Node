import { Request, Response } from 'express';
import nodemailer from 'nodemailer'

export const contato = (req: Request, res: Response) => {
   // Passo 01: Configurar o transporter
   // https://mailtrap.io/signin => Serviço de email fake
      // sotrambike171
   let transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
         user: "be26057f905de8",
         pass: "808f5d0ca1b858"
      }
   });

   // Passo 02: Configurar a mensagem
   // Passo 03> Enviar a mensagem

   res.json({ pong: true });
}