import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase{

    constructor(
        private userRepository : IUserRepository,
        private mailProvider : IMailProvider
    ){}

    async execute(data:ICreateUserRequestDTO){

        const userAlreadyExists = await this.userRepository.findByEmail(data.email)

        if(userAlreadyExists){
            throw new Error('Usuario Existente')
        }

        const user = new User(data)

        await this.userRepository.save(user)

        await this.mailProvider.sendMail({
            to:{
                name:data.name,
                email:data.email
            },
            from:{
                name:"felismino",
                email:"felis@gmail.com"
            },
            subject:"Seja bem vindo a plataforma",
            body:'<p>Você já pode fazer o login na nossa plataforma</p>'
        })

    }
}