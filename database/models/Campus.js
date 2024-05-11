/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultvalue: "https://www.nyit.edu/files/campus_life/CampusLife_LandingPage_Location_LongIsland_500.jpg",
    allowNull: true
  }
});

// Export the campus model
module.exports = Campus;