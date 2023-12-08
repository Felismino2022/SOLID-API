import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";


export class CreateUserController{

    constructor(
        private createUserCase:CreateUserUseCase
    ){}

    async handle(request:Request, response:Response) : Promise<Response>{

        const {name, email, password} = request.body

        try {
            await this.createUserCase.execute({
                name,
                email,
                password
            })

            return response.status(201).send()
            
        } catch (error) {
            return response.status(400).json({
                message:error
            })
        }
    }
}