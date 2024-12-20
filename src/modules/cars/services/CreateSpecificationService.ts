import { ISpecificationsRepository } from "../repositories/ISpecificatiosRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService{

    constructor(private readonly specificationsRepository: ISpecificationsRepository){}

    execute({name, description}: IRequest): void {

    const categoryAlreadyExists = this.specificationsRepository.findByName(name);
    if(categoryAlreadyExists){
        throw new Error("Specification already exists")
    }
        
        this.specificationsRepository.create({
            name,
            description
        })


    }
}

export { CreateSpecificationService}