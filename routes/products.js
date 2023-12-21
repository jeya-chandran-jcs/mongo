import { getProduct, getProductById, deleteById, addProduct, updateProduct } from '../getProduct.js'
import  express  from 'express'

const router =express.Router()

//here /product is repeating we can remove or in endpoint use it 2 times
router.get('/', async (req, res) => {
    // console.log(products)
    const { category, rating } = req.query
    console.log(req.query, category)
    if(req.query.rating){
      req.query.rating= +req.query.rating 
    }
   
    const product = await getProduct(req)
    res.send(product)
  })
  
  router.get('/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params, id)
    const product = await getProductById(id)
    product ? res.send(product) : res.status(404).send({alert:"no product is here"})
  })
  
  router.delete('/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params, id)
    const product = await deleteById(id)
   
    res.send(product)
  })
  
  
  router.post("/",async(req,res)=>{
    const {id,name,poster,price,rating,summary,category}=req.body
  
    if(!name || typeof name !=="string" 
       || !poster || typeof poster !=="string" 
       || ! price|| typeof price !=="string" )
    {
      res.status(400).send("missing or invalid fields ")
    }
    
    console.log(id,name,poster,price,rating,summary,category)
    
    const product={id,name,poster,price,rating,summary,category,createdat: new Date()}
    
    try
      {
        const result = await addProduct(product)
  
        res.send({success:true ,message:"product added successfully"})
      }
    catch(err){
      console.log(err)
      res.status(500).send({err:"internal server error catch"})
    }
    
  })

  router.put('/:id', async (req, res) => {
    const { id } = req.params
    const updatedProduct=req.body
    console.log(req.params, id)
    try{
    const product = await updateProduct(id,updatedProduct)
    res.send(product)
    }
    catch(err){
      console.log("error",err)
      res.status(500).send({err:"internal server error"})
    }
    
  })

  export const productRouter=router