Welcome to Flights Service

Project Setup

clone the project on your local
Execute `npm install` on the same path as of your root directory of teh downloaded project
Create a `.env` file in the root directory and add the following environment variable
`PORT=3000` and `SYNC_DB=true` or `SYNC_DB=false` accordingly
Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute
`npx sequelize db:migrate`


```
## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  
## Tables

### City -> id, name, created_at, updated_at
  Command to create City Model i.e cities table:
  npx sequelize model:generate --name City --attributes name:String

### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)
  Command to create Airport Model i.e airports table:
  npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

### Airplane -> id, modelNumber, capacity, created_at, updated_at
  Command to create Airplane Model i.e Airplanes table:
  npx sequelize model:generate --name Airplane --attributes modelNumber:String, capacity:Integer

### Flight -> id, flightNumber, airplaneId, departureAirportId, arrivalAirportId, arrivalTime,departureTime, price, boardingGate, totalSeats
  Command to create Flight Model i.e Flights table:
  npx sequelize model:generate --name Flight --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer

```
To generate the seed files for any table , here is the example for aiports table:
 `npx sequelize seed:generate --name add-airports`

To feed all the seed files to tables:
` npx sequelize db:seed:all`

To revert the specific migration:
` db:migrate:undo --name <migration_file_name>`

[Plural-Functions-syntax(which gets exposed after the db synchronization)](https://github.com/sequelize/sequelize/blob/main/packages/core/src/associations/has-many.ts#L157)


[article-link-for-association-functions](https://medium.com/@tavilesa12/dealing-with-many-to-many-associations-in-sequelize-bddc34201b80)
