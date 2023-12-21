import {client} from "./index.js" 

function getProduct(req) {
  return client.db("mongo_products").collection("products").find(req.query).toArray();
}


function getProductById(id) {
  return client.db("mongo_products").collection("products").findOne({ id: id });
}

function deleteById(id) {
  return client.db("mongo_products").collection("products").deleteOne({ id: id });
}

function addProduct(product) {
  return client.db("mongo_products").collection("products").insertOne(product);
}

function updateProduct(id,updatedProduct){
  return client.db("mongo_products").collection("products").updateOne({id:id},{$set:updatedProduct})
}

export {getProduct,getProductById,deleteById,addProduct,updateProduct}