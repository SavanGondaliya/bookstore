import React, { useEffect, useState } from 'react';
import { BookCard } from '../components/BookCard';
import { BookList } from '../components/BookList';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BookOpen, Grid, List, Plus } from 'lucide-react';

export const Books = () => {

    const[cardList,setCardList] = useState(false);
    const [bookData,setBookData] = useState([]);
    const [token,setToken] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        console.log("called...");
        
        axios.get('http://localhost:5000/api/books',{
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res) => {
            console.log(res.data);
            
            if(res.status === 200){
                setBookData(res.data)
            }
        }).catch((error) => {
            console.log(error);
        })
    },[]);
    
    useEffect(() => {

        axios.get('http://localhost:5000/api/books',{
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res) => {
            if(res.status === 200){
                setBookData(res.data)
            }
        }).catch((error) => {
            console.log(error);
        })
    },[cardList]);

    const logout = () => {
      localStorage.removeItem('token')
      setToken("")
    }

    useEffect(() => {
      setToken(localStorage.getItem('token'))
      console.log(token);
    },[])


    return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-pink-50 to-sky-100 rounded-2xl">

      <div className="fixed overflow-hidden pointer-events-none rounded-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-sky-300 rounded-full  filter blur-3xl opacity-30 " />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full  filter blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300 rounded-full  filter blur-3xl opacity-20"/>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Book Store
          </h1>
          
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link to={'/books/create'} className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-pink-400 text-white font-semibold hover:from-sky-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
              <Plus size={20} />
              Create Book
            </Link>
            
            <div className="flex gap-2 backdrop-blur-lg bg-white/40 rounded-xl p-2 border border-white/20">
              <button
                onClick={() => setCardList(true)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  cardList
                    ? 'bg-gradient-to-r from-sky-400 to-pink-400 text-white shadow-md'
                    : 'text-gray-600 hover:bg-white/50'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setCardList(false)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  !cardList
                    ? 'bg-gradient-to-r from-sky-400 to-pink-400 text-white shadow-md'
                    : 'text-gray-600 hover:bg-white/50'
                }`}
              >
                <List size={20} />
              </button>
            </div>
            <div className="text-sm content-center font-bold bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent mb-4 cursor-pointer">
                {
                    token !== '' ? <div onClick={logout}>Logout</div> : <Link to={'/login'}>Login</Link>
                }
            </div>
          </div>
        </div>

        <div className="backdrop-blur-sm bg-white/20 rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
          {cardList ? (
            <BookCard books={bookData} />
          ) : (
            <BookList books={bookData} />
          )}
        </div>
      </div>
    </div>
  );
}

