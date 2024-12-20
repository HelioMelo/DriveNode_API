import { Specification } from "../model/Specification";

interface ISpecificationRepositoryDTO{
    name: string;
    description: string;

}


interface ISpecificationsRepository{

    create({name, description}: ISpecificationRepositoryDTO): void;
    findByName(name: string): Specification;

}

export {ISpecificationsRepository, ISpecificationRepositoryDTO}
