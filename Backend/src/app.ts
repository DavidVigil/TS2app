import express, { Request, Response } from "express"
import helmet from "helmet";
import router from "./routes/index.route";
import bodyParser from "body-parser";

const PORT = process.env.PORT ?? 3000;

const app: express.Application = express();
app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(helmet());
app.use("/api/v1", router)

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({error: `Ruta ${req.originalUrl} no encontrado`})
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})