import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

const PORT = 3333;

app.use("/categories", categoriesRoutes); 

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
