import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Edit,Trash2 } from "lucide-react";

export const Card = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(0);
    const [inStock, setInStock] = useState(true);
    const [isError,setIsError] = useState(false)
    const [key,setKey] = useState("");
    const { id } = useParams();
  
    useEffect(() => {

        axios.get(`http://localhost:5000/api/books/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (res.status === 200) {
                setTitle(res.data.title)
                setAuthor(res.data.author)
                setPrice(res.data.price)
                setInStock(res.data.inStock)
                setKey(res.data._id)
            }
        }).catch((error) => {
            setIsError(false)
        })

    }, []);

  return(
    <React.Fragment>
      <div className="p-6 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-sky-200/30 to-pink-200/30 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl">
      <div className="flex justify-between items-start gap-4 mb-4">

        <div className="space-y-2 text-gray-700">
          {title && (
            <p className="text-lg">
              <span className="font-semibold text-gray-800">Title:</span> {title}
            </p>
          )}
          {author && (
            <p>
              <span className="font-semibold text-gray-800">Author:</span> {author}
            </p>
          )}
        </div>

        <div className="space-y-2 text-gray-700 text-right">
          {price && (
            <p className="text-lg font-bold text-sky-600">
              ${price}
            </p>
          )}
          <p>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold`}>
              {inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </p>
        </div>
      </div>


      <div className="flex gap-3 pt-4 border-t border-white/20">
        <Link
          to={`/books/edit/${id}`}
          className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-400 text-white font-semibold hover:from-sky-500 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
        >
          <Edit size={18} />
          Update
        </Link>
        <Link
          to={`/books/delete/${id}`}
          className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-400 to-red-400 text-white font-semibold hover:from-pink-500 hover:to-red-500 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
        >
          <Trash2 size={18} />
          Delete
        </Link>
      </div>
    </div>
    </React.Fragment>

  )
}