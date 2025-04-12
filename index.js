const express = require("express");
const app = express();

  //console.dir(app);
let port = 8080;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

// app.use((req, res) =>{
//    let code = "<h1>hello</h1>"
//     res.send(code);
// });


// create get method

// app.get("/",(req,res)=>{
//   res.send("you are in home page")
// });
// app.get("/about",(req,res)=>{
//   res.send("you are in about page")
// });

// app.get("/contact",(req,res)=>{
//   res.send("you are in contact page")
// });

// app.get("/:username",(req,res)=>{
//   console.log(req.params);
//   res.send(`hello ${req.params.username}`);
// });

app.get("/search",(req,res)=>{
  console.log(req.query);
  res.send(`${req.query.search} is searched`);
});