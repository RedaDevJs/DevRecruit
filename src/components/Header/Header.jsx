import React from 'react'
import {Link} from "react-router-dom";
import logo from "../../assets/all-images/logo.ico"
const navigation = [
    {path: '/home'},
    {path: '/job_offers'},
    {path: '/training'},
    {path: '/contact'},
]

export default function Header() {
    return (
        <header className="  inset-x-0 top-0 z-50 bg-gray-800 ">
            <nav className="flex items-center justify-between lg:px-8 text-white" aria-label="Global">
                <Link to="/home" className="flex lg:flex-1 items-center text-sky-500 font-sans">
                    <img src={logo} alt=""/>
                    <img src="/dev.ico" alt=""/>
                    <div  className="pt-3 capitalize text-xl"
                          style={{color: '#11F6FD', fontFamily: 'Dancing Script, cursive'}}>
                        recruit
                    </div>
                </Link>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((path,index) => (
                        <Link to={path.path} key={index} className="capitalize flex items-center hover:text-teal-500 ">
                             {path.path.slice((1))}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end text-teal-300 ">
                    <Link to="/Sign In" className="text-l font-semibold leading-6 hover:text-white ">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
        </header>)
}
