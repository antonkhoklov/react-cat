# Cat Facts Server

Server code for cats facts app.

### How to setup!

From the project directory run:
```
npm install
```

Make sure Postgres Server is running. Update .env file with correct info. Bellow is an example of how .enc file might look like:
```
    PGHOST=localhost
    PGUSER=postgres
    PGDATABASE=catfacts_db
    PGPASSWORD=pgpassword
    PGPORT=5432
    
    SERVER_PORT=3001
```
To create database tables automatically, run the following command:
```
npm run createTables
```

To deed database, run the following command:
```
npm run seedDB
```

Everything is ready. Now run the following command to start the server:
```
npm start
```

### How to run tests!

Run the following command to test the api:
```
npm test
```
