import { Router } from "express";

import { CreateCategoryServices } from "../modules/cars/services/CreateCategoryService";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response)=>{
  
    const {name, description} = request.body;
    const createCategoryServices = new CreateCategoryServices(categoriesRepository);
    createCategoryServices.execute({name, description})
  
    return response.status(201).send();
})

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();
    return response.json(all);
})

export {categoriesRoutes}