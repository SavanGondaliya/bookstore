import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Grid, List, Plus } from 'lucide-react';

export const BookList = ({books}) => {
    
    
    console.log("books from bookList",books);
    
    return (
        <div className="space-y-4 p-6">
        {books.map((book) => (
            <div
            key={book._id}
            className="flex justify-around items-center gap-4 p-4 rounded-xl  border border-white/20 shadow-lg hover:shadow-xl"
            >
                <div className="p-3 rounded-lg bg-gradient-to-br from-sky-400 to-pink-400 text-white flex-shrink-0">
                    <BookOpen size={20} />
                </div>
            
                <div className="flex-grow">
                    <h3 className="font-bold text-gray-800">{book.title}</h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/40 backdrop-blur-sm text-gray-700">
                        $ {book.price}
                    </span>
                </div>
            
                <div>
                    <Link to={`/books/${book._id}`} className="mt-4 w-1/2 py-2 px-4 mx-1 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 text-white font-semibold hover:from-sky-500 hover:to-pink-500 transition-all duration-300 shadow-md hover:shadow-lg">
                    View Details
                    </Link>
                </div>
            </div>
        ))}
        </div>
    );

}