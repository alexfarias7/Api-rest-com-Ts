import  Express  from "express";
import  config  from "config";

const app = Express()
//* json middleware
app.use(Express.json())
//* app port
const port = config.get<number>('port')

app.listen(port,async()=>{
    console.log(`app rodando na porta:${port}`)
})