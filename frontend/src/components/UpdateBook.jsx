import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { BookOpen,User,DollarSign,Package, Grid, List, Plus } from 'lucide-react';

export const UpdateBook = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(0);
    const [inStock, setInStock] = useState(true);
    const [isError, setIsError] = useState(false);
    const { id } = useParams();
    const token = localStorage.getItem('token') || '';

    const updateBook = () => {

        const bookData = {
            "title": title,
            "author": author,
            "price": price,
            "inStock": inStock
        }

        axios.put(`http://localhost:5000/api/books/edit/${id}`,bookData,
            {
                headers: {
                    "Authorization":`Basic ${token}`,
                    "Content-Type":"application/json"
                }
            }
        ).then((res) => {
            if (res.status === 200) {
                window.location.href = "/"
            }
        }).catch((error) => {
            if (error) {
                setIsError(true)
            }
        })
    }

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
            }
        }).catch((error) => {
            setIsError(false)
        })

    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 rounded-2xl">

      <div className="relative z-10 w-full max-w-xl">
        <div className="backdrop-blur-lg bg-gradient-to-br from-white/60 to-white/40 rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12">

          <div className="text-center mb-8">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-sky-400 to-pink-400 text-white mb-4 shadow-lg">
              <BookOpen size={32} />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent mb-2">
               Update Book
            </h1>
          </div>

          <div className="space-y-6">

            <div className="form-field">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title of Book
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <BookOpen className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  value={title}
                  placeholder="Enter Book Title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl backdrop-blur-lg bg-white/50 border border-white/40 outline-none transition-all  text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="form-field">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Author
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  value={author}
                  placeholder="Enter Author Name"
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl backdrop-blur-lg bg-white/50 border border-white/40  outline-none  text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="form-field">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <DollarSign className="text-gray-400" size={20} />
                </div>
                <input
                  type="number"
                  value={price}
                  placeholder="Enter Book Price"
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl backdrop-blur-lg bg-white/50 border border-white/40  outline-none text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="form-field">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Package size={18} />
                Stock Status
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-3 flex-1 p-4 rounded-xl cursor-pointer transition-all  hover:shadow-md">
                  <input
                    name="stock"
                    type="radio"
                    checked={inStock === true}
                    onChange={(e) => setInStock(true)}
                    className="w-5 h-5 text-sky-500 "
                  />
                  <span className="text-gray-700 font-medium">Yes, In Stock</span>
                </label>
                <label className="flex items-center gap-3 flex-1 p-4 rounded-xl cursor-pointer hover:shadow-md">
                  <input
                    name="stock"
                    type="radio"
                    checked={inStock === false}
                    onChange={(e) => setInStock(false)}
                    className="w-5 h-5"
                  />
                  <span className="text-gray-700 font-medium">No, Out of Stock</span>
                </label>
              </div>
            </div>

            <div className="form-button pt-4">
              <button
                onClick={updateBook}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-sky-400 to-pink-400 text-white font-bold text-lg hover:from-sky-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Update Book
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    )
}

