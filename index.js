import express from 'express'
import cors from 'cors'
import { MongoClient} from 'mongodb'
import 'dotenv/config'

const URI = process.env.MONGO_URI
const client = new MongoClient(URI)

client.connect()
console.log('connected to Mongo')


const app= express()
app.use(cors())
app.use(express.json())

app.listen(4040, () => console.log('API running on port 4040'))

app.get('/', (req,res) => {
    const allProducts = products.find().toArray()
    res.send(allProducts)
})