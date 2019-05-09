const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// moongoose
mongoose.connect("mongodb://localhost:27017/Involve", {
    useNewUrlParser: true }, (err) => {
        if(!err){console.log("MongoDB connected")}
        else {console.log("Error in DB connection")};
})

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', require('./routes/index'));
  

const port = process.env.PORT|| 4000
app.listen(port, console.log(`Server is connected ${port}`));
