require("dotenv").config();
const moviesRoutes = require("./routes/movies/moviesRoutes.js");   
const express = require ("express");
const db = require("./db/index");

    const app = new express();                 
    const port = process.env.PORT || 8000;           // port : HTTPS :443  http:18
    db();
    app.use(express.json());
    app.use("/movies", moviesRoutes);   
 
    app.listen (port, () => 
        {          
        console.log(`Express app listening at http://localhost:${port}`);
});