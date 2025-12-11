import express from "express";
import cors from "cors";
import { PORT } from "./config";
import moviesRouter from "./routes/routes";

export const createApp = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use("/movies", moviesRouter);

  return app;
};

const app = createApp();
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
