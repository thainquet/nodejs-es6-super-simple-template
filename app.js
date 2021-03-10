import express from 'express';
import data from './data'
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(data[0]);
})

app.listen(port, ()=>{
  console.log(`app is listening on port ${port}`);
});