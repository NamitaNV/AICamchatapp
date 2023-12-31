const express =require('express');
const bcryptjs = require('bcryptjs');

const app =express ();
require('./db/connection');

const Users =require('./models/User')
 
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const port = process.env.PORT || 8000;


app.get('/', (req,res) =>{
    res.send("Welcome");
})
app.post('/api/register', async(req,res, next) =>{
    try{
        const {fullName, email, password} =req.body;
       if(!fullName || !email || !password){
        res.status(400).send("Please fill all required fields");

       }else{
          const isAlreadyExist = await Users.findOne({ email });

          if(isAlreadyExist){
            res.status(400).send('User already exists');
            }else{
                const newUser = new Users({fullName, email})
                bcryptjs.hash(password, 10, (err, hashedPassword) =>
             {
                newUser.set('password',hashedPassword);
                newUser.save();
                next();
            })
                return res.status(200).send('User registered successfully');   
            }
          }
       }
    
    catch(error){

    }
})

 

app.listen(port, ()=>{
    console.log("listening on port " + port);
})