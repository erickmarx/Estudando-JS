interface IMailTo{
    name: string
    email: string
}

interface IMailMessage{
    subject: string
    body: string
    attachs?: string[]
}

interface IMailDTO{
    to: IMailTo
    message: IMailMessage
}

interface IMailService{
    sendMail(request: IMailDTO): void
}

class EmailService implements IMailService{

    sendMail({to, message}: IMailDTO){
        console.log(`Email Enviado para ${to.name}: ${message.subject}`)
    }

}

export default EmailService