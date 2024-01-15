//  Modüller
const express = require('express');

//  Uygulamayı oluşturma
const app = express();
app.use(express.json());

//  Route oluşturma
app.get("/", (req,res) => {
    res.send("Hello world!..")
});

//  Port oluşturma ve dinleme
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Server listening Port:${port}`)
});