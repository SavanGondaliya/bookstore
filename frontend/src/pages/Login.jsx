import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User,Lock } from 'lucide-react';

export const SignUp = () => {

    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = () => {

        const userData = {
            "username": username,
            "password": password
        }
        console.log(userData);

        axios.post("http://localhost:5000/api/login", userData, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token);
                navigate('/')
            }
        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <React.Fragment>
            <div className="min-h-screen  flex items-center justify-center p-4">
                
                <div className="relative z-10 w-full max-w-md">
                    <div className="backdrop-blur-lg from-white/60 to-white/40 rounded-3xl border border-white/30 shadow-2xl p-8 md:p-10">

                        <div className="space-y-5">

                            <div className="form-field">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Username
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl backdrop-blur-lg bg-white/50 border border-white/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400"
                                    />
                                </div>
                            </div>


                            <div className="form-field">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type='password'
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-12 pr-12 py-3.5 rounded-xl backdrop-blur-lg bg-white/50 border border-white/40 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={login}
                                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-sky-400 to-pink-400 text-white font-bold text-lg hover:from-sky-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                Login
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}