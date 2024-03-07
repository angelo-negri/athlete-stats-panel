import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

export const checkDBConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to MYSQL database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
