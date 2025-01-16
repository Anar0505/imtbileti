import express from 'express'
const app = express()
const port = 3000
import cors from 'cors'
import mongoose from 'mongoose'
app.use(express.json())
app.use(cors())
const schema = new mongoose.Schema({ name: String, img: String ,price:Number});
const Watch = mongoose.model('Watch', schema);



app.get('/products',async (req, res) => {
  try{ const data = await Watch.find()
  res.send(data)}
  catch{
    res.send("dont work")
  }
})
app.get('/products/:id',async (req, res) => {
    try{
    const id = req.params.id 
    const data = await Watch.findById(id)
    res.send(data)}
    catch{
      res.send("dont work")
    }
  })

  app.post('/products',async (req, res) => {
    try{
    const obj = req.body
   await Watch.create(obj)
    res.send("post")}
    catch{
      res.send("dont work")
    }
  })
  app.put('/products/:id',async (req, res) => {
    try{
    const id = req.params.id 
    const obj = req.body
    await Watch.findByIdAndUpdate(id,{...obj})
    res.send("update")}
    catch{
      res.send("dont work")
    }
  })
  app.delete('/products/:id',async (req, res) => {
    try{
    const id = req.params.id 
    await Watch.findByIdAndDelete(id)
    res.send("delete")}
    catch{
      res.send("dont work")
    }
  })
app.listen(port, () => {
    mongoose.connect('mongodb+srv://anarsabp216:02anar062005@cluster0.9qpk1.mongodb.net/')
    .then(()=>console.log("succes"))
    .catch((err)=>console.log("err",err))
  console.log(`Example app listening on port ${port}`)
})