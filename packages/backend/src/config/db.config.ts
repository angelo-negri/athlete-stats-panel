import { Dialect } from "sequelize";

type DBConfig = {
  HOST: string;
  USER: string;
  PASSWORD: string;
  DB: string;
  port: number;
  dialect: Dialect;
  pool: {
    max: number;
    min: number;
    acquire: number;
    idle: number;
  };
};

const dbConfig: DBConfig = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.MYSQL_USER || "user",
  PASSWORD: process.env.MYSQL_PASSWORD || "password",
  DB: process.env.MYSQL_DATABASE || "athletes",
  port: Number(process.env.DB_PORT),
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default dbConfig;
