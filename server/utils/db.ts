import { Client } from 'pg';

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT?process.env.PGPORT:"5432")
})

client.connect()

export const getRandomData = async (limit: number) => {
  const iresult = await client.query('SELECT url FROM Image ORDER BY RANDOM() LIMIT $1;', [limit]);
  const fresult = await client.query('SELECT text FROM Fact ORDER BY RANDOM() LIMIT $1;', [limit]);
  
  let returnData = [];
  // merging data
  for (let i=0 ; i<iresult.rows.length ; i++) {
    returnData.push({
      url: iresult.rows[i].url,
      text: fresult.rows[i].text,
    })
  }
  return returnData;
}