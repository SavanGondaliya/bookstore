import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AlertTriangle,Trash2 } from 'lucide-react';

const DeleteBook = () => {

    const {id} = useParams();
    const [isError,setIsError] = useState(false);
    const token = localStorage.getItem('token') || '';

    const removeBook = () => {
        console.log("called....");
        
        axios.delete(`http://localhost:5000/api/books/delete/${id}`,
            {
                headers:{
                    "Authorization":`Basic ${token}`,
                    "Content-Type":"application/json"
                }
            }
        ).then((res) => {
            if(res.status === 200){
                window.location.href = "/"
            }
        }).catch((error) => {
            setIsError(false)
        })
    }

 return (
    <div className="min-h-screen flex items-center justify-center p-4">
    

      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-lg bg-gradient-to-br from-white/70 to-white/50 rounded-3xl border border-white/30 shadow-2xl p-8 transform transition-all duration-300 hover:scale-102">

          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-400 rounded-full blur-xl opacity-50 animate-pulse" />
              <div className="relative p-4 rounded-full bg-gradient-to-br from-red-400 to-pink-400 text-white shadow-lg">
                <AlertTriangle size={48} />
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Delete Book?
          </h2>

          <p className="text-center text-gray-700 text-lg mb-8 leading-relaxed">
            Are you sure you want to delete this book? This action cannot be undone.
          </p>

          <div className="space-y-3">
            <button
              onClick={removeBook}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                  <Trash2 size={20} />
                  Yes, Delete It
            </button>

            <a
              href="/"
              className="w-full py-4 px-6 rounded-xl backdrop-blur-lg bg-white/50 border border-white/40 text-gray-700 font-bold text-lg hover:bg-white/70 hover:border-sky-400 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              No, Keep It
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DeleteBook;