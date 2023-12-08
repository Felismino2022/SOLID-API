import {uuid} from 'uuidv4'

export class User{

    public readonly id:string;

    public name:string;
    public email:string;
    public password:string;

    constructor(props:Omit<User, 'id'>, id?:String){
        Object.assign(this, props)

        if(!id){
            this.id = uuid();
        }
    }

    
}