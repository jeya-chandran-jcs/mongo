// const express = require('express')
// const { MongoClient } = require('mongodb')
import express from "express"
import { MongoClient } from "mongodb"
import { productRouter } from "./routes/products.js"
import cors from "cors"
// const dotenv=require('dotenv').config()
import * as dotenv from "dotenv"

const app = express()
app.use(cors)

dotenv.config()
const Port = process.env.Port

//inbuilt middleware
app.use(express.json()) //interpreter==>converting body to json
  //?retr...not mandatory 
const Mongo_Url= process.env.Mongo_Url
// const Mongo_Url = "mongodb://127.0.0.1:27017"
//mongo connect
console.log(process.env.Mongo_Url)

async function connection() {
  const client =new MongoClient(Mongo_Url)
  client.connect()
  console.log("mongodb is connected")
  return client
}

export const client = await connection()


//apiendpoint

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use("/product",productRouter)

app.listen(Port, () => console.log("server is started", Port))



