import Express from "express";
import config from "config";
import router from "./router";
import db from '../config/db'

const app = Express();
//* json middleware
app.use(Express.json());
//* app port
const port = config.get<string>("port");
//* app routes
app.use("/api/", router);
//* db


app.listen(port, async () => {
    await db()
  console.log(`app rodando na porta:${port}`);
});
