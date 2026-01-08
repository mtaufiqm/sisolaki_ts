import * as pg from "pg";
import * as pgAdapter from "@prisma/adapter-pg";
import * as pgClient from "../generated/prisma/client";
import dotenv from "dotenv";

dotenv.config({override: true});

const pgConfig = new pgAdapter.PrismaPg(new pg.Pool(
    {
        connectionString:process.env.POSTGRESQL_URL!
    }
));
export const client = new pgClient.PrismaClient({adapter: pgConfig});

