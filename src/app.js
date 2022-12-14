import express from "express";
import cors from "cors";
import router from "./routes/indexRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => console.log(`Listen on port ${process.env.PORT}`));
