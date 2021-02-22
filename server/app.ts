
import express from 'express';
import { getRandomData } from './utils/db';
import cors from 'cors';

// rest of the code remains same
const app = express();
app.use(cors())

app.get('/facts', async (req: express.Request, res: express.Response) => {
  let total: any = req.query.total;
  try {
    total = parseInt(total);
    if(total<0) {
      total = 0;
    }
    else if (total>100) {
      total = 100;
    }
    let data = await getRandomData(total);
    res.json(data);
  }
  catch(e) {
    res.status(400);
    res.json({msg: "Invalid 'total' parameter!"});
  }
});

module.exports = app;