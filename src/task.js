const app = express()
app.use(cors())
app.use(express.json())

app.post('/insertMany', async(req, res) => {
     await db.collection("eoc").insertMany(req.body)
     .then((result)=>{
         res.json(result)
     })
     .catch((e)=>console.log(e))
 })
 connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})