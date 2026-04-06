
import { configDotenv } from "dotenv";
import { defineConfig } from "prisma/config";


configDotenv({
  override: true
});

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["POSTGRESQL_URL"]??"Undefined"
  }
});
