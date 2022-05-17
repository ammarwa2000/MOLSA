// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_MOLSA_db";
import UserModel from "../models/MOLSA_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.MOLSA_db.host +
        ":" +
        properties.MOLSA_db.port +
        "//" +
        properties.MOLSA_db.user +
        "@" +
        properties.MOLSA_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.MOLSA_db.name,
      properties.MOLSA_db.user,
      properties.MOLSA_db.password,
      {
        host: properties.MOLSA_db.host,
        dialect: properties.MOLSA_db.dialect,
        port: properties.MOLSA_db.port,
        logging: false
      }
    );
    this.dbConnection_MOLSA_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_MOLSA_db;
  }
}

export default new Database();
