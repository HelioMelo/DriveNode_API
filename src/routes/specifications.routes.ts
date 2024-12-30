import { Router } from "express";
import { createSpecificationControlle } from "../modules/cars/useCases/CreateSpecification";


const specificationsRoutes = Router();


specificationsRoutes.post("/", (request, response)=> {
    return createSpecificationControlle.handle(request, response);
})

specificationsRoutes.get("/", (request, response) => {})

export {specificationsRoutes}  