import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundRequest: RequestHandler = (req, res) => {
   res.status(404).json({ error: 'Route not found' })
}

export const errorhandler: ErrorRequestHandler = (err, req, res) => {
   console.log(err)
   res.status(500).json({ error: 'Ocorreu um erro' })
}