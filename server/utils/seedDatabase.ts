require('dotenv').config();

const axios = require('axios').default;
import { Client } from 'pg';

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT?process.env.PGPORT:"5432")
})

const createFactsQuery = async () => {
  let query: string = "INSERT INTO Fact(text) VALUES ";
  let dataArray: Array<string> = []
  try {
    let response = await axios.get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=100")
    let data = response?.data;
    data?.map((fact: {text: string}, index: number) => {
      query += `($${index+1}),`;
      dataArray.push(fact.text);
    })
    query=query.replace(/.$/,";"); // replace last ',' with ';' to complete query
    return {query, dataArray};
  }
  catch (e) {
    console.log("WARRNING! unable to fetch Facts data. Make sure you are connected to internet.");
    return null;
  }
}

const createImageQuery = async () => {
  let query: string = "INSERT INTO Image(url) VALUES ";
  let dataArray: Array<string> = []
  try {
    let response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=100")
    let data = response?.data;
    data?.map((fact: {url: string}, index: number) => {
      query += `($${index+1}),`;
      dataArray.push(fact.url);
    })
    query=query.replace(/.$/,";"); // replace last ',' with ';' to complete query
    return {query, dataArray};
  }
  catch (e) {
    console.log("WARRNING! unable to fetch Facts data. Make sure you are connected to internet.");
    return null;
  }
}

const clearDB = async() => {
  try {
    await client.connect();
    await client.query("DELETE FROM Fact; DELETE FROM Image;");
    return true;
  }
  catch (e) {
    console.log("WARNING! Database connection failed. Make sure to put correct credentials in .env file.");
    return false;
  }
}

const seedDatabase = async () => {
  let fdata = await createFactsQuery();
  console.log(">>> Facts data fetched successfully.");
  let idata = await createImageQuery();
  console.log(">>> Image data fetched successfully.");
  let isCleared = await clearDB();
  console.log(">>> Previous data successfully deleted.");
  if (fdata && idata && isCleared) {
    try {
      try {
        await client.query(fdata.query, fdata.dataArray);
        console.log(">>> 100 facts added to database!");
      }
      catch(e) {
        console.log(e);
      }
      try {
        await client.query(idata.query, idata.dataArray);
        console.log(">>> 100 image urls added to database!");
      }
      catch(e) {
        console.log(e);
      }
      await client.end()
    }
    catch (e) {
      console.log(e);
      
      console.log("WARNING! Database connection failed. Make sure to put correct credentials in .env file.");
    }
  }
}

seedDatabase();
