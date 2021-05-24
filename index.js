const express = require("express");
const db = require("./db.js");
const app = express();
const router = require('./router');
const port = 3000;

// Middleware
app.use(express.json());
app.use(router);



db
.then(()=>{

    app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
})
.catch((err)=> console.log(err.message));
