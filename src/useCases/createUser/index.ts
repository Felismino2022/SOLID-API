import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgrolUserRepositiry } from "../../repositories/implementations/PostgrolUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const postgrolUserRepository = new PostgrolUserRepositiry()
const mailTrapMailProvider = new MailTrapMailProvider()

const createUserCase = new CreateUserUseCase(
    postgrolUserRepository,
    mailTrapMailProvider
)

const createUserController = new CreateUserController(
    createUserCase
)

export {createUserCase, createUserController}