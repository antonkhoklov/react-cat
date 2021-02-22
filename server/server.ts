require('dotenv').config();

const app = require('./app');

const PORT = process.env.SERVER_PORT;

module.exports = app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
