
import 'dotenv/config'

import Express from "express";
import config from "config";
import router from "./router";
import db from '../config/db'
import Logger from '../config/logger'
import morganMiddleware from './middleware/morganMiddleware';

const app = Express();
//* json middleware
app.use(Express.json());
//* app port
const port = config.get<string>("port");

//* middlewares
app.use(morganMiddleware)

//* app routes
app.use("/api/", router);



app.listen(port, async () => {
    await db()
  Logger.info(`app rodando na porta:${port}`);
});
