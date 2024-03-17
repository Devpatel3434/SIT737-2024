const express= require("express");
// Assigning the Express module to the "express" variable importing it

    const app= express();
    // Making an Express application and setting it for the 'app' variable
    const addTwoNumber= (n1,n2) => {
    // Defining a method called "addTwoNumber" that accepts two parameters, "n1" and "n2," and returns the total of them

        return n1+n2;
    }
    app.get("/addTwoNumber", (req,res)=>{
        // Configuring an HTTP GET route for the endpoint '/addTwoNumber'.
        const n1= parseInt(req.query.n1);
        const n2=parseInt(req.query.n2);
        // Interpreting the request URL's "n1" and "n2" query parameters and turning them into integers
        const result = addTwoNumber(n1,n2);
        // Storing the result in const
        res.json({statuscocde:200, data: result }); 
        // Returning a JSON response containing the sum of data and a status code of 200
    });

    app.get("/", (req, res) => {
        const n1 = "<html><body><H1>HELLO THERE </H1></body></html>";
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(n1));     
    })
    // Configuring a route using the HTTP GET technique for the root URL "/" and 
    // provided as response & Assigning 'text/html' as the response's content type delivering the HTML material in response 

    const port=3040;
    app.listen(port,()=> {     
        console.log("hello i'm listening to port "+port);
    })

    // Assigning the specific port and listning to that
    // log message shows proof that the server is available for connection on the designated port