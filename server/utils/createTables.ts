require('dotenv').config();

import { Client } from 'pg';
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT?process.env.PGPORT:"5432")
})

const createTables = async() => {

  try {
    await client.connect()
    try {
      await client.query('CREATE TABLE Image(id SERIAL PRIMARY KEY, url TEXT NOT NULL);')
      console.log("Image table created successfully!");
    }
    catch(e) {
      console.log("WARNING! Unable to create Image table. It might be possible that Image table already exists.");
    }
    try {
      await client.query('CREATE TABLE Fact(id SERIAL PRIMARY KEY, text TEXT NOT NULL);')
      console.log("Fact table created successfully!");
    }
    catch(e) {
      console.log("WARNING! Unable to create Fact table. It might be possible that Fact table already exists.");
    }
    await client.end()
  }
  catch (e) {
    console.log("WARNING! Database connection failed. Make sure to put correct credentials in .env file.");
  }
  console.log("\n");
}

createTables();