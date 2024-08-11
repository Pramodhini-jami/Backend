// import http from 'http'
// import { type } from 'os';

// const port = 3000;

// const server = http.createServer((req, res) => {

//     if (req.url === '/myself') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "text/plain");

// res.write("Jami Kameswara Pramodhini\n")
// res.write("Email: jamipramodhini25@gmail.com\n")
// res.write("Phone: 7396511758\n")
// res.write("DOB  : 25-12-2005\n")
// res.write("Nationality: Indian\n")
// res.write("Religion   : Hindu\n")

// res.write("Education:\n")
// res.write("- 1)Keshava Reddy School, Srikakulam\n")
// res.write("- 2)Narayana jnr College, Vishakapatnam\n")
// res.write("- 3)SRKR Engineering college, Bhimavaram\n")

// res.write("Languages known:\n")
// res.write("- Telugu\n")
// res.write("- English\n")
// res.write("- Hindi\n")

// res.write("Hobbies:\n")
// res.write("- Watching movies\n")
// res.write("- Reading novels and story books\n")
// res.write("- Singing\n")

// res.write("Skills:\n")
// res.write("- HTML\n")
// res.write("- Java\n")
// res.write("- JavaScript\n")
// res.write("- Data Structures and Algorithm\n")
// res.write("- Mongo db\n")
// res.end()


//     }

//     else if (req.url === '/html') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "text/html");

// res.write("<h1>Resume</h1>")        
// res.write("<h2>Name:Jami Kameswara Pramodhini</h2>\n")
// res.write("<p>Email:jamipramodhini25@gmail.com</p>\n")
// res.write("<p>Phone:+91 7396511758</p>\n")
// res.write("<p>DOB:25-12-2005</p>\n")
// res.write("<p>Nationality:Indian</p>\n")
// res.write("<p>Religion:Hindu</p><hr></hr>\n")
// res.write("<h2>Education</h2>\n")
// res.write("<ol><li>Keshava Reddy School,Srikakulam</li>\n")
// res.write("<li>Narayana jnr College, Vishakhapatnam</li>\n")
// res.write("<li>SRKR Engineering college , Bhimavaram</li></ol><hr></hr>\n")
// res.write("<h2>Languages known</h2>\n")
// res.write("<ul><li>Telugu</li>\n")
// res.write("<li>English</li>\n")
// res.write("<li>Hindi</li></ul><hr></hr>\n")
// res.write("<h2>Hobbies</h2>\n")
// res.write("<ul><li>Watching movies</li>\n")
// res.write("<li>Reading novels and story books</li>\n")
// res.write("<li>Singing</li></ul><hr></hr>\n")
// res.write("<h2>Skills</h2>\n")
// res.write("<ul><li>Html</li>\n")
// res.write("<li>CSS</li>\n")
// res.write("<li>Javascript</li>\n")
// res.write("<li>Data Structures and Algorithms</li>\n")
// res.write("<li>Mongo db</li></ul>")
//         res.end()
//     }

//     else if (req.method === 'POST' && req.url === '/recivedata') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json");
//         let body = "";
//         req.on("data", (chunk) => {
//             body += chunk.toString();
//         });
//         console.log(body)
//         res.end()
//     }

//     else if (req.url === '/senddata') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json");
//        const data= {
//             "name": "Jami Kameswara Pramodhini",
//             "email": "jamipramodhini25@gmail.com",
//             "phone": "+91 7396511758",
//             "education": [
//               {"school": "Keshava Reddy school", "location": "Srikakulam"},
//               {"school": "Narayana jr.college", "location": "Vishakhapatnam"},
//               {"school": "SRKR Engineering college", "location": "Bhimavaram"}
//             ],
//             "languages": ["Telugu", "English", "Hindi"],
//             "hobbies": ["Watching movies", "readind novels and story books", "Singing"],
//             "skills": ["Html", "CSS", "Javascript","Data Structures and Algorithms", "Mongo db"]
//           }
          
//         res.end(JSON.stringify(data))
//     }

//     else {
//         res.statusCode = 400
//         res.end("Page Not Found\n")
//     }
// });

// server.listen(port, () => {
//     console.log(`Server running at ${port}`);
// }); 

import cors from 'cors';
import express from 'express';
import { connectToDB ,db} from "./db.js";

const app = express()
app.use(cors())
app.use(express.json())

app.post('/signup', async(req, res) => {
     await db.collection("eoc").insertOne({Emailaddress:"jamipramodhini25@gmail.com",CreatePassword:"pramu2005",Confirmpassword:"pramu2005",Verificationcode:1758,Additionalinformation:"hi"})
     .then((result)=>{
         res.json(result)
     })
     .catch((e)=>console.log(e))
 })

// app.get('/', (req, res) => {
//     res.json("server is running successfully!");
// })
// app.post('/login', async(req, res) => {
//     try{
//           const result=await db.collection("eoc").findOne(req.body)
//           if(result){
//             res.json("login sucessful");
//           }
//           else{
//             res.json("login failed")
//           }
//         }
//         catch(e){
//             console.log("error occured")
//         }
//     })
    
// app.post('/insertMany', async(req, res) => {
//     await db.collection("eoc").insertMany(req.body)
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })
// app.post('/find', async(req, res) => {
//     await db.collection("eoc").find({Age:{$gte:17}}).toArray()
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })
// app.post('/querie1', async(req, res) => {
//     await db.collection("eoc").find({Age:{$gte:20}}).count()
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })
// app.post('/find', async(req, res) => {
//     await db.collection("eoc").find({Age:{$lt:18}}).toArray()
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })
// app.post('/find', async(req, res) => {
//     await db.collection("eoc").find({Age:{$lte:17}}).toArray()
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })
// app.post('/find', async(req, res) => {
//     await db.collection("eoc").find({Age:{$exists:"true"}}).toArray()
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })

app.post('/signin', async(req, res) => {
    await db.collection("eoc").findOne({email:req.body.Emailaddress,password:req.body.Password})
    .then((result)=>{
        if(result?.password===req.body.Password){
            res.json({message:"login sucess", values:result})
        } else {
            res.json({error:"user not found"})
        }
    })
    .catch((e)=>console.log(e))
})


connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})