import express, { request, response } from 'express';

const app = express();

const PORT = 3333;

app.get('/',(request, response)=>{
  return response.json({message: "Hello word"})
})
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
