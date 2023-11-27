import express from "express";


const app = express();

fetch('')
.then(function(res))

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow', '*'); // koik domeenid
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    next();
})


app.listen(3005, () => {
    console.log('backend server connected ')

})
