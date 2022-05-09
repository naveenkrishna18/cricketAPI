
# Cricket API

A REST API for getting Information and Statistics about Indian cricketers who have represented 
india in the international form of cricket.

This API currently only supports One Day International (ODI) statistics and will be updated 
in future with other formats as well.

This is a mini project based on NodeJS, Mongoose and MongoDB. This API was written just to enhance my knowledge and skills 
in programming. Not intended for commercial usage.

This API was hosted and tested only on Local Environment (Localhost) and currently has not been
hosted online.

The player Information was last updated on 09/05/2022.


## Libraries/Frameworks/Databases/Tools used

- Node.js 
- Express Framework
- Mongoose Library
- MongoDB for Database
- Postman for API Testing
## Authors

- [@naveenkrishna18](https://www.github.com/naveenkrishna18)


## Deployment

To deploy this project run npm install

```bash
  npm install
```

To run the server use node command or nodemon command to run the app.js javascript source file.

```bash
  node app.js
  nodemon app.js
```


## Run Locally

WARNING : This API does not work without proper mongodb initialization. Please follow the
necessary steps to setup mongodb.

Clone the project

```bash
  git clone https://github.com/naveenkrishna18/cricketAPI.git
```

Go to the project directory

```bash
  cd cricketAPI
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```


## Get Response

The default route to get player profile of all players is 

```bash
localhost:3000/odi/playerprofile

```

To get player profile of a specific player

```bash
localhost:3000/odi/playerprofile/playername

```
for Example, If we need player profile of Rohit Sharma, The route will be,

```bash
localhost:3000/odi/playerprofile/Rohit%20Sharma

```

The default route to get Batting Stats of all players is 

```bash
localhost:3000/odi/battingstats
```

To get Batting Stats of a specific player

```bash
localhost:3000/odi/battingstats/playername

```
for Example, If we need player profile of Sachin Tendulkar, The route will be,

```bash
localhost:3000/odi/battingstats/Sachin%20Tendulkar

```

The default route to get Bowling Stats of all players is 

```bash
localhost:3000/odi/bowlingstats
```

To get Batting Stats of a specific player

```bash
localhost:3000/odi/bowlingstats/playername

```
for Example, If we need player profile of Ravichandran Ashwin, The route will be,

```bash
localhost:3000/odi/bowlingstats/Ravichandran%20Ashwin

```



## License

[GNU General Public License v3.0](https://github.com/naveenkrishna18/cricketAPI/blob/main/LICENSE)


## Contact Me


[LinkedIn](linkedin.com/in/naveen-krishna-07bab8167)


[Email](naveenganapathyprasad@gmail.com)

