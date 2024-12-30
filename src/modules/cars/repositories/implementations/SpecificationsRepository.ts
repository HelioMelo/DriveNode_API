import { Specification } from "../../model/Specification";
import { ISpecificationRepositoryDTO, ISpecificationsRepository } from "../ISpecificatiosRepository";




class SpecificationsRepository implements ISpecificationsRepository{
    private readonly specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;

    private constructor(){
        this.specifications = [];
    }
   
    public static getInstance(): SpecificationsRepository{
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ISpecificationRepositoryDTO): void {
        const specification = new Specification();
        Object.assign(specification,{
           name,
           description,
           created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    list(): Specification[]{
        return this.specifications;
    }

    findByName(name: string): Specification {
       const specification = this.specifications.find(specification => specification.name === name);
       return specification;
    }

}

export { SpecificationsRepository}