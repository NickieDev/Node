import { Request, Response } from 'express';
import nodemailer from 'nodemailer'

export const contato = async(req: Request, res: Response) => {
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
   /*let message = { // Forma descritiva
      from: 'Chico Palha <chico.palha@test.com>',
      to: 'test@test.com',
      subject: 'Assunto legal',
      html: 'Opa <strong>Teste</strong>, como vai?',
      text: 'Opa, Teste, como vai?',
   }*/

   /*let message = { // Forma pegando as infos pela requisição
      from: req.body.from,
      to: 'test@test.com',
      subject: req.body.subject,
      html: req.body.email,
      text: req.body.email,
   }*/

   let message = { // Forma de envio como 'não responda'
      from: 'não-responda@test.com',
      to: 'test@test.com',
      replyTo: req.body.from, // Para o email de resposta
      subject: req.body.subject,
      html: req.body.email,
      text: req.body.email,
   }


   // Passo 03> Enviar a mensagem
   let info = await transport.sendMail(message)
   console.log('Info', info)

   // res.json({ pong: true });
   res.json({ success: true });
}