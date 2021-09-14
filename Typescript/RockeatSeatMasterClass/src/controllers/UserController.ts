import {Request, Response} from 'express'
import EmailService from '../services/EmailService'

const users = [
    {name: 'Diego', email: 'diiego@teste.com'}
]

export default {
    async index(req: Request, res: Response){
        return res.json(users)
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService()

        emailService.sendMail(
            {to: {name: 'Diego Fernandes', email: 'diego@teste.com'},
            message: {subject: 'Bem-vindo ao sistema', body: 'foo'}}
        )

        return res.json('email enviado')
    }
}