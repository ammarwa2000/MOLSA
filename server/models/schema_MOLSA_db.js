// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_MOLSA_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * Staff
      * ------------------------------------
      */
    class Staff extends Sequelize.Model{}
    Staff.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      fmailyID: {
        type: Sequelize.INTEGER
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      surename: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      fmaily:  {
        type: Sequelize.INTEGER,
        references: {
          model: "fmaily",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "staff", timestamps: false }
    );



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );



    /**
      * ------------------------------------
      * fmaily
      * ------------------------------------
      */
    class fmaily extends Sequelize.Model{}
    fmaily.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      date: {
        type: Sequelize.DATE
      },
      
      fname: {
        type: Sequelize.STRING
      },
      
      fsurname: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      fmaily: {
        type: Sequelize.INTEGER,
        references: {
          model: Staff,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "fmaily", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
