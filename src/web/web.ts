import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { publicRouter } from "../router/public_router";
import { privateRouter } from "../router/private_router";
import { errorMiddleware } from "../middleware/error_middleware";
import moment from "moment";
require("moment/locale/id.js");
//set moment language
moment.locale("id");

dotenv.config({override: true});

const web = express();
web.set("trust proxy",true);
web.use(cors({
    allowedHeaders:"*",
    exposedHeaders:"*",
    origin:"*"
}));
web.use(express.json());
web.use(publicRouter);
web.use(privateRouter);

//error middleware
web.use(errorMiddleware);
web.listen(process.env.SERVER_PORT);