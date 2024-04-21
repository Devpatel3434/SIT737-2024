var express = require("express")
// useing express like same as import work in python
var app = express()
// Inside there is express function which called as app
var port = process.env.port || 3000;
// this will listen on 3000 port
app.listen(port,()=>{
console.log("App listening to: "+port)
})
// now it will listen to given port which is 3000