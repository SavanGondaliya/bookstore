import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Grid, List, Plus } from 'lucide-react';

export const BookCard = ({books}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {books.map((book) => (
            <div
            key={book.id}
            className="relative group overflow-hidden rounded-2xl backdrop-blur-lg bg-gradient-to-br from-sky-200/30 to-pink-200/30 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-300/20 to-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-sky-400 to-pink-400 text-white">
                    <BookOpen size={24} />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/40 backdrop-blur-sm text-gray-700">
                    {book.genre}
                </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                {book.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-1">{book.author}</p>
                <p className="text-xs text-gray-500">{book.year}</p>

                <div className='w-full'>
                    <Link to={`/books/${book._id}`} className="mt-4 w-1/2 py-2 px-4 mx-1 rounded-lg bg-gradient-to-r from-sky-400 to-pink-400 text-white font-semibold hover:from-sky-500 hover:to-pink-500 transition-all duration-300 shadow-md hover:shadow-lg">
                    View Details
                    </Link>
                </div>
            </div>
            </div>
        ))}
        </div>
    )

}