import { Book } from '../models/Book.models.js';


export  const createBook = async (req,res ) => {
    try {
        
        if(
            !req.body.title,
            !req.body.author,
            !req.body.price,
            !req.body.inStock
        ){
            return res.status(400).send({sucess:false});
        }

        const {title,author,price,inStock} = req.body;
        console.log(req.body);
        const book = {
            "title":title,
            "author":author,
            "price":price,
            "inStock":inStock
        }
        const newBook = await Book.create(book);

        if(!newBook){
            return res.status(400).json({success:false,message:"Error in Book Creation"})
        }

        return res.status(201).send(newBook)
    } catch (error) {
        return res.status(500).send({message:error})
    }
}

export const getBooks = async (req,res) => {
    try {

        const books  = await Book.find({});

        if(books){
            return res.status(200).send(books);
        }
        
        return res.status(404).send({success:false,message:"No Book Found"});
    } catch (error) {
        return res.status(500).send({message:error})
    }
}

export const deleteBook = async (req,res) => {
    try {

        const {id} = req.params;

        const deleteBook = await Book.findByIdAndDelete(id);

        if(deleteBook){
            return res.status(200).send({success:true,message:"Deletion Completed."})
        }
        
        
        return res.status(400).send({success:false,message:"Deletion Incomplete"})
    } catch (error) {
        return res.status(500).send({message:error})
    }
}

export const getBookById = async (req, res) =>{
    try {
        const {id}  = req.params;

        const book = await Book.findById(id);

        if(book){
            return res.status(200).send(book)
        }
        return res.status(400).send({sucess:false,message:"No Book Found"})
    } catch (error) {
        return res.status(500).send({message:error})
    }
}

export const updateBook  = async (req,res) => {
    try {
        
        if(
            !req.body.title,
            !req.body.author,
            !req.body.price,
            !req.body.inStock
        ){
            return res.status(400).send({sucess:false});
        }
       
        const {title,author,price,inStock} = req.body;
        const {id} = req.params;
        const book = {
            "title":title,
            "author":author,
            "price":price,
            "inStock":inStock
        }
        const updatedBook = await Book.findByIdAndUpdate(id,book);

        if(updatedBook){
            return res.status(200).send({success:true,message:"Book Updated..."})
        }

        return res.status(400).send({success:false,message:"Error in Updation"})
    } catch (error) {
        return res.status(500).send({message:error})
    }

}
