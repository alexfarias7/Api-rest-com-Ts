import { Router, Request, Response } from "express";
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidatiom";
import { movieCreateValidator } from "./middleware/movieValidatiom";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("api esta funcionando normal");
  })
  .post("/movie", movieCreateValidator(), validate, createMovie)
  .get("/movie/:id", findMovieById)
  .get("/movie", getAllMovies)
  .delete('/movie/:id', removeMovie)
  .patch('/movie/:id', movieCreateValidator(), validate, updateMovie)
